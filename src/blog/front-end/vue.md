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

<script setup>
import DialogResetFields from './components/vue/DialogResetFields.vue'
import DialogResetFieldsRepair from './components/vue/DialogResetFieldsRepair.vue'
</script>

## Element Dialog 组件中使用 form 表单数据 resetFields 问题

在 Element 的 Dialog 组件中使用 form，form 初始值为空，在打开 Dialog 时给表单赋值，关闭 Dialog 时使用 `this.$refs.form.resetFields()` 清空表单数据，但是重新打开 Dialog 发现表单数据并没有清空。 情况如下（**先点击修改，关闭弹窗后，点击新增**）：

<DialogResetFields />

::: details 代码
```vue
<template>
  <el-button type="primary" @click="handleAdd">新增</el-button>
  <el-button type="primary" @click="handleOpenDialog">修改</el-button>
  <el-dialog title="弹窗" v-model="dialogFormVisible" width="500" @close="handleCloseDialog">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="form.type" />
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleConfirmDialog">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        type: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleAdd() {
      this.dialogFormVisible = true;
    },
    handleOpenDialog() {
      this.dialogFormVisible = true;
      this.form = {
        ...this.form,
        name: '活动名称',
        type: '活动区域',
      }
    },
    handleCloseDialog() {
      this.$refs['form'].resetFields();
    },
    handleConfirmDialog() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        } else {
          return false;
        }
      });
    }
  }
}
</script>
```
:::

上面例子可以看到，点击打开 Dialog 后，表单数据被赋值，关闭 Dialog 后，表单数据被清空，但是再次打开 Dialog 后，表单数据并没有被清空。

这是因为 form 的 `resetFields` 方法是**重置**表单的初始化数据，而不是清空表单的数据，form 表单的数据在 form 表单生命周期的挂载阶段前初始化后使用 `resetFields` 方法重置表单数据成初始化数据。

上面例子中调用 `handleOpenDialog` 方法后就对 form 进行赋值操作，这时候 form 表单还未挂载完成，所以赋值后的 form 表单数据会被当成 form 的初始化数据，所以在 Dialog 中使用 `resetFields` 方法后，form 表单数据并没有被清空。

这是只需要在赋值时使用 `this.$nextTick` 方法，将赋值操作放在 form 表单挂载完成后执行，这样就可以解决上面的问题。

<DialogResetFieldsRepair />

::: details 代码
```vue
<template>
  <el-button type="primary" @click="handleAdd">新增</el-button>
  <el-button type="primary" @click="handleOpenDialog">修改</el-button>
  <el-dialog title="弹窗" v-model="dialogFormVisible" width="500" @close="handleCloseDialog">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="form.type" />
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleConfirmDialog">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        type: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleAdd() {
      this.dialogFormVisible = true;
    },
    handleOpenDialog() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.form = {
          ...this.form,
          name: '活动名称',
          type: '活动区域',
        }
      })
    },
    handleCloseDialog() {
      this.$refs['form'].resetFields();
    },
    handleConfirmDialog() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        } else {
          return false;
        }
      });
    }
  }
}
</script>
```
:::



## $router.resolve

`this.$router.resolve`是Vue Router提供的一个方法，它返回一个路由解析结果对象。这个方法可以用来获取与当前路由相对应的URL路径或者跳转到另一个路由。

下面是`this.$router.resolve`方法的使用方式和含义：

```javascript
// 获取当前路由对应的URL路径
const currentRouteUrl = this.$router.resolve().href; 

// 跳转到另一个路由并获取相应的URL路径
const targetRouteUrl = this.$router.resolve({ name: 'target-route-name' }).href; 
```

在第一个示例中，`this.$router.resolve().href`将返回当前路由的完整URL路径。而在第二个示例中，通过传入一个具有路由名称属性的对象，`this.$router.resolve({ name: 'target-route-name' })`会返回一个包含目标路由信息的路由解析结果对象，然后`.href`属性将返回该路由的完整URL路径。

需要注意的是，`this.$router.resolve`方法不会实际导航到目标路由，而只是返回路由解析结果对象。如果需要进行页面导航，则需要使用`this.$router.push`或`this.$router.replace`方法。

### 实际使用

```js
// 跳转店铺首页
shopPage(id) {
  let routeUrl = this.$router.resolve({
    path: '/Merchant',
    query: {id: id}
  });
  window.open(routeUrl.href, '_blank');
}
```

## Vue 中使用防抖函数 debounce

防抖函数是一种常用的 JavaScript 函数优化技术，它可以限制一些频繁执行的操作，从而提高性能。其实现原理为在函数被触发 n 秒后再执行，如果在这 n 秒内又被触发，则重新计时。

以下是一个简单的防抖函数实现：

```js
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  }
}
```

该函数接受两个参数：要执行的函数 func 和防抖时间 delay，返回一个新的函数。在新函数中使用 clearTimeout() 方法清除之前设置的定时器，并使用 setTimeout() 方法设置新的定时器。

在 Vue 中使用防抖函数可以通过将其作为一个方法来实现。下面是一个在 Vue 组件中使用防抖函数的示例：

```vue
<template>
  <div>
    <input type="text" v-model="searchText" @input="debouncedSearch">
  </div>
</template>

<script>
import { debounce } from '@/utils';

export default {
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    search() {
      console.log('Searching...');
    },
    debouncedSearch: debounce(function() {
      this.search();
    }, 500),
  },
};
</script>
```

## Vue 在缓存组件中 watch 路由来回切换产生额外请求

在 vue 的缓存组件中使用 `watch` 监听路由变化，当路由变化时，会调用当前所有缓存组件中的 `watch`，会导致其他页面监听路由的数据也与后台发生请求，产生叠加请求。

解决方法直接使用 `keep-alive` 的 `activated` 生命周期，当组件被激活时，做下判断再去请求数据。

```js
activated() {
  const { param = '' } = this.$route.query
  if (!param) return
  if (this.planCode !== param) {
    this.planCode = param
    this.getTableList()
  }
}
```



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
<template>
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
</template>

<script>
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
</script>
```

- `format`: 此参数为页面展示格式化内容
- `value-format`: 此参数是页面绑定的值格式化后的内容，需注意初始化时的值内容需要于 `value-format` 的值相同
- `default-time`: 此参数为范围选择时选中日期所使用的当日内具体时刻，不使用则默认使用时刻 `00:00:00`
- 通过 `moment` 默认使用最近 `30` 天日期

当 `el-date-picker` 的类型设置成 `date` 时，可以设置如 `value-format="yyyy-MM-dd 00:00:00"` 设置默认的时间：

```vue
<template>
  <el-date-picker 
    v-model="filterForm.start" 
    clearable 
    size="mini" 
    type="date" 
    placeholder="请选择结束日期" 
    value-format="yyyy-MM-dd 23:59:59"
  >
  </el-date-picker>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      filterForm: {
        start: moment().subtract(30, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss')
      } 
    }
  }
}
</script>
```

### el-table 表格实现跨页选择数据

```vue
<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    border
    row-key="id"
    @selection-change="handleSelectChange"
  >
    <el-table-column
      align="center"
      :reserve-selection="true"
      type="selection"
      width="55"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleSelectChange(val) {
      this.selected = val
    }
  }
}
</script>
```

上面代码可以看到，要实现 el-table 表格实现跨页选择数据，需要指定 `el-table-column` 的 `type="selection"` 并且需要设置 `:reserve-selection="true"`，同时指定 `el-table` 的 `row-key="id"`，并绑定 `@selection-change="handleSelectChange"` 方法后就可以实现跨页选择数据了。
