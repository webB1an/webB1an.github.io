# VUE

<style>
.important{
  color: #d63200;
  padding: 3px 5px;
  white-space: nowrap;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>

## `vm.$mount([elementOrSelector])`

- 用法： `vm.$mount( [elementOrSelector] )`
- 返回值：vm - 实例自身
- 用法

如果 Vue 实例在实例化的时没有收到 `$el` 选项，则处于未挂载状态，没有关联 DOM 元素。可以使用 `vm.$mount()` 手动挂载一个未挂载的实例。

如果没有提供 `elementOrSelector` 参数，模板将被渲染为文档之外的元素，并且必须使用原生 DOM API 将它插入文档。

这个方法返回实例自身，因而可以链式调用其它实例方法。

```js
var MyComponent = Vue.extend({
  template: '<div>Hello!</div>'
})

// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app')

// 同上
new MyComponent({ el: '#app' })

// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)
```

:::tip
`vm.$el` 为 Vue 实例使用的根 DOM 元素
:::


## 自定义插件示例

### 创建 Loading 组件

```vue
// src/components/Loading/index.vue
<template>
  <div class="loading" v-show="show">loading</div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      show: false
    }
  }
}
</script>
```

### 创建 Loading 插件

```js
// src/components/index.js
import Vue from 'vue'
import LoadingComponent from './Loading'

const LoadingExtend = Vue.extend(LoadingComponent)
let Loading = {}
let loadingInstance

Loading.install = function (Vue) {
  if (!loadingInstance) {
    loadingInstance = new LoadingExtend()
    document.body.appendChild(loadingInstance.$mount().$el)
  }

  Vue.prototype.$loading = {
    show () {
      loadingInstance.show = true
    },
    hide () {
      loadingInstance.show = false
    }
  }
}

Vue.use(Loading)
```

### 引入 Loading 插件

```js
// src/main.js
import '@/components'
```

### 使用 Loading 插件

```vue
<template>
  <div class="test">
    <button @click="open">打开</button>
    <button @click="close">关闭</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    open () {
      this.$loading.show()
    },
    close () {
      this.$loading.hide()
    }
  }
}
</script>
```



## 动态权限系统

### 概念

开发后台管理系统时不可避免的会接触到动态权限相关的需求, 这里的动态权限是指管理系统可以动态添加角色和添加和角色关联的用户以及不同角色用户登录实现动态菜单渲染等相关功能.

- 角色: 不同角色对应着不同的菜单路由权限码信息(可以包含多个菜单路由权限码)
- 用户: 每一个用户对应一个角色, 每个角色可对应多个用户, 用户只与角色关联,若要修改用户权限只需修改用户对应的角色权限即可

### 具体实现

1. 提取菜单相关路由

```js
export const asyncRoutes = [
  {
    path: "",
    component: layout,
    redirect: "home",
    meta: {
      roles: [99]
    },
    children: [
      {
        path: "home",
        component: home,
        meta: {
          name: "首页",
          roles: [99],
          icon: "icon iconfont icon-home"
        }
      }
    ]
  },
  {
    path: "/userManage",
    component: layout,
    meta: {
      name: "用户管理",
      roles: [200],
      icon: "icon iconfont icon-user"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/userManage/index"),
        meta: {
          name: "员工管理",
          roles: [201]
        }
      },
      {
        path: "roleManage",
        component: () => import("@/views/userManage/roleManage"),
        meta: {
          name: "角色管理",
          roles: [202]
        }
      },
      {
        path: "userManage",
        component: () => import("@/views/userManage/userManage"),
        meta: {
          name: "商家管理",
          roles: [203]
        }
      }
    ]
  },
  {
    path: "/orderManage",
    component: layout,
    meta: {
      roles: [300]
    },
    children: [
      {
        path: "orderManage",
        component: () => import("@/views/orderManage/index"),
        meta: {
          name: "订单管理",
          roles: [300],
          icon: "icon iconfont icon-order"
        }
      }
    ]
  },
  {
    path: "/moneyManage",
    component: layout,
    meta: {
      name: "资金管理",
      roles: [400],
      icon: "icon iconfont icon-money"
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/moneyManage/index"),
        meta: {
          name: "账单管理",
          roles: [401]
        }
      },
      {
        path: "topUpManage",
        component: () => import("@/views/moneyManage/topUpManage"),
        meta: {
          name: "充值管理",
          roles: [402]
        }
      }
    ]
  }
];
```

2. 提取菜单相关路由对应权限码, 用于动态添加角色

```js
export default {
  adminRoles: [99, 200, 201, 202, 203, 300, 400, 401, 402],
  parentRoles: [200, 400],
  rolesTree: [
    {
      id: 99,
      label: "首页",
      disabled: true
    },
    {
      id: 200,
      label: "用户管理",
      children: [
        // `201` `202` 只能给admin
        // admin登录会默认所以菜单
        // 注释这两个菜单会在角色管理渲染角色树时隐藏这两个菜单，防止管理员将这两个菜单赋值给其他人
        // {
        //   id: 201,
        //   label: '员工管理'
        // }, {
        //   id: 202,
        //   label: '角色管理'
        // },
        {
          id: 203,
          label: "商家管理"
        }
      ]
    },
    {
      id: 300,
      label: "订单管理"
    },
    {
      id: 400,
      label: "资金管理",
      children: [
        {
          id: 401,
          label: "消费管理"
        },
        {
          id: 402,
          label: "充值管理"
        }
      ]
    }
  ]
};
```

3. 通过 elementUI 的 Tree 树形控件和菜单权限码数组渲染出菜单路由树, 管理员可通过勾选权限树上的节点选取角色对应的权限列表

4. 管理员添加用户时选取以添加的角色, 将用户信息保存到数据库

5. 用户登录时请求后台接口, 后台返回用户对应的角色权限码

6. 前端通过后台返回的权限码动态过滤菜单路由, 获取用户对应权限的菜单路由

7. 通过 <span class="important">router.addRoutes()</span> 方法, 动态添加用户对应权限的菜单路由

8. 前端根据过滤后的用户路由渲染页面菜单





## Element UI 使用记录

### el-date-picker 使用

```vue
<el-date-picker
  v-model="filterForm.timeRange"
  type="daterange"
  range-separator="至"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  format="yyyy-MM-dd"
  value-format="yyyy-MM-dd HH:mm:ss"
  :default-time="['00:00:00', '23:59:59']"
>
</el-date-picker>
```
- `format`: 此参数为页面展示格式化内容
- `value-format`: 此参数是页面绑定的值格式化后的内容，需注意初始化时的值内容需要于 `value-format` 的值相同
- `default-time`: 此参数为范围选择时选中日期所使用的当日内具体时刻，不使用则默认使用时刻 `00:00:00`


通过 `moment` 默认使用最近 `30` 天日期

```js
import moment from 'moment'
export default {
  data() {
    return {
      filterForm: {
        timeRange: [
          moment().subtract(30, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
          moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
        ]
      }
    }
  }
}
```











