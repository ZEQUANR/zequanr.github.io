---
title: List
icon: gg:list
# cover: /assets/image/go.png
author: 王泽权
date: 2023-07-07
category:
  - Go
tag:
  - Go
sticky: true
star: true
copyright: 王泽权
---

今天给大家带来的是 Go 语言提供的内置容器 List，内部的实现原理是双链表，列表能够高效地进行任意位置的元素插入和删除操作。
## List struct && Element struct
老规矩我们先从数据结构中看起，从 code - 1 中我们可以看到 List 包中的数据结构一共有两个分别为 List 和 Element，通过这两个数据结构组成为 Go 语言提供的内置容器 List 结构，接下来就让我们去看一看这两个数据结构。

List 数据结构，当前数据结构中包含 root 和 len 两个字段，从注解中我们可以了解到 root 为“哨兵”列表元素，不算在当前 List 链表元素中且结构体中 len 的长度属性中不记录 root 节点。

Element 数据结构，当前数据结构中包含 next、prev、list 和 value 四个字段，Value 是与此元素一起存储的值这个不用多说，再来看 next 与 prev 为指针类型可以看出这是一个双向链表，再从注解中我们可以了解到 List 存在两种方法，分别为 Front() 方法代表当前 List 中第一个元素， Back() 方法代表当前 List 中最后一个元素，而 list 是一个始终指向当前 Element 所在 List 类型的指针。

```go
// src/container/list/list.go

// List represents a doubly linked list.
// The zero value for List is an empty list ready to use.
type List struct {
	root Element // sentinel list element, only &root, root.prev, and root.next are used
	len  int     // current list length excluding (this) sentinel element
}

// Element is an element of a linked list.
type Element struct {
	// Next and previous pointers in the doubly-linked list of elements.
	// To simplify the implementation, internally a list l is implemented
	// as a ring, such that &l.root is both the next element of the last
	// list element (l.Back()) and the previous element of the first list
	// element (l.Front()).
	next, prev *Element

	// The list to which this element belongs.
	list *List

	// The value stored with this element.
	Value any
}
```

<center>code - 1：List && Element</center><br>

## Next && Prev
从刚刚的数据结构 code - 1 中我们已经发现 List 存在两种方法 Front() 方法与 Back() 方法，那在了解这两个方法之前，我们先来了解一下  Element 存在的两种方法 Next() 方法与 Prev() 方法，这可以帮助我们更好的理解接下来的方法。

Next() 与 Prev() ，想必听名字大家都可以猜到这两个方法的作用，分别是去寻找当前元素的下一个或上一个元素，所以这两个方法的逻辑是一致的，唯一值得注意的是在 code - 2 中 if 语句中除了判断当前元素的下一个或上一个元素是否存在外还需要判断是否等于 root 元素，也就是我们刚刚提到的“哨兵”列表元素。

```go
// src/container/list/list.go

// Next returns the next list element or nil.
func (e *Element) Next() *Element {
	if p := e.next; e.list != nil && p != &e.list.root {
		return p
	}
	return nil
}

// Prev returns the previous list element or nil.
func (e *Element) Prev() *Element {
	if p := e.prev; e.list != nil && p != &e.list.root {
		return p
	}
	return nil
}
```

<center>code - 2：Next() 方法与 Prev() 方法</center><br>

## Front && Back
接下来我们就来看看 Front() 方法与 Back() 方法，该方法的作用我们已经知道了，且因为这两个方法的逻辑是一致的，所以我们这里就不做区分，直接来来讲一下这两个方法的具体逻辑。

Front() 方法与 Back() 方法，需要先调用 Len() 方法获取 List 的具体长度进行判断如果等于 0 那么说明当前 LIst 可能只存在 root “哨兵”列表元素，那么之前也说过 root 不算在 List 元素中，故不存在第一个或最后一个元素，直接返回 nil，反之长度不等于 0 说明 List 中有元素存在即返回 root “哨兵”列表元素中所指向的元素。

```go
// src/container/list/list.go

// Len returns the number of elements of list l.
// The complexity is O(1).
func (l *List) Len() int { return l.len }

// Front returns the first element of list l or nil if the list is empty.
func (l *List) Front() *Element {
	if l.len == 0 {
		return nil
	}
	return l.root.next
}

// Back returns the last element of list l or nil if the list is empty.
func (l *List) Back() *Element {
	if l.len == 0 {
		return nil
	}
	return l.root.prev
}
```

<center>code - 3：Front() 方法与 Back() 方法</center><br>

通过刚刚前几个方法 Next() 方法与 Prev() 方法、Front() 方法与 Back() 方法，我们已经可以拼凑出 Go 语言提供的内置容器 List 结构的大致样子了。

通过 Element 结构体中 next、 prev 字段，我们可以知道这是一个双向链表。

通过 Next() 方法与 Prev() 方法，我们可以知道 List 中元素的 next 和 prev 字段是可以指向 root “哨兵”列表元素的。

通过 Front() 方法与 Back() 方法，我们可以知道 root “哨兵”列表元素的 next 和 prev 字段是指向 List 中的第一个和最后一个元素的。

通过刚刚整理的信息我们已经可以清楚的得出 List 其实是一个循环链表如图 1 所示，只不过从中抽象出一个元素将它定义为 root 代表一个位置标符，其本身不存储数据，不记录在当前链表长度中，不认作链表中的元素。

![](./image/list-struct.svg)

<center>图 1：List 结构</center><br>

## New && Init
通过刚刚的讲解想必大家已经对 List 有了一个清楚的认识，接下来我们开看看 New 函数是如何实现的，该函数的实现逻辑比较简单调用 Init() 方法返回了一个初始化的 List。

Init() 方法，将当前所传入的 List 中的 root “哨兵”列表元素中的 next、 prev 字段都指向自己，从而实现一个闭环，并且之前也说过 root 不记录在当前链表长度中，所以长度赋值为 0，完成初始化操作。

这里我们在来提及一下 lazyInit() 方法，因为在后面的方法中初始化操作使用的都是该方法，相比 Init() 方法我们可以发现该方法只是在 Init() 方法上套了一层 if 判断，还记得 code - 1 中所说的吗？List 的零值是一个可以使用的空列表，该方法只对  List 为零值状态时他才会进行 Init ，对于已经 Init 过的 List 则不会做任何操作。

```go
// src/container/list/list.go

// New returns an initialized list.
func New() *List { return new(List).Init() }

// Init initializes or clears list l.
func (l *List) Init() *List {
	l.root.next = &l.root
	l.root.prev = &l.root
	l.len = 0
	return l
}

// lazyInit lazily initializes a zero List value.
func (l *List) lazyInit() {
	if l.root.next == nil {
		l.Init()
	}
}
```

<center>code - 4：New 函数与 Init() 方法与 Back() 方法</center><br>

![](./image/Go-List-Init.svg)

<center>图 2：Init() 方法</center><br>

## insert && insertValue
insert() 方法，传入两个元素 e 与 at，然后在 at 之后插入 e，在增加 List 的长度加 1 并且返回 e，具体操作如图 3 所示。

insertValue() 方法，该方法就是 insert() 方法的封装，只不过把传入两个元素中的 e 换成了元素所要存储的值，而之前的 e 直接在函数方法中创建实例。

值得思考的是这些这两个方法都是 List 上的方法，且方法名均为小写说明这两个方法并不包外提供，只对包内其他方法所提供，那么如果 at 不是 LIst 上的元素，那么我们可以很清楚的知道 List 的元素并没有增加但 List 的长度的确是增加了，那怎么做又是为的什么？我们可以带着这个疑问继续往下看。

```go
// src/container/list/list.go

// insert inserts e after at, increments l.len, and returns e.
func (l *List) insert(e, at *Element) *Element {
	e.prev = at
	e.next = at.next
	e.prev.next = e
	e.next.prev = e
	e.list = l
	l.len++
	return e
}

// insertValue is a convenience wrapper for insert(&Element{Value: v}, at).
func (l *List) insertValue(v any, at *Element) *Element {
	return l.insert(&Element{Value: v}, at)
}
```

<center>code - 5：insert() 方法与 insertValue() 方法</center><br>

![](./image/Go-List-insert.svg)

<center>图 3：insert() 方法</center><br>

## InsertBefore && InsertAfter
InsertBefore() 方法与 InsertAfter() 方法，这两个方法的逻辑是一致的，一个是在当前元素之前插入一个值为 v 的新元素 e，并返回e，另一个则是在当前元素之后插入一个值为 v 的新元素 e，并返回 e，而且在这两个方法中的 if 语句中也解决了我们之前的疑问，如果所传入的 mark 元素不是 List 上的元素，则不修改 LIst。

```go
// src/container/list/list.go

// InsertBefore inserts a new element e with value v immediately before mark and returns e.
// If mark is not an element of l, the list is not modified.
// The mark must not be nil.
func (l *List) InsertBefore(v any, mark *Element) *Element {
	if mark.list != l {
		return nil
	}
	// see comment in List.Remove about initialization of l
	return l.insertValue(v, mark.prev)
}

// InsertAfter inserts a new element e with value v immediately after mark and returns e.
// If mark is not an element of l, the list is not modified.
// The mark must not be nil.
func (l *List) InsertAfter(v any, mark *Element) *Element {
	if mark.list != l {
		return nil
	}
	// see comment in List.Remove about initialization of l
	return l.insertValue(v, mark)
}
```

<center>code - 6：InsertBefore() 方法与 InsertAfter() 方法</center><br>

## PushFront && PushBack
PushFront() 方法与 PushBack() 方法，这两个方法的逻辑也是一致的，一个是在 List l 的前面插入一个值为 v 的新元素 e，并返回 e，另一个则是在 List l 的后面插入一个值为 v 的新元素 e，并返回 e，但在元素添加之前需要先调用 lazyInit() 方法，进行判断当前 List 是否为一个空列表，是的话先进行初始化操作在添加元素。

在 PushFront() 方法与 PushBack() 方法中我们可以看到 List 中的 root “哨兵”列表元素所展现的作用了，通过 root 元素我们可以很轻松的定位到 List 中的第一个元素和最后一个元素。

```go
// src/container/list/list.go

// PushFront inserts a new element e with value v at the front of list l and returns e.
func (l *List) PushFront(v any) *Element {
	l.lazyInit()
	return l.insertValue(v, &l.root)
}

// PushBack inserts a new element e with value v at the back of list l and returns e.
func (l *List) PushBack(v any) *Element {
	l.lazyInit()
	return l.insertValue(v, l.root.prev)
}
```

<center>code - 7：PushFront() 方法与 PushBack() 方法</center><br>

## **PushBackList && PushFrontList**
PushBackList() 方法与 PushFrontList() 方法，这两个方法的逻辑与刚刚看到的 PushFront() 方法与 PushBack() 方法大致是一致的，只过是刚刚所看到的方式是插入一个元素，而现在这两个方式是通过对其传入的 LIst 进行遍历其中的元素依次调用 PushFront() 方法与 PushBack() 方法。

```go
// src/container/list/list.go

// PushBackList inserts a copy of another list at the back of list l.
// The lists l and other may be the same. They must not be nil.
func (l *List) PushBackList(other *List) {
	l.lazyInit()
	for i, e := other.Len(), other.Front(); i > 0; i, e = i-1, e.Next() {
		l.insertValue(e.Value, l.root.prev)
	}
}

// PushFrontList inserts a copy of another list at the front of list l.
// The lists l and other may be the same. They must not be nil.
func (l *List) PushFrontList(other *List) {
	l.lazyInit()
	for i, e := other.Len(), other.Back(); i > 0; i, e = i-1, e.Prev() {
		l.insertValue(e.Value, &l.root)
	}
}
```

<center>code - 8：PushBackList() 方法与 PushFrontList() 方法</center><br>

好了今天先带大家看到这里，下一章节带大家了解一下 Go 语言提供的内置容器 List 中的移动和删除操作，下面是一些测试代码 code - 9、code - 10，大家可以自行查看帮助理解。
## Testing
```go
package main

import (
    "container/list"
    "fmt"
)

func main() {
    list := list.New()

    fmt.Printf("list: (%p)%#v\n", list, list)
}

// list: (0xc000066150)
// &list.List{
//     root:list.Element{
//         next:(*list.Element)(0xc000066150),
//         prev:(*list.Element)(0xc000066150),
//         list:(*list.List)(nil), Value:interface {}(nil)
//     },
//     len:0
// }
```

<center>code - 9：空 LIst</center><br>

```go
package main

import (
    "container/list"
    "fmt"
)

func main() {
    list := list.New()
    list.PushBack(1)
    list.PushBack(2)
    list.PushBack(3)

    fmt.Printf("list: (%p)%#v\n", list, list)
    fmt.Printf("list.Front(): (%p)%#v\n", list.Front(), list.Front())
    fmt.Printf("list.Front().Next(): (%p)%#v\n", list.Front().Next(), list.Front().Next())
    fmt.Printf("list.Front().Next().Next(): (%p)%#v\n", list.Front().Next().Next(), list.Front().Next().Next())
}

// list: (0xc00008c150)
// &list.List{
//     root:list.Element{
//         next:(*list.Element)(0xc00008c180),
//         prev:(*list.Element)(0xc00008c1e0),
//         list:(*list.List)(nil), Value:interface {}(nil)
//     },
//     len:3
// }

// list.Front(): (0xc00008c180)
// &list.Element{
//     next:(*list.Element)(0xc00008c1b0),
//     prev:(*list.Element)(0xc00008c150),
//     list:(*list.List)(0xc00008c150),
//     Value:1
// }

// list.Front().Next(): (0xc00008c1b0)
// &list.Element{
//     next:(*list.Element)(0xc00008c1e0),
//     prev:(*list.Element)(0xc00008c180),
//     list:(*list.List)(0xc00008c150),
//     Value:2
// }

// list.Front().Next().Next(): (0xc00008c1e0)
// &list.Element{
//     next:(*list.Element)(0xc00008c150),
//     prev:(*list.Element)(0xc00008c1b0),
//     list:(*list.List)(0xc00008c150),
//     Value:3
// }
```

<center>code - 10：循环 LIst</center><br>
