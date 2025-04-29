# JS 面试问题

## 什么垃圾回收机制

在 JavaScript 中，**垃圾回收机制（Garbage Collection, GC）**是由引擎（如 V8）自动处理的，用来释放不再使用的内存，防止内存泄漏和程序崩溃。下面是 JavaScript 垃圾回收的核心机制和原理：

### 🧹 核心思想：对象是否仍然可达（Reachability）

垃圾回收的关键在于判断一个对象是否还能被访问：

可达对象（Reachable）：从根（如全局变量、当前执行函数的变量等）可以直接或间接访问到的对象。

不可达对象（Unreachable）：无法通过任何路径访问到的对象，会被 GC 回收。

### 🔄 主要机制：标记-清除（Mark-and-Sweep）

这是现代 JS 引擎中最基础的 GC 算法：

#### 流程

标记阶段：从“根”出发，找出所有“可达”的对象，并打上“标记”。

清除阶段：没有被标记的对象就是“不可达”的，清除释放其内存。

#### 示例图解

```txt
root → obj1 → obj2
           ↓
         obj3

obj4 无引用 → 会被清除
```

## 内存泄漏

在 JavaScript 中，内存泄漏（Memory Leak）是指程序中不再需要的内存没有被释放，从而占用系统资源，最终可能导致性能下降甚至崩溃。常见的几种会造成内存泄漏的方式如下：

### 意外的全局变量

如果变量没有使用 let、const 或 var 声明，就会变成全局变量，长时间保留在内存中。

```js
function leak() {
  leakyVar = "I am leaked"; // 没有用 var/let/const
}
```

### 闭包引用外部变量

闭包持有对外部变量的引用，如果不小心使用，可能导致不必要的数据一直保存在内存中。

```js
function outer() {
  const largeData = new Array(1000000).fill("leak");
  return function inner() {
    console.log(largeData[0]);
  };
}

const leakyFunction = outer(); // largeData 无法被回收
```

### 定时器未清除（setInterval / setTimeout）

定时器持续运行，会保留其引用的作用域链。

```js
const obj = {
  data: "leak"
};

setInterval(() => {
  console.log(obj.data);
}, 1000); // 如果不清除，会导致 obj 一直被引用
```

解决办法：

```js
const timer = setInterval(...);
clearInterval(timer);
```

### 事件监听器未移除

为 DOM 元素绑定的事件处理函数如果没有移除，会导致元素无法被 GC（垃圾回收）。

```js
const button = document.getElementById("myButton");

function handleClick() {
  console.log("clicked");
}

button.addEventListener("click", handleClick);
// 如果 button 被移除但没有移除监听器，就会造成泄漏
```

建议：在不需要时使用 removeEventListener 清除监听。

### 被遗忘的 DOM 引用

在 JavaScript 中保存了被移除的 DOM 元素引用，GC 认为还在使用，不会释放。

```js
const detachedDiv = document.createElement("div");
document.body.appendChild(detachedDiv);
document.body.removeChild(detachedDiv);
// detachedDiv 仍然在内存中
```

### 缓存没有上限或清理机制

缓存如果没有合适的策略（如 LRU、TTL），可能无限增长导致内存泄漏。

```js
const cache = {};

function getData(key) {
  if (!cache[key]) {
    cache[key] = fetchDataFromServer(key); // 假设是大数据
  }
  return cache[key];
}
```


## `apply`、`call`、`bind` 之前的区别

### 作用

`apply`、`call`、`bind` 的作用是改变函数执行时的上下文，简单来说就是改变函数运行时 `this` 的指向，以下面的例子为例：

```js
let name = 'luck'
let obj = {
  name: 'lucy',
  say: function() {
    console.log(this.name)
  }
}
obj.say() // lucy
setTimeout(obj.say, 0) // luck
```

上面的结果可以看到，正常情况下 `say` 函数是输出的 `lucy`，但是当使用 `setTimeout` 的时候，输出的是 `luck`，这是因为 `setTimeout` 的执行环境是全局环境，所以 `this` 指向的是全局对象 `window`，所以输出的是 `luck`。

如果想要 `this` 指向正常的 `obj`，我们只需要：

```js
setTimeout(obj.say.bind(obj), 0) // lucy
```

### 区别

#### apply

`apply` 接收两个参数，第一个参数是函数运行的作用域，第二个参数是一个参数数组。

改变 `this` 指向后原函数会立即执行，且此方法只是临时改变 `this` 指向一次。

```js
function fn(...arg) {
  console.log(this, arg)
}

let obj = {
  name: 'lucy'
}

fn.apply(obj, [1, 2, 3]) // {name: "lucy"} [1, 2, 3] 这时的 this 是指向 obj 的
fn.apply(null, [1, 2, 3]) // 这时的 this 指向 Window
fn.apply(undefined, [1, 2, 3]) // 这时的 this 指向 Window
```

#### call

`call` 方法其实和 `apply` 类似，只是传参的方式不同，`call` 方法接收的是一个参数列表，而 `apply` 接收的是一个参数数组。

和 `apply` 一样，改变 `this` 指向后原函数会立即执行，且此方法只是临时改变 `this` 指向一次。

```js
function fn(...arg) {
  console.log(this, arg)
}

let obj = {
  name: 'lucy'
}

fn.call(obj, 1, 2, 3) // {name: "lucy"} [1, 2, 3] 这时的 this 是指向 obj 的
fn.call(null, 1, 2, 3) // 这时的 this 指向 Window
fn.call(undefined, 1, 2, 3) // 这时的 this 指向 Window
```

#### bind

`bind` 方法和 `call` 方法类似，第一个参数也是 `this` 指向，后面传入的也是参数列表（这个参数列表可以分多次传入）。

`bind` 改变 `this` 指向后不会立即执行，而是返回一个永久改变了 `this` 指向的函数，需要手动执行。


```js
function fn(...arg) {
  console.log(this, arg)
}

let obj = {
  name: 'lucy'
}

const objFn = fn.bind(obj)

objFn(1, 2, 3) // {name: "lucy"} [1, 2, 3] 这时的 this 是指向 obj 的
// 或者
fn.bind(obj, 1, 2, 3)()
// 或者
fn.bind(obj)(1, 2, 3)
```

### 总结

- `apply`、`call`、`bind` 都是用来改变函数的 `this` 对象的指向的
- `apply`、`call`、`bind`  三者第一个参数都是 `this` 要指向的对象，也就是想指定的上下文，如果没有参数或者参数为 `null`、`undefined`，则默认指向全局 window
- `apply`、`call`、`bind`  三者都可以利用后续参数传参，`apply` 接收数组，`call` 接收参数列表，`bind` 接收参数列表，且 `apply` 和 `call` 是一次性传入参数，而 `bind` 可以分为多次传入
- `bind` 是返回绑定 `this` 之后的函数，便于稍后调用；`apply`、`call` 则是立即调用

## new 操作符干了什么？

首先要知道 new 操作符是用来创建一个给定构造函数的实例对象。如下：

```js
function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

const person = new Person('person')
console.log(person)
console.log(person.sayName())
```

从上面的例子可以看到：

- new 通过构造函数 Person 创建出来的实例可以访问到构造函数中得属性
- new 通过构造函数 Person 创建出来的实例可以访问到构造函数原型中的属性

现在构造函数中显示加上返回值，并返回一个原始类型的值：

```js
function Test(name) {
  this.name = name
  return 1
}
const t = new Test('xxx')
console.log(t.name) // 'xxx'
```

可以发现构造函数中返回一个原始值，但是这个返回值却没有作用~

如果返回的是一个对象的话：

```js
function Test(name) {
  this.name = name
  console.log(this) // Test { name: 'xxx' }
  return { age: 26 }
}
const t = new Test('xxx')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
```

可以发现构造函数如果返回一个对象，那么会被当成正常值使用。

现在总结下 new 关键字到底做了什么：

- 创建一个新对象 obj
- 将 obj 的 __proto__ 指向构造函数的原型对象
- 改变 this 指向，将构造函数的 this 指向绑定到新创建的 obj 上
- 判断构造函数返回值类型，如果是原始值则忽略，如果是对象则返回该返回值

## 兼容性问题

### H5 iOS 端开发问题

1. iOS 时间 `new Date(’2022-10-20’)` 以横线的时间会报错，需改改成 2022/10/20
2. IOS 时间 `new Date(’2022-10’)` 只有年月可能会有问题,，需改改成年月日
3. IOS `window.open` 在 safari 上无法打开，原因是苹果为了阻止流氓操作直接给禁用了，可以采用 `location.href` 或者动态创建 `a` 标签

```js
let a = document.createElement(‘a’);
a.setAttribute(‘href’, url);
document.body.appendChild(dom);
a.click();
a.remove()
```

## 闭包

闭包就是能够读取其他函数内部变量的函数.

```js
// 定义
function a() {
  var a = 1;
  return function() {
    console.log(a);
  };
}
```

闭包经典面试题:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// 打印3个3

// 优化
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i);
}
// or
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

::: warning
闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除
:::

## 数组去重

### ES6 set 方式

::: tip
Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

NaN 和 undefined 都可以被存储在 Set 中， 经管 NaN != NaN 但是在 Set 认为是相同的值
:::

```js
[
  ...new Set([
    1,
    1,
    "1",
    2,
    2,
    "2",
    true,
    true,
    "true",
    false,
    false,
    "false",
    undefined,
    undefined,
    "undefined",
    null,
    null,
    "null",
    NaN,
    NaN,
    "NaN",
    0,
    0,
    "0",
    {},
    {}
  ])
];
//  [1, "1", 2, "2", true, "true", false, "false", undefined, "undefined", null, "null", NaN, "NaN", 0, "0", {}, {}]
```

### indexOf 方式 一

```js
function uniqueArray(arr) {
  let result = []

  arr.forEach(element => {
    if (result.indexOf(element)  === -1) {
      result.push(element)
    }
  })

  return result
}
```

### indexOf 方式 二

```js
function uniqueArray(arr) {
  return arr.filter((elememt, index) => arr.indexOf(elememt) === index)
}
```

### Arrary.from

```js
function uniqueArray(arr) {
  return Array.from(new Set(arr))
}
```

## Array 的 slice 和 splice 的区别

slice(): 方法是从已有的数组中返回指定的元素, 不会改变原有数组值

splice(): 从数组中删除元素或者像数组中添加元素，并且会直接修改原数组

```js
var arr = [0, 1, 2];
console.log(arr.slice(0, 2)); // [0, 1]
console.log(arr); // [0, 1, 2]
console.log(arr.splice(0, 2)); // [0, 1]
console.log(arr); //[2]
```

## Promise 是什么

[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 是一个对象，它代表了一个异步操作的最终完成或者失败.

## Promse 触发问题

```js
var a = new Promise(resolve => console.log(1)); // 1
console.log(a); // promise
console.log(a); // promise
```

## 二分法查找

1. 从数组中开始查找，如果该元素是要搜索的目标元素，则循环结束
2. 如果不是继续下一步，如果目标元素大于或者小于中间元素，则在数组大于或者小于中间元素的那一半区域进行查找
3. 进而重复上面操作
4. 如果数组是空的，则找不到该目标元素。

```js
function halfSearch(arr, target) {
  let low = 0
  let high = arr.length
  let index = 0

  while (low <= high) {
    index = Math.floor((low + high) / 2)
    const middleValue = arr[index]

    if (middleValue === target) {
      return index
    } else if (middleValue > target) {
      high = index - 1
    } else {
      low = index + 1
    }
  }

  return -1
}
```

## 对象表达式转换问题

**在原始值包装类型的实例上调用 typeof 会返回 object，所以有原始值包装的对象都会转换为布尔值 true**

```js
let boolean = new Boolean(false)
let result = boolean && true
console.log(result) // true
```

## 任意范围随机数

```js
// 包含最小值、最大值
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```
