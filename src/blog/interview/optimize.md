# 项目优化

## `v-if` 和 `v-show` 区分场景使用
<b>v-if</b> 是真正的条件渲染，如果初始条件为假，则什么都不做，直到条件变为真时才第一次渲染条件块。

<b>v-show</b> 不管初始的判断条件是什么，元素总会被渲染，并且只是切换 css 的 `display` 属性。

`v-if` 适用在运行时很少改变条件，如和用户权限相关的菜单。v-show适用于需要频繁切换条件的场景，如tab栏等。

## `computed` 和 `watch` 区分场景使用
<b>computed</b> 是计算属性，依赖其他属性值，并且 `computed` 的值有缓存，只有在它依赖的属性值发生改变，下一次获取 `computed` 的值时才回从新计算 `computed` 的值。

<b>watch</b> 更多的是观察作用，类似于数据的监听回调，每当数据发生改变时才执行回调进行后续操作。

运用场景：
  - 当我们需要进行数值运算，并且依赖于其他数据时，应该使用 `computed`，因为可以利用 `computed` 的缓存特性，避免每次取值时，都要重新计算
  - 当一个值的改变会影响多个值时，应使用 `watch`

## `v-for` 遍历必须为 `item` 添加 `key`，且避免同时使用 `v-if`

- v-for 遍历必须为 item 添加 key
  - 在列表根据遍历渲染数据时，需要为每一项 item 设置唯一的 key 值，方便 vue 内部机制精准找到该条列表数据。当 state 更新时，新的状态和旧的状态对比，快速定位到 diff。
- v-for 遍历避免同时使用 v-if
  - v-for 比 v-if 的优先级高，如果每一次都需要遍历整个数组，将会影响速度。

<b>推荐:</b>
``` js
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id">
    {{ user.name }}
  </li>
</ul>
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
	 return user.isActive
    })
  }
}
```
<b>不推荐:</b>
```js
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

<b></b>
<b></b>
<b></b>
<b></b>
<b></b>
