# JS 面试问题

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
