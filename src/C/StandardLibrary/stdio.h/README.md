---
title: stdio.h
icon: bx:file
# cover: /assets/images/database/database-2.webp
author: 王泽权
date: 2023-07-09
category:
  - C
tag:
  - "C"
sticky: true
star: true
copyright: 王泽权
---

stdio.h 是一个核心的标准输入输出（Standard Input/Output）头文件，它提供了丰富的函数和类型定义来处理与外部设备的文本和二进制数据交换。

## 标准 I/O 函数

以下函数用于控制台的输入和输出：

- printf()：输出到控制台。
- scanf()：从控制台读取输入。
- getchar()：从控制台读取一个字符。
- putchar()：向控制台写入一个字符。
- gets()：从控制台读取整行输入（已废除）。
- puts()：向控制台写入一个字符串。

## 文件操作函数

以下函数用于文件操作：

- fopen()：打开文件。
- fclose()：关闭文件。
- freopen()：打开一个新文件，关联一个已经打开的文件指针。
- fprintf()：输出到文件。
- fscanf()：从文件读取数据。
- getc()：从文件读取一个字符。
- fgetc()：从文件读取一个字符。
- putc()：向文件写入一个字符。
- fputc()：向文件写入一个字符。
- fgets()：从文件读取整行。
- fputs()：向文件写入字符串。
- fread()：从文件读取二进制数据。
- fwrite()：向文件写入二进制数据。
- fseek()：将文件内部指针移到指定位置。
- ftell()：获取文件内部指针的当前位置。
- rewind()：将文件内部指针重置到文件开始处。
- fgetpos()：获取文件内部指针的当前位置。
- fsetpos()：设置文件内部指针的当前位置。
- feof()：判断文件内部指针是否指向文件结尾。
- ferror()：返回文件错误指示器的状态。
- clearerr()：重置文件错误指示器。
- remove()：删除文件。
- rename()：文件改名，以及移动文件。

## 字符串操作函数

以下函数用于操作字符串：

- sscanf()：从字符串读取数据。
- sprintf()：输出到字符串。
- snprintf()：输出到字符串的更安全版本，指定了输出字符串的数量。
