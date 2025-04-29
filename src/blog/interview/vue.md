# VUE 面试问题

<style>
.important{
  color: #d63200;
  padding: 3px 5px;
  white-space: nowrap;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>

Vue 2 和 Vue 3 的响应式系统虽然功能类似，但**实现原理完全不同**，Vue 3 是对 Vue 2 响应式系统的一次**全面升级**，更灵活也更高效。

---

## 🎯 1. Vue 2 的响应式原理

### ✅ **基于 `Object.defineProperty()`**

Vue 2 在初始化时会对 `data` 对象中的每个属性使用 `Object.defineProperty()` 进行“劫持”（数据拦截）：

```js
Object.defineProperty(obj, 'key', {
  get() { /* 收集依赖 */ },
  set(newVal) { /* 通知更新 */ }
});
```

### 👀 核心步骤：

1. **初始化阶段**：
   - 遍历所有的 data 属性
   - 使用 `Object.defineProperty` 把每个属性变成“响应式的”

2. **依赖收集（Dep + Watcher）**：
   - 页面渲染会读取数据的 `getter`，触发依赖收集；
   - 数据变化时触发 `setter`，通知相关 `Watcher` 重新渲染视图。

3. **数组响应式的 hack（重写原型方法）**：
   - Vue 2 不能监听数组元素的索引或 length 变化；
   - 通过重写 `push` / `pop` / `splice` 等方法来劫持数组的变化。

### ⚠️ 缺点：

- **只能对已存在的属性做响应式**：新增属性要用 `$set`，否则不会响应。
- **不能监听数组索引变化和 length 变化**。
- **深层嵌套对象需要递归遍历，性能开销大**。
- **静态编译不友好**（难以 Tree-shaking）。

---

## 🎯 2. Vue 3 的响应式原理

### ✅ **基于 ES6 的 `Proxy`**

Vue 3 使用 `Proxy` 替代了 `Object.defineProperty`，直接“包裹”整个对象，从而统一拦截访问和修改行为：

```js
const proxy = new Proxy(obj, {
  get(target, key, receiver) {
    // 依赖收集
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    // 派发更新
    return Reflect.set(target, key, value, receiver);
  }
});
```

### 🧠 关键特性：

- **懒加载响应式（懒代理）**：只有在访问某个对象时才递归进行响应式转换，提高性能。
- **支持对象新增/删除属性的自动响应**。
- **支持数组索引、length 等操作**。
- **支持 `Map`、`Set`、`WeakMap`、`WeakSet` 等复杂数据结构的响应式处理**。
- **使用 `Reflect` 保留原始行为，提高兼容性和一致性。**

---

## 🔍 对比：Vue 2 vs Vue 3 响应式系统

| 对比项              | Vue 2 (`defineProperty`)        | Vue 3 (`Proxy`)                     |
|---------------------|----------------------------------|-------------------------------------|
| API 支持            | 只能监听已有属性                | 任意属性变更都能响应               |
| 数组响应            | hack 原型方法，不支持索引响应  | 原生支持索引和 `length` 监听       |
| 数据深度监听        | 初始化时递归                    | 访问时惰性代理（性能更高）        |
| 新增/删除属性响应   | 需要 `$set` / `$delete`         | 自动响应                           |
| 支持 Map/Set 等     | 不支持                          | 支持                               |
| 响应式转化控制      | 不可关闭                        | 使用 `markRaw`、`shallowReactive` 等灵活控制 |
| 性能                | 中等，深层嵌套时递归多          | 更快更轻，懒代理提升性能           |
| 是否兼容 IE11       | ✅（兼容）                      | ❌（Proxy 不支持 IE）              |

---

## 🧪 举个例子

### Vue 2（新增属性不响应）

```js
vm.obj.a = 1;
// 视图不会更新，必须这样写：
Vue.set(vm.obj, 'a', 1);
```

### Vue 3（直接新增即可响应）

```js
reactiveObj.a = 1; // 响应式自动处理，视图更新
```

---

## 🧠 总结一句话

- **Vue 2：defineProperty，一次性递归转换，性能弱，不支持动态属性**
- **Vue 3：Proxy，懒加载转换，灵活高效，支持更复杂数据结构**

---

## 对 Keep-alive 的理解

- keep-alive 是 Vue 内置的一个组件，能在切换组件过程中将状态保留在内存中，防止重复渲染 DOM
- keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
- keep-alive 可以设置以下 props：
  - include: 字符串或正则表达式。只有匹配的组件会被缓存
  - exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存
  - max: 最多可以缓存多少组件实例
- keep-alive 匹配首先检查组件的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称(父组件 components 选项的键值)，匿名组件不能被匹配
- keep-alive 的生命周期钩子:
  - activated
  - deactivated


## 双向数据绑定

vue 采用 <b>数据劫持</b> 结合 <b>发布-订阅者模式</b> 的方式, 通过 <span class="important">Object.defineProperty()</span> 来劫持各个属性的 <b>setter</b> 以及 <b>getter</b>, 在数据变动时发布消息给订阅者触发相应的监听回调.

## vue 项目优化

- 关闭 sourceMap: 进行打包源码上线环节，需要对项目开发环节的开发提示信息以及错误信息进行屏蔽, 一方面可以减少上线代码包的大小; 另一方面提高系统的安全性.
- 对项目中的 js/css/svg 等资源开启 gzip 压缩
- 路由懒加载:

```js
{
  path: 'index',
  component: () => import('@/views/user/index')
}
```

- 第三方插件按需引入
- 代码优化
  - v-if 和 v-show 选择调用: v-if 是懒加载，当状态为 true 时才会加载, 并且为 false 时不会占用布局空间; v-show 是无论状态是 true 或者是 false, 都会进行渲染，并对布局占据空间对于在项目中, 需要频繁调用, 不需要权限的显示隐藏，可以选择使用 v-show, 可以减少系统的切换开销.
  - 列表循环时为 item 设置 key 值
  - 减少 watch 数据: watch 监听的数据较大时, 系统会出现卡顿
  - 系统图片资源按需加载
- 提取 css 文件: vue-cli 脚手架使用了 extract-text-webpack-plugin 插件,可以将放在 head 中的 style 提取成 css 文件引入

## [vue 中 key 值的作用](https://cn.vuejs.org/v2/api/#key)

- v-for 列表循环中的 key: 作用就是在更新组件时判断两个节点是否相同。相同就复用，不相同就删除旧的创建新的.
- 其他作用: 用于强制更新元素/组件而不是重复使用
  - 触发过渡
  - 完整地触发组件的生命周期钩子

例如:

```html
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```

当 text 发生改变时, span 会随时被更新, 因此会触发过渡

## computed 和 watch 的区别

computed 是计算属性,也就是计算值,它更多用于计算值的场景

computed 具有缓存性,computed 的值在 getter 执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取 computed 的值时才会重新调用对应的 getter 来计算

computed 适用于计算比较消耗性能的计算场景

watch 更多的是「观察」的作用,类似于某些数据的监听回调,用于观察 props \$emit 或者本组件的值,当数据变化时来执行回调进行后续操作, 无缓存性, 页面重新渲染时值不变化也会执行

我们要进行数值计算, 而且依赖于其他数据, 那么把这个数据设计为 computed, 如果你需要在某个数据变化时做一些事情, 使用 watch 来观察这个数据变化

## vuex 模块化后, 开启命名空间后如何调用其他模块的内容

为了防止 store 对象由于项目复杂时变得臃肿, 可以将 store 分割成不同模块 [module](https://vuex.vuejs.org/zh/guide/modules.html)

默认情况下: 不同 module 下的 action/mutation/getter 是注册在全局命名空间————这样使得多模块能够对同一 mutation 或 action 作出响应,但是所有模块下的 action/mutation/getter 都在全局命名空间下会导致代码的封装度和可用度降低, 因此可以通过添加 <span style="background-color: rgba(27,31,35,.05);color: #476582;padding: .25rem .5rem;">namespaced: true</span>方式使其成为自带命名空间的模块. 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名. [详细例子](https://segmentfault.com/a/1190000009434398)

## 自定义组件使用 v-model

<span class="important">v-model</span> 的语法糖如下所示包装而成:

```html
<inpu :value="something" @:input="something = $event.target.value"></inpu>
```

当在组件上使用如下:

```html
<custom-input :value="something" @input="value => { something = value }">
</custom-input>
```

因此, 带有 <span class="important">v-model</span> 的组件的核心因该是:

- 带有 v-model 的父组件通过绑定的 value 值（即 v-model 的绑定值）传给子组件，子组件通过 prop 接收一个 value
- 子组件利用 \$emit 触发 input 事件，并传入新值 value 给父组件

[具体示例](https://www.cnblogs.com/coffeelovetea/p/8326115.html)

## nextTick 用途

vue 在修改数据后, 视图并不会实时更新, 而是等同一事件循环中的所有数据变化完成之后, 再统一进行视图更新

例子:

```js
//改变数据
vm.message = "changed";

//想要立即使用更新后的DOM。这样不行，因为设置message后DOM还没有更新
console.log(vm.$el.textContent); // 并不会得到'changed'

//这样可以，nextTick里面的代码会在DOM更新后执行
Vue.nextTick(function() {
  console.log(vm.$el.textContent); //可以得到'changed'
});
```

因此, nextTick 的应用场景: 需要在视图更新之后，基于新的视图进行操作可以使用 nextTick

如:

可以将以下操作:

```js
showsou(){
  this.showit = true //修改 v-show
  document.getElementById("keywords").focus()  //在第一个 tick 里，获取不到输入框，自然也获取不到焦点
}
```

修改为:

```js
showsou(){
  this.showit = true
  this.$nextTick(function () {
    // DOM 更新了
    document.getElementById("keywords").focus()
  })
}
```

[详细文章请见](https://segmentfault.com/a/1190000012861862)
