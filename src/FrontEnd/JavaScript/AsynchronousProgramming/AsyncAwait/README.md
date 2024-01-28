---
title: async/await
icon: tabler:news
# cover: /assets/image/go.png
author: 王泽权
date: 2023-07-30
category:
  - JavaScript
tag:
  - JavaScript
sticky: true
star: true
copyright: 王泽权
---

在 JavaScript 异步编程领域，async/await 是 ES2017 引入的关键特性，它为处理 Promise 提供了更简洁直观的语法糖。通过 async 函数和 await 表达式，开发者能够以接近同步代码的方式编写异步逻辑，极大地提升了代码可读性和开发效率。

## async 函数基础
### async 函数定义
async 关键字用于声明一个异步函数。当函数被标记为 async 时，它将返回一个 Promise 对象，无论函数内部是否明确使用 return 语句：

```javascript
async function fetchData() {
  // 异步操作
}

fetchData().then(data => console.log(data)); // 使用.then()方法处理结果
```

<center>code - 1：异步函数</center><br>

### await 表达式
在 async 函数内部，可以使用 await 关键字来等待 Promise 的结果。await 后面跟着一个 Promise表达式，当遇到 await 时，会暂停 async 函数的执行，直到 Promise 解析完成，并返回其结果（或抛出错误）。

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
```

<center>code - 2：await 表达式</center><br>

## async/await 的优势

-  **清晰的控制流**
async/await 允许我们将异步代码写成顺序执行的形式，避免了回调函数带来的“回调地狱”。 
-  **易于理解和调试**
由于其类似于同步代码的书写风格，async/await 使得异步逻辑更容易阅读和理解，同时也便于使用传统的 try/catch 进行错误处理。 
-  **更好的错误处理**
在 async 函数中，可以使用 try/catch 结构捕获和处理 Promise 链路中的错误，而无需在每个`.then()`中单独处理。 

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

<center>code - 3：一般业务中 fetchData 函数</center><br>

## async/await 的最佳实践

-  **避免无意义的 async**
不应仅仅为了使用 await 而给函数添加 async 修饰符，只有涉及异步操作的部分才需要这样做。 
-  **利用 try/catch 处理错误**
对于可能抛出错误的 await 表达式，建议将其包裹在 try/catch 块中，以便更好地管理和报告错误。 
-  **并行请求优化**
虽然 async/await 让代码看起来像同步执行，但实际上是按事件循环机制异步运行的。对于多个独立的异步任务，可以通过`Promise.all()`等方法实现并发执行。 

```javascript
async function processAllData() {
  const [data1, data2] = await Promise.all([
    fetchDataFromAPI1(),
    fetchDataFromAPI2()
  ]);
  
  // 处理数据...
}
```

<center>code - 4：Promise.all()</center><br>
