---
title: this 指向
# cover: /assets/images/database/database-2.webp
icon: mingcute:finger-tap-line
author: 王泽权
date: 2022-11-22
category:
  - JavaScript
tag:
  - JavaScript
sticky: true
star: true
copyright: 王泽权
---

在 JavaScript 中，this 关键字是一个动态上下文引用，其值取决于函数调用时的具体执行环境。理解 this 的指向对于编写高效且易于维护的 JavaScript 代码至关重要。

## 基本概念
### 函数调用方式决定 this 指向
全局作用域或默认绑定： 在非严格模式下，如果 this 出现在全局作用域（不在任何函数内部），它通常指向全局对象（浏览器环境中是 window，Node.js 环境中是 global）。
函数调用： 当一个函数作为普通函数直接调用时，this 同样指向全局对象（严格模式下为 undefined）。

```javascript
function sayHello() {
  console.log(this);
}
sayHello(); // 在浏览器环境下输出 window 对象
```

方法调用： 当函数作为某个对象的方法被调用时，this 指向调用该方法的对象。

```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(this.name); // 输出 "John"
  }
};
person.greet();
```

### 显式绑定
call()、apply() 和 bind() 方法可以显式指定 this 的指向。

```javascript
function greet() {
  console.log(this.name);
}

const person = { name: "John" };
greet.call(person); // 输出 "John"
```

## 高级应用场景
### 构造函数调用
使用 new 关键字调用函数时，会创建一个新的空对象，并将其 this 指向这个新对象，同时返回新对象。

```javascript
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // 输出 "John"
```

### 箭头函数
箭头函数没有自己的 this 值，它继承了父级作用域（词法作用域）的 this 值。

```javascript
const person = {
  name: "John",
  sayName: () => {
    console.log(this); // 在严格模式下，此处的this指向全局对象（非严格模式下也是如此）
  }
};

// 为了正确引用对象内的this，应使用普通函数
person.sayNameLexical = function() {
  console.log(this.name); // 输出 "John"
};
```

## 事件处理函数中的 this
在 DOM 事件处理函数中，this 通常指向触发事件的元素对象。

```javascript
document.getElementById("myButton").addEventListener("click", function() {
  console.log(this.id); // 输出 "myButton"
});
```

## 总结
| **调用方式** | **示例** | **函数中的 this 指向** |
| --- | --- | --- |
| 直接调用 | method() | 全局对象
浏览器环境为 window 对象
Node.js 环境为 global 对象 |
| 通过对象方法调用 | obj.method() | 前面的对象 |
| 通过call、apply、bind 调用 | method.call({}) | 第一个参数 |
| 通过 new 构造函数调用 | new method() | 新创建的对象 |
| 箭头函数 | () => {} | 箭头函数中的 this 指向外层作用域的第一个 this |
| DOM 事件 | addEventListener() | 触发事件的元素对象 |

