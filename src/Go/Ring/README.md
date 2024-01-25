---
title: Ring
icon: icon-park-outline:ring
# cover: /assets/image/go.png
author: 王泽权
date: 2023-04-09
category:
  - Go
tag:
  - Go
sticky: true
star: true
copyright: 王泽权
---

今天给大家带来的是 Go 语言提供的内置容器 Ring，简单理解 Ring 就是一个双向循环链表，但 Ring 并没有表头与表尾的概念，Ring 的表头与表尾相连，构成一个环。
## Ring 数据结构
老规矩我们先来了解一下 Ring 的数据结构，从 code - 1 中我们可以看到 Ring 的数据结构分别由两个指针 next、prev 和用于存储数据的 value 组成，首先从指针的命名中我们也可以得出是指向下一个或上一个 Ring 类型，简单思考一下，如图 1 通过这种数据结构我们可以创建一个环状的数据结构，有点像循环队列。
```jsx
// src/container/ring/ring.go

// A Ring is an element of a circular list, or ring.
// Rings do not have a beginning or end; a pointer to any ring element
// serves as reference to the entire ring. Empty rings are represented
// as nil Ring pointers. The zero value for a Ring is a one-element
// ring with a nil Value.
type Ring struct {
	next, prev *Ring
	Value      any // for use by client; untouched by this library
}
```

<center>code - 1：Ring 数据结构</center><br>

![](./image/ring-struct.svg)

<center>图 1：Ring 数据结构</center><br>

## New
数据结构我们看完了，那么首先来看的肯定就是我们 New() 函数了，从注解中我们可以了解到 New() 函数是创建一个包含 n 个元素的 Ring，下面我们来看看该方法是如何创建的吧，从 code - 2 所示该方法接收一个 int 类型的 n 返回一个 Ring 类型的 pointer，并且创建开始之前会判断 n 是不是小于 0，小于则直接返回空，那么从这里我们就可以知道 Ring 类型至少要有一个元素，随后就是生成一个 Ring 结构体实例，再声明一个变量让其等于刚刚声明的结构体，为的是要保留一下当前地址，随后就是运用 for 循环向后面添加 Ring 的数据结构，最后再首尾相连，最后我们可以发现 new() 函数只是创建出了数据结构，并没有对值做初始化操作。
```jsx
// src/container/ring/ring.go

// New creates a ring of n elements.
func New(n int) *Ring {
	if n <= 0 {
		return nil
	}
	r := new(Ring)
	p := r
	for i := 1; i < n; i++ {
		p.next = &Ring{prev: p}
		p = p.next
	}
	p.next = r
	r.prev = p
	return r
}
```

<center>code - 2：new() 方法</center><br>

![](./image/ring-new.svg)

<center>图 2：new() 方法详解</center><br>

## init
init() 方法，从函数名中我们可以猜到它是用来初始化操作的，那么作为本包中唯一一个没有被导出的方法，我们需要留意一下该方法在 Next()、Prev() 和 Move() 方法中被调用，随后我们会先对这三个方法做探讨，接下来先看看 init() 方法它进行哪些操作 code - 3，init() 方法接收 Ring 结构体的指针，并将结构体中 next 与 prev 属性指向了其自身，从而构成了一个单元素循环的链表简称环。
```jsx
// src/container/ring/ring.go

func (r *Ring) init() *Ring {
	r.next = r
	r.prev = r
	return r
}
```

<center>code - 3：init() 方法</center><br>

![](./image/ring-init.svg)

<center>图 3：init() 方法详解</center><br>

## Next && Prev 
Next() 方法与 Prev() 方法，这两个方法逻辑是一致的都是返回下一个或者上一个环元素，R 不能为空，值得注意的就是在工作期间会去检查下一个或者上一个环元素是否为空，空就直接调用 init() 方法，但我们要知道的是在 New() 方法中就已经保障的 Ring 为一个闭环的数据结构，所以在何种情况下会触发该条件是值得我们深思的。
```jsx
// src/container/ring/ring.go

// Next returns the next ring element. r must not be empty.
func (r *Ring) Next() *Ring {
	if r.next == nil {
		return r.init()
	}
	return r.next
}

// Prev returns the previous ring element. r must not be empty.
func (r *Ring) Prev() *Ring {
	if r.next == nil {
		return r.init()
	}
	return r.prev
}
```

<center>code - 4：Next() 方法与 Prev() 方法</center><br>

![](./image/Next-and-Prev.svg)

<center>图 4：Next() 方法详解</center><br>

## Move
Move() 方法，这个方法与我们刚刚了解的 Next() 方法与 Prev() 方法其实相差不大，简单的说就是把单步操作编变成了多步操作，该函数的具体逻辑就是通过 n 来代表你要查询的几步，再通过 n 的正负值来选择查询的方向。
```jsx
// src/container/ring/ring.go

// Move moves n % r.Len() elements backward (n < 0) or forward (n >= 0)
// in the ring and returns that ring element. r must not be empty.
func (r *Ring) Move(n int) *Ring {
	if r.next == nil {
		return r.init()
	}
	switch {
	case n < 0:
		for ; n < 0; n++ {
			r = r.prev
		}
	case n > 0:
		for ; n > 0; n-- {
			r = r.next
		}
	}
	return r
}
```

<center>code - 5：Move() 方法</center><br>

![](./image/ring-move.svg)

<center>图 5：Move() 方法详解</center><br>

## Link
Link() 方法，从函数名中我们可以看出这是将两个 Ring 连接成一个新的 Ring 方法，将 Ring r 与 Ring s 连接起来，再将 r.next 与 s.prev 相连，从而形成一个闭环，最后再返回 r.next 元素。
但如果 r 和 s 指向同一个环，把它们连起来会使 r 和 s 之间的元素从环上消失。被删除的元素构成一个子环，其返回结果是对该子环上元素的引用（如果没有元素被删除，结果仍然是 r.next() 的原始值，而不是nil)。
```jsx
// src/container/ring/ring.go

// Link connects ring r with ring s such that r.Next()
// becomes s and returns the original value for r.Next().
// r must not be empty.
//
// If r and s point to the same ring, linking
// them removes the elements between r and s from the ring.
// The removed elements form a subring and the result is a
// reference to that subring (if no elements were removed,
// the result is still the original value for r.Next(),
// and not nil).
//
// If r and s point to different rings, linking
// them creates a single ring with the elements of s inserted
// after r. The result points to the element following the
// last element of s after insertion.
func (r *Ring) Link(s *Ring) *Ring {
	n := r.Next()
	if s != nil {
		p := s.Prev()
		// Note: Cannot use multiple assignment because
		// evaluation order of LHS is not specified.
		r.next = s
		s.prev = r
		n.prev = p
		p.next = n
	}
	return n
}
```

<center>code - 6：Link() 方法</center><br>

![](./image/ring-link.svg)

<center>图 6：Link () 方法详解</center><br>

## Unlike
Unlike() 方法，从 code - 7 中我们可以发现该方法只是对 Link() 与 Move() 方法的调用，那我们大致就可以了解该方法其实是对 Link() 方法的扩展，还记得之前我们提到过的当 Link() 方法中 r 和 s 指向同一个环时会被分成两个环，所以我们先通过 Move() 方法移动当前 Ring 的元素位置，在进行 Link() 方法来实现移除操作，最后再返回子环，其本质就是在同一个环上两个不同元素位置的 Link() 方法操作。
```jsx
// src/container/ring/ring.go

// Unlink removes n % r.Len() elements from the ring r, starting
// at r.Next(). If n % r.Len() == 0, r remains unchanged.
// The result is the removed subring. r must not be empty.
func (r *Ring) Unlink(n int) *Ring {
	if n <= 0 {
		return nil
	}
	return r.Link(r.Move(n + 1))
}
```

<center>code - 7：Unlink () 方法</center><br>

![](./image/ring-unlink.svg)

<center>图 7：Unlink () 方法详解</center><br>

## Len
Len() 方法，该方法就相对简单许多，通过便利 Ring 得出当前元素数量，其具体逻辑为声明一个 n 用来计数操作，通过 Next() 方法便利下一个元素并进行判断是否为起始元素，是的话停止便利返回 n 即为当前元素数量。
```jsx
// src/container/ring/ring.go

// Len computes the number of elements in ring r.
// It executes in time proportional to the number of elements.
func (r *Ring) Len() int {
	n := 0
	if r != nil {
		n = 1
		for p := r.Next(); p != r; p = p.next {
			n++
		}
	}
	return n
}
```

<center>code - 8：Len () 方法</center><br>

![](./image/ring-len.svg)

<center>图 8：Len () 方法详解</center><br>

## Do
Do() 方法，该方法与 Len() 方法基本一致，都是通过 Next() 方法进行遍历元素，只不过该方法接收一个函数，并在内部对每个元素调用所传入的函数用以来完成某些任务。
```jsx
// src/container/ring/ring.go

// Do calls function f on each element of the ring, in forward order.
// The behavior of Do is undefined if f changes *r.
func (r *Ring) Do(f func(any)) {
	if r != nil {
		f(r.Value)
		for p := r.Next(); p != r; p = p.next {
			f(p.Value)
		}
	}
}

```

<center>code - 9：Do () 方法</center><br>

到这为止我们已经把 Ring 包里的方法全部阅读一遍了，对此我们应该对此包的方法做一个简单的梳理如图 9 所示，这是 Ring 包中每个方法之间的调用关系，并且我们可以发现 Len() 方法与 Do() 方法， Unlink() 方法与 Link() 方法， Next() 方法与 Prev() 方法的实现逻辑基本是一样的。

![](./image/ring-func.svg)

<center>图 9：Ring 包中每个方法之间的调用关系</center><br>

## Testing
在结尾的最后，我们放上一些测试代码，供大家理解，在此就不做过多解释了。
```jsx
package main

import (
	"container/ring"
	"fmt"
  "reflect"
)

func dump(r *ring.Ring) {
	if r == nil {
		fmt.Println("empty")
		return
	}
	i, n := 0, r.Len()
	for p := r; i < n; p = p.Next() {
		fmt.Printf("%4d: %p = {<- %p | %p ->}\n", i, p, p.Prev(), p.Next())
		i++
	}
	fmt.Println()
}

func main() {
	r := ring.New(6)

    fmt.Printf("TYpeof(r) = %T\n", reflect.TypeOf(r))

    dump(r)

    r.Value = 0
    r.Next().Value = false
    r.Next().Next().Value = 1.23
    r.Next().Next().Next().Value = "hello \"world"
    r.Next().Next().Next().Next().Value = [4]int{ 0, 1, 2, 3 }
    r.Next().Next().Next().Next().Next().Value = ring.New(2)

    for i := 0; i < r.Len(); i++ {
        fmt.Println(r.Value)
        r = r.Next()
    }
}

// TYpeof(r) = *reflect.rtype
// 0: 0xc000050020 = {<- 0xc0000500c0 | 0xc000050040 ->}
// 1: 0xc000050040 = {<- 0xc000050020 | 0xc000050060 ->}
// 2: 0xc000050060 = {<- 0xc000050040 | 0xc000050080 ->}
// 3: 0xc000050080 = {<- 0xc000050060 | 0xc0000500a0 ->}
// 4: 0xc0000500a0 = {<- 0xc000050080 | 0xc0000500c0 ->}
// 5: 0xc0000500c0 = {<- 0xc0000500a0 | 0xc000050020 ->}

// 0
// false
// 1.23
// hello "world
// [0 1 2 3]
// &{0xc000050100 0xc000050100 <nil>}
```

<center>code - 10：Ring 测试</center><br>
