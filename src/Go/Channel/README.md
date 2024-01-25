---
title: Channel
icon: fluent:channel-share-24-regular
# cover: /assets/image/go.png
author: 王泽权
date: 2023-03-25
category:
  - Go
tag:
  - Go
sticky: true
star: true
copyright: 王泽权
---

本周我们来看 Go 语言中的 channel，作为 Go 语言核心的数据结构，也是作为 goroutine 之间的通信方式，下面我们将通过一些测试代码来开始本周的 channel 的学习。
 
## Overview

从 channel 关键字上来看大致意思为“管道”，如图 1 所示作为 Go 语言中 Goroutine 之间的通信方式。

![](./image/Go-interface-channel.svg)

<center>图 1：Channel</center><br>

## Statement

channel 共有两种形式，分别是 Unbuffered channels 与 Buffered channels，在此之前我们需要先知道，这两种形式是如何声明的。

![](./image/Go-Channels.svg)

<center>图 2：Unbuffered channels and Buffered channels</center><br>

### Unbuffered channels

```go
ch := make(chan int)
```

<center>code - 1：声明 Unbuffered Channel</center><br>

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	ch := make(chan int)
	fmt.Println(len(ch), cap(ch))
	fmt.Println(reflect.TypeOf(ch))
}

// 0 0
// chan int
```

<center>code - 2：Unbuffered Channel Type</center><br>

### Buffered channels

```go
ch := make(chan int, 2)
```

<center>code - 3：声明 Buffered Channel</center><br>

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	ch := make(chan int, 2)
	fmt.Println(len(ch), cap(ch))
	fmt.Println(reflect.TypeOf(ch))
}

// 0 2
// chan int
```

<center>code - 4：Buffered Channel Type</center><br>

值得注意的是在 code - 5 中，我们发现 Go 语言中 channel 类型并不像 array 类型一样其容量也算在类型之中。

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	buffered := make(chan int, 4)
	unbuffered := make(chan int)

	var ch chan int = buffered
	fmt.Println(len(ch), cap(ch))
	fmt.Println(reflect.TypeOf(ch))

	ch = unbuffered
	fmt.Println(len(ch), cap(ch))
	fmt.Println(reflect.TypeOf(ch))
}

// 0 4
// chan int
// 0 0
// chan int
```

<center>code - 5：Channel Type</center><br>

## Testing

接下来，我们将采取测试代码的形式一步一步的分析 Go 语言中 Channel 的特性。

### Communication

从当前的测试代码 code- 6 ~ 7 中我们可以发现，无缓存 channel 在发送消息后，会堵塞当前的线程，导致之后的程序无法运行。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string)
	message := "hello"

	ch <- message

	fmt.Println(message)
	
	v := <- ch

	fmt.Println(v)
}

// fatal error: all goroutines are asleep - deadlock!
//
// goroutine 1 [chan send]:
// main.main()
// 	/app/example.go:12 +0x4a
```

<center>code - 6：测试用例 1</center><br>

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string)
	message := "hello"

	fmt.Println(message)
	
	ch <- message

	v := <- ch

	fmt.Println(v)
}

// hello
// fatal error: all goroutines are asleep - deadlock!
//
// goroutine 1 [chan send]:
// main.main()
// 	/app/example.go:12 +0x4a
```

<center>code - 7：测试用例 2</center><br>

![](./image/Go-Channel-test-one-and-two.svg)

<center>图 3：测试用例 1 ~ 2 演示</center><br>

从 code - 8 中我们可以确认，无缓存 channel 在发送消息后会堵塞当前线程直至该消息被接收后。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string)
	message := "hello"

	go func() {
		ch <- message
	}()

	v := <- ch

	fmt.Println(v)
}

// hello
```

<center>code - 8：测试用例 3</center><br>

![](./image/Go-Channel-test-three.svg)

<center>图 4：测试用例 3 演示</center><br>

从 code - 9 中我们可以确认，无缓存 channel 在接收消息前会堵塞当前线程直至收到该消息后。

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)
	message := "World"

	go func() {
		fmt.Println("Hello")
		v := <- ch
		fmt.Println(v)
	}()

	time.Sleep(2 * time.Second)
	ch <- message
	fmt.Println("send")
	
	time.Sleep(2 * time.Second)
}

// Hello
// send
// World
```

<center>code - 9：测试用例 4</center><br>

![](./image/Go-Channel-5.svg)

<center>图 5：测试用例 4 演示</center><br>

那么我们通过刚刚的测试代码 code 6 ～ 9 中我们已经可以确定在 Unbuffered Channel 中接收者会阻塞直至接收到消息，发送者会阻塞直至接收者接收到消息。

从 code - 10 中我们可以确认在 buffered Channel 中，缓存没有被占满的情况下是不会对当前线程进行堵塞的。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan string, 2)
	message := "Hello World"

	ch <- message

	v := <- ch

	fmt.Println(v)
}

// Hello World
```

<center>code - 10：测试用例 5</center><br>

![](./image/Go-Channel-10.svg)

<center>图 6：测试用例 5 演示</center><br>

从 code - 11 中我们可以确认在 buffered Channel 中，缓存被占满的情况下是会对当前线程进行堵塞的，那么接下来的结果可想而知了，在这里我们就不做过多描述了。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int, 4)

	for i := 0; i <= cap(ch); i++ {
		ch <- i
	}

	v := <- ch

	fmt.Println(v)
}

// fatal error: all goroutines are asleep - deadlock!
//
// goroutine 1 [chan send]:
// main.main()
// 	/app/example.go:12 +0x4a
```

<center>code - 11：测试用例 6</center><br>

从 code - 12 中我们可以确认在 buffered Channel 中，发消息者与接收者的顺序为先发的先被接收。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int, 4)

	for i := 1; i < cap(ch); i++ {
		ch <- i
	}

	for i := 1; i < cap(ch); i++ {
		v := <- ch
		fmt.Println(v)
	}
}

// 1
// 2
// 3
```

<center>code - 12：测试用例 7</center><br>

![](./image/Go-interface-channel-type.svg)

<center>图 6：测试用例 7 演示</center><br>

从 code -13 中我们可以确认，channel 在发送接收完消息后是可以继续工作的，并且对当前定义所传递数据类型中可以知道 channel 可以传递任意类型。

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan interface{})

	go func() {
		message := "first"
		ch <- message
		v := <-ch
		fmt.Println(v)
	}()

	go func() {
		v := <-ch
		fmt.Println(v)
		message := "second"
		ch <- message
	}()

	time.Sleep(time.Second)
}
```

<center>code - 13：测试用例 8</center><br>

![](./image/Go-interface-5.svg)

<center>图 7：测试用例 8 演示</center><br>

通过我们刚刚的测试代码相比我们已经对 channel 收发消息有了一定的了解，下面我们就来总结一下。

![](./image/Go-Channel-1.svg)

<center>图 8：Channel and Send && Receive</center><br>

### Channel Operate

在 Go 语言中 channel 默认是双向的，也就是既可以读也可以写，同时，我们还可以创建单向的 channel，单向 channel 也就是只能用于发送数据或者只能用于接收数据的 channel。

#### send-only

声明 send-only channel 如 code - 14 所示，只需要在 chan 关键字后面加上 <- 符号便可，如 code - 8 所示现在的 channel 只能用于发送数据，而不能用于接收数据。

```go
var chanName chan<- chanType
```

<center>code - 14：send-only</center><br>

```go
package main

func main() {
	ch := make(chan<- string)
	<- ch 
}

// # command-line-arguments
// ./main.go:5:5: invalid operation: cannot receive from send-only channel ch (variable of type chan<- string)
```

<center>code - 15：send-only Err</center><br>

#### receive-only

声明 receive-only channel 如 code - 16 所示，只需要在 chan 关键字前面加上 <- 符号便可，如 code - 10 所示现在的 channel 只能用于接收数据，而不能用于写数据。

```go
var chanName <-chan chanType
```

<center>code - 16：receive-only</center><br>

```go
package main

func main() {
	ch := make(<-chan string)
	ch <- "Hello"
}

// # command-line-arguments
// ./main.go:5:2: invalid operation: cannot send to receive-only channel ch (variable of type <-chan string)
```

<center>code - 17：receive-only Err</center><br>

#### both-way

声明 both-way channel 如 code - 18 所示，我们不需要在 chan 关键字前面或后面加符号便可，也就是我们最开始测试时使用的类型。

```go
var chanName chan chanType
```

<center>code - 18：both-way</center><br>

从 code - 11 中，我们可以确认 both-way channel 是可以任意转换成 receive-only channel 与 send-only channel 而反之则不可以。

```go
package main

func main() {
	ch := make(chan string)

	var send chan<- string = ch
	send <- "Hello"

	var recv <-chan string = ch
	<- recv

	d1 := (chan int)(send)
	d2 := (chan int)(recv)
}

// # command-line-arguments
// ./main.go:12:19: cannot convert send (variable of type chan<- string) to type chan int
// ./main.go:13:19: cannot convert recv (variable of type <-chan string) to type chan int
```

<center>code - 19：type conversion</center><br>

所以只读或者只写 channel 的作用更像是规范双向 channel 在某个函数或进程中的使用，如 code - 20 所示使代码可读性更高，同时也提醒着使用者应该做什么。

```go
package main

import (
	"fmt"
)

func receive(ch <-chan string) {
	v := <-ch
	fmt.Println(v)
}

func send(ch chan<- string) {
	message := "Hello"
	ch <- message
}

func main() {
	ch := make(chan string)

	go func() {
		send(ch)
	}()

	receive(ch)
}

// Hello
```

<center>code - 20：测试用例 9</center><br>

### close

如 code - 21 所示 receive-only channe 是不可以被 close 的。

```go
package main

func main() {
	both := make(chan string)
	send := make(chan<- string)
	receive := make(<-chan string)

	close(both)
	close(send)
	close(receive)
}

// # command-line-arguments
// ./main.go:10:8: invalid operation: cannot close receive-only channel receive (variable of type <-chan string)
```

<center>code - 21：测试用例 10</center><br>

如 code - 22 所示 channe 被 close 后是可以直接被读取的，读取是当前定义类型的初始值。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int)

	close(ch)

	fmt.Println(<- ch)
}

// 0
```

<center>code - 22：测试用例 11</center><br>

如 code - 23 所示 beffered channe 被 close 后也是可以读取值的，只不过 channel 中之前发送的数据会先被读取出来。

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int, 4)

	for i := 1; i < cap(ch); i++ {
		ch <- i
	}

	close(ch)

	for i := 1; i <= cap(ch); i++ {
		v := <- ch
		fmt.Println(v)
	}
}

// 1
// 2
// 3
// 0
```

<center>code - 23：测试用例 12</center><br>

如 code - 24 所示只读只写的 channe 被 close 后是不可以直接被读取的。

```go
package main

import (
	"fmt"
)

func main() {
	send := make(chan<- int)
	receive := make(<-chan int)

	close(send)
	close(receive)

	fmt.Println(<- send)
	fmt.Println(<- receive)
}

// # command-line-arguments
// ./main.go:12:8: invalid operation: cannot close receive-only channel receive (variable of type <-chan int)
// ./main.go:14:17: invalid operation: cannot receive from send-only channel send (variable of type chan<- int)
```

<center>code - 24：测试用例 13</center><br>

## Summarize

通过本周对 channel 的学习，相比我们已经对 channel 有了一定的了解，下面我们就来总结一下我们的测试结果。

1. channel 类型不会对容量做出限制。
2. channel 可以发送任意类型。
3. 无缓存的 channel 在读取和写入时都会对我们当前的线程进行堵塞直到其他线程对其进行处理。
4. channel 类型可以被定义为只读只写，多数情况下是规范双向 channel 在某个函数或进程中的使用。
5. hannel 被 close 后依旧可以读值。
