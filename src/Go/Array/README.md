---
title: Array
icon: material-symbols:data-array
# cover: /assets/image/go.png
author: 王泽权
date: 2023-01-06
category:
  - Go
tag:
  - Go
sticky: true
star: true
copyright: 王泽权
---

Go 语言中的数组可以简单理解为存储同一种数据类型且存储数量（长度）固定的序列，数组在规划内存的详细布局时很有用，它不仅是切片的构建块，Go 语言中许多基础的数据结构都是通过数组来实现数据的存储工作。

数组这个概念在许多语言中皆有存在，而 Go 语言是一门属于 C 语言家族的编程语言，但在 Go 语言和 C 语言中，数组的工作方式有很大的不同。

```go
package main

import (
	"fmt"
    "reflect"
)

func show(x [4]int) {
    fmt.Printf("Address(Array) = %p --> %d\n", &x, x)
}

func compare(x [4]int, y [5]int) {
    fmt.Printf("copyArray == compareArray  %t \n", reflect.TypeOf(x) == reflect.TypeOf(y))
}

func main() {
    Array := [4]int{ 0, 1, 2, 3 }
    var copyArray [4]int
    var compareArray [5]int
    copyArray = Array

    fmt.Printf("copyArray --> %d \n", copyArray)
    fmt.Printf("Address(Array) = %p --> %d\n", &Array, Array)
    fmt.Printf("Address(copyArray) = %p --> %d\n", &copyArray, copyArray)
    show(Array)
    compare(copyArray, compareArray)
}

// L22: copyArray --> [0 1 2 3] 
// L23: Address(Array) = 0xc0000a0000 --> [0 1 2 3]
// L24: Address(copyArray) = 0xc0000a0020 --> [0 1 2 3]
// L25: Address(Array) = 0xc0000a00c0 --> [0 1 2 3]
// L26: copyArray == compareArray  false
```

<center>code - 1 : Go 语言数组</center><br>

- 数组是值，将一个数组分配给另一个数组会复制所有元素。
- 数组变量表示整个数组，如果将数组传递给函数，它将收到数组的副本，而不是指向它的指针。
- 数组的存储数量（长度）是其类型的一部分， [10]int 和 [20]int 类型是不同的，所以数组不能被随意调整大小。
## 数据结构
首先我们先来看一下 Array 的数据结构，从 code - 1 中我们可以看到该类型包含两个字段，分别是元素类型 Elem 和数组的大小 Bound，这两个字段共同构成了数组类型。
```go
// src/cmd/compile/internal/types/type.go

// Array contains Type fields specific to array types.
type Array struct {
	Elem  *Type // element type
	Bound int64 // number of elements; <0 if unknown yet
}
```

<center>code - 2 ：Array 数据结构</center><br>

![](./image/array.svg)

<center>图 1 ：Array 数据结构</center><br>

## 类型声明
如 code - 3 所示我们可以使用两种方式在 Go 语言中声明数组，即一种是直接在 [] 里指定数组大小，另一种是使用 [...] 后面添加你想要声明的数据类型，Go 语言会在编译期间通过源代码推导数组的大小。
```go
var arr [4]int

arr = [4]int{ 0, 1, 2, 3 }
arr = [...]int{ 0, 1, 2, 3 }
```

<center>code - 3 ：Array 类型声明</center><br>

既然存在两种不同的声明方式，那么编译器所做出的处理也大不相同，那么我们就来看一下编译器在遇到不同情况时所做出的处理如 code - 4 所示，如果当前节点的操作类型是 OTARRAY 也就是我们使用的第一种声明方式，会向 tcArrayType 函数传入 ArrayType 类型的结构体 code - 6 指针来进行处理，如果当前节点的操作类型是 OCOMPLIT 也就是我们使用的第二种声明方，会向 tcCompLit 函数传入 CompLitExpr 类型的结构体 code - 8 指针来进行处理。
```go
// src/cmd/compile/internal/typecheck/typecheck.go

// typecheck1 should ONLY be called from typecheck.
func typecheck1(n ir.Node, top int) ir.Node {
	if n, ok := n.(*ir.Name); ok {
		typecheckdef(n)
	}

	switch n.Op() {
	default:
		ir.Dump("typecheck", n)
		base.Fatalf("typecheck %v", n.Op())
		panic("unreachable")

    ...

	case ir.OTARRAY:
		n := n.(*ir.ArrayType)
		return tcArrayType(n)

    ...

	case ir.OCOMPLIT:
		return tcCompLit(n.(*ir.CompLitExpr))

    ...

}
```

<center>code - 4 ：typecheck1() 方法</center><br>

下面我们就来看看 tcArrayType() 方法 code - 5 首先具体细节我们暂时先不提及，来看看他的大体实现思路，当我们以已第一种声明方式进入到此函数时，该函数会对其进行错误判断，没有出现错误时就会调用 NewArray() 方法。
```go
// src/cmd/compile/internal/typecheck/type.go

// tcArrayType typechecks an OTARRAY node.
func tcArrayType(n *ir.ArrayType) ir.Node {
	n.Elem = typecheckNtype(n.Elem)
	if n.Elem.Type() == nil {
		return n
	}
	if n.Len == nil { // [...]T
		if !n.Diag() {
			n.SetDiag(true)
			base.Errorf("use of [...] array outside of array literal")
		}
		return n
	}
	n.Len = indexlit(Expr(n.Len))
	size := n.Len
	if ir.ConstType(size) != constant.Int {
		switch {
		case size.Type() == nil:
			// Error already reported elsewhere.
		case size.Type().IsInteger() && size.Op() != ir.OLITERAL:
			base.Errorf("non-constant array bound %v", size)
		default:
			base.Errorf("invalid array bound %v", size)
		}
		return n
	}

	v := size.Val()
	if ir.ConstOverflow(v, types.Types[types.TINT]) {
		base.Errorf("array bound is too large")
		return n
	}

	if constant.Sign(v) < 0 {
		base.Errorf("array bound must be non-negative")
		return n
	}

	bound, _ := constant.Int64Val(v)
	t := types.NewArray(n.Elem.Type(), bound)
	n.SetOTYPE(t)
	types.CheckSize(t)
	return n
}
```

<center>code - 5 ：tcArrayType() 方法</center><br>

```go
// src/cmd/compile/internal/ir/type.go

// An ArrayType represents a [Len]Elem type syntax.
// If Len is nil, the type is a [...]Elem in an array literal.
type ArrayType struct {
	miniType
	Len  Node
	Elem Ntype
}
```

<center>code - 6 ：ArrayType 结构体</center><br>

我们在来看看 tcCompLit() 方法 code - 7 当我们使用第二种声明方式时，编译器会在的 tcCompLit 方法中调用 typecheckarraylit 方法通过遍历元素的方式来计算数组中元素的数量。
```go
// src/cmd/compile/internal/typecheck/expr.go

// The result of tcCompLit MUST be assigned back to n, e.g.
// 	n.Left = tcCompLit(n.Left)
func tcCompLit(n *ir.CompLitExpr) (res ir.Node) {
    
    ...
    
	// Need to handle [...]T arrays specially.
	if array, ok := n.Ntype.(*ir.ArrayType); ok && array.Elem != nil && array.Len == nil {
		array.Elem = typecheckNtype(array.Elem)
		elemType := array.Elem.Type()
		if elemType == nil {
			n.SetType(nil)
			return n
		}
		length := typecheckarraylit(elemType, -1, n.List, "array literal")
		n.SetOp(ir.OARRAYLIT)
		n.SetType(types.NewArray(elemType, length))
		n.Ntype = nil
		return n
	}

    ...

	switch t.Kind() {
	default:
		base.Errorf("invalid composite literal type %v", t)
		n.SetType(nil)

	case types.TARRAY:
		typecheckarraylit(t.Elem(), t.NumElem(), n.List, "array literal")
		n.SetOp(ir.OARRAYLIT)
		n.Ntype = nil

    ...
    
}
```

<center>code - 7 ：tcCompLit() 方法</center><br>

```go
// src/cmd/compile/internal/ir/expr.go

// A CompLitExpr is a composite literal Type{Vals}.
// Before type-checking, the type is Ntype.
type CompLitExpr struct {
	miniExpr
	origNode
	Ntype    Ntype
	List     Nodes // initialized values
	Prealloc *Name
	Len      int64 // backing array length for OSLICELIT
}

```

<center>code - 8 ：CompLitExpr 结构体</center><br>

看到这里我们可以发现不管是第一种还是第二种声明方式在运行时是完全等价的到最后都会调用 NewArray 方法 code - ? 来创建包含数组大小的 Array 结构体 code - ? ，第二种声明方式也只是 Go 语言为我们提供的一种语法糖。
```go
// src/cmd/compile/internal/types/type.go

// NewArray returns a new fixed-length array Type.
func NewArray(elem *Type, bound int64) *Type {
	if bound < 0 {
		base.Fatalf("NewArray: invalid bound %v", bound)
	}
	t := newType(TARRAY)
	t.extra = &Array{Elem: elem, Bound: bound}
	t.SetNotInHeap(elem.NotInHeap())
	if elem.HasTParam() {
		t.SetHasTParam(true)
	}
	if elem.HasShape() {
		t.SetHasShape(true)
	}
	return t
}
```

<center>code - 9 ：NewArray() 方法</center><br>

![](./image/declaration.svg)

<center>图 2 ：Array 声明过程</center><br>
