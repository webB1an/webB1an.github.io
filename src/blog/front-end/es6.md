# ES6

## 可选链操作符

可选链操作符 `?.` 允许读取位于连接对象链深处的属性值，而不必明确验证链中的每个引用是否有效。

`?.` 操作符功能类似于 `.` 操作符，不同之处在于，在引用为空（`null` 或者 `undefined`）的情况下不会引起错误，该表达式返回的值是 `undefined`。

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

console.log(adventurer.dog); // undefined

console.log(adventurer.dog.name); // Uncaught TypeError: Cannot read properties of undefined

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

```

## 空值合并运算符

空值合并运算符是一个逻辑操作符，当左侧的操作数为 `undefined` 或者 `null` 时，返回其右侧操作数，否则返回左侧操作数。

与逻辑或操作符不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 `||` 来为某些变量设置默认值，可能会遇到预料之外的行为，如 `0 || 2` 会返回 `2`

```js
const foo = undefined ?? 'default string'
console.log(foo) // default string

const baz = 0 ?? 2
console.log(baz) // 0

const bar = 0 || 2
console.log(bar) // 2
```

更多例子：

```js
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

const valA = nullValue ?? "valA 的默认值";
const valB = emptyText ?? "valB 的默认值";
const valC = someNumber ?? 0;

console.log(valA); // "valA 的默认值"
console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）
console.log(valC); // 42
```

```js
let myText = ''; // An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

实际应用：

```js
// 输入框非空判断
if (value !== null && value !== undefined && value !== '') {
  // ...
}

// 使用空值合并运算符
if ((value ?? '') !== '') {
  // ..
}
```
