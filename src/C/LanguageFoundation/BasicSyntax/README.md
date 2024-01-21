---
title: 基本语法
icon: openmoji:brick
# cover: /assets/images/database/database-2.webp
author: 王泽权
date: 2023-09-27
category:
  - C
tag:
  - "C"
sticky: true
star: true
copyright: 王泽权
---

## 语句

C 语言的代码是由一行行的语句所组成，语句就是程序执行的一个操作命令，C 语言规定，语句必须使用分号结尾，除非有明确规定可以不写分号。

```c
int x = 1;
```

变量声明语句，声明整数变量 x，并且将值设为 1。

```c
int x; x = 1;
```

两个语句写在一行：

1. 变量声明，声明整数变量 x。
2. 变量赋值，将声明的整数变量 x 赋值为 1。

- 所以，语句之间的换行符并不是必需的，只是为了方便阅读代码。

```c
int x;
x
=
1
;
```

一个语句也可以写成多行，这时就要依靠分号判断语句在哪一行结束。

- 不建议这样做，增加对代码的阅读负担

```c
；
```

单个分号也是有效语句，称为“空语句”，虽然毫无作用。

## 表达式

C 语言的各种计算，主要通过表达式完成，表达式是一个计算式，用来获取值。

```c
1 + 2
```

用来获取 1 + 2 这个算术计算的结果的表达式。

```c
8;
3 + 4;
```

表达式加上分号，也可以成为语句。
表达式与语句的区别主要有：

1. 语句可以包含表达式，但是表达式本身不构成语句。
2. 表达式都有返回值，语句不一定有，因为语句用来执行某个命令，很多时候不需要返回值，比如变量声明语句（int x = 1）就没有返回值。

## 语句块

C 语言允许多个语句使用一对大括号 **{}**，组成一个块，也称为复合语句，在语法上，语句块可以视为多个语句组成的一个复合语句。

```c
{
  int x;
  x = 1;
}
```

用大括号包裹形成了一个语句块。

- 大括号的结尾不需要添加分号。

## 空格

C 语言里面的空格，主要用来帮助编译器区分语法单位，如果语法单位不用空格就能区分，空格就不是必须的，只是为了增加代码的可读性。

```c
int x = 1;
// 等同于
int x=1;
```

赋值号（=）前后有没有空格都可以，因为编译器这里不借助空格，就能区分语法单位。

```c
int    x =     1;
```

语法单位之间的多个空格，等同于单个空格。

- 各个语法单位之间的多个空格，跟单个空格的效果是一样的。
- 空格还用来表示缩进，多层级的代码有没有缩进，其实对于编译器来说并没有差别，没有缩进的代码也是完全可以运行的，强调代码缩进，只是为了增强代码可读性，便于区分代码块。

## 注释

注释是对代码的说明，编译器会忽略注释，也就是说，注释对实际代码没有影响，C 语言中注释写法有两种。

```c
/* 注释 */

/*
  这是一行注释
*/

int x; /* 注释 */ x = 1;
```

将要注释的内容放在 /_..._/ 之间，内部可以分行。

- 这种注释可以插在行内，用来对参数进行说明，跟在它后面的代码依然会有效执行。
- 一定不能忘记写结束符号 \*/，否则很容易导致错误。

```c
// 这是一行注释

int x = 1; // 这也是注释
```

将注释放在双斜杠//后面，从双斜杠到行尾都属于注释，这种注释只能是单行，可以放在行首，也可以放在一行语句的结尾，这是 C99 标准新增的语法。

```c
printf("// hello /* world */ ");
```

不管是哪一种注释，都不能放在双引号里面，双引号里面的注释符号，会成为字符串的一部分，解释为普通符号，失去注释作用。