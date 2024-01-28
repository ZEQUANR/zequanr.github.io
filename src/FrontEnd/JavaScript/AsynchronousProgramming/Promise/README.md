---
title: Promise
icon: bi:hourglass-split
# cover: /assets/image/go.png
author: 王泽权
date: 2022-08-19
category:
  - JavaScript
tag:
  - JavaScript
sticky: true
star: true
copyright: 王泽权
---

Promise 是 JavaScript 中处理异步操作的一种标准化解决方案，它提供了一种统一的、链式调用的编程模型来处理异步流程。Promise 对象代表一个异步操作的最终结果（完成或失败），并允许我们以同步风格编写异步代码，从而显著提升了代码的可读性和维护性。

## Promise的基本概念
在 JavaScrip t中，Promise 是一个构造函数，通过`new Promise(executor)`创建实例。执行器（executor）是一个带有两个参数（resolve 和 reject）的函数，分别用于表示异步操作成功或失败时的回调：

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作逻辑
  if (/* 成功条件 */) {
    resolve(result);
  } else if (/* 失败条件 */) {
    reject(error);
  }
});
```

<center>code - 1：new Promise()</center><br>

- `resolve(value)`：当异步操作成功时被调用，并将结果传递给后续的`.then()`方法。
- `reject(reason)`：当异步操作失败时被调用，并将错误原因传递给后续的`.catch()`方法。

## Promise 的状态与特点
### 状态不可逆 
Promise 有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。一旦状态改变，就不可再变，即从 pending 变为 fulfilled 或 rejected 后，无法再回到 pending 状态。

### 链式调用 
Promise 支持`.then()`和`.catch()`方法进行链式调用，每个`.then()`方法返回一个新的 Promise，可以进一步处理上一步的结果或者抛出的异常。

```javascript
promise
  .then(result => {
    console.log('Success:', result);
    return anotherAsyncOperation(result);
  })
  .then(newResult => {
    console.log('Another operation:', newResult);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

<center>code - 2：Promise 链式调用</center><br>

### Promise.all() 和 Promise.race() 

- `Promise.all(iterable)`接受一组 Promise 实例作为参数，只有当所有 Promise 都变为fulfilled 状态时，才会触发成功的回调；若其中任意一个变为 rejected，则立即触发失败的回调。
- `Promise.race(iterable)`则是只要迭代器中的某个 Promise 变为 fulfilled 或 rejected 状态，就立刻触发对应的回调。

## Promise 的最佳实践

-  **避免嵌套地狱**
使用 Promise 的链式调用代替传统的多层嵌套回调，可以有效改善代码的可读性和维护性。 
-  **使用 async/await**
在支持 ES7 及以上版本的环境中，可以利用 async 函数和 await 关键字，使得异步代码看起来更接近于同步代码，进一步提升代码的可读性。 

```javascript
async function processData() {
  try {
    const data1 = await fetchSomeData();
    const data2 = await processData1(data1);
    return finalResult(data2);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

<center>code - 3：async 函数与 await 关键字</center><br>

- **规范化错误处理**
确保每一个可能产生错误的 Promise 链路都有相应的错误捕获机制，遵循“尽早且一致地处理错误”的原则。
