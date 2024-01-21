---
title: main 函数
icon: ci:main-component
# cover: /assets/images/database/database-2.webp
author: 王泽权
date: 2023-09-23
category:
  - C
tag:
  - "C"
sticky: true
star: true
copyright: 王泽权
---

C 语言的执行开始于 main 方法，main 方法是所有 C 语言程序执行的入口，在程序的开头，通常会定义一个 main 方法，并且它会作为程序的起始点，也就是说所有的 C 语言程序都需要一个称之为 mian 的方法，程序执行是从 main 方法中的第一句开始执行，当 main 函数返回时程序也会随之结束。

在最新的 [C99](https://en.cppreference.com/w/c/99) 标准中 main 函数只有两种标准形式，值得注意的是标准 C 的返回值是一个整数，若 main 方法执行到末尾没有遇到返回语句，则直接默认执行了 return 0，而 0 值一般代表着成功的意思，如果对其他非 0 值感兴趣的话可以试着去搜索一下“Linux 或 Window 错误代码及其含义”这里就不做过多陈述。

```c
int main(void) {

    // 程序执行的代码
    return 0;
}
```

<center>code - 1：无参数</center><br>

```c
int main(int argc, char* argv[]) {

    // 程序执行的代码
    return argc;
}
```

<center>code - 2：有参数</center><br>

> 参数 argc 和 argv（也可以根据需要另外命名），代表了程序的命令行参数。

> argc（全称为 argument count）的值为 0 或者为命令行中启动该程序的字符串的数量。程序本身的名称也算作该字符串，也要计算进去。

> argv（全称为 arguments vector）是一个 char 指针数组，每个指针都独立的指向命令行中每个字符串：数组中元素的个数，比 argc 的值多 1；最后一个元素 argv[argc] 是空指针。如果 argc 大于 0，那么第一个字符串，argv[0]，就是程序本身的名称。如果运行环境不支持程序名称，那么 argv[0] 为空。如果 argc 大于 1，从字符串 argv[1] 到 argv[argc-1] 包含该程序命令行参数。

除此之外，许多 C 的实现版本还支持其他、非标准语法的书写形式，有些编译器允许这种形式，但是还没有任何标准考虑接受它。所以编译器不必接受这种形式，并且很多编译器也不允许这么写。坚持使用标准的意义在于：当你把程序从一个编译器移到另一个编译器时，照样能正常运行。

```c
int main(int argc, char *argv[], char *envp[]) {

    // 程序执行的代码
    return argc;
}
```

<center>code - 3：有非标准语法的书写形式</center><br>

> envp（全称为 environment pointer）在非标准的、有 3 个参数的 main（）函数版本中，是一个指针数组，每个指针都指向组成程序环境的一个字符串。通常，这个字符串的格式是“名称 = 值”。在标准 C 语言中，可以利用函数 getenv（）获取得这些环境变量。

C 的 main 方法也是一个普通的函数，我们也向 main 方法叫做 [main 函数](https://en.cppreference.com/w/c/language/main_function)，而 C 的设计原则是把函数作为程序的构成模块，main 函数称之为主函数，所有简单的程序都可以定义其他额外的函数。

```c
#include <stdio.h>

int main() {
    printf("Hello World!\n");
    return 0;
}
```

<center>code - 4：Hello World</center><br>

总之，C 语言中的 main 函数是程序的入口函数，它为程序提供了一个起始点，在 main 函数中，我们可以定义各种变量、调用各种函数、执行各种操作，还可以编写各种算法和逻辑。通过正确地使用 main 函数，我们可以让程序完成各种复杂的任务。
