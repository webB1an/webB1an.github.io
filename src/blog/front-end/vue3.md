# VUE3

## Props

```typescript
interface Props {
  isActive: boolean,
  toggleSidebar: () => void
}

withDefaults(defineProps<Props>(), {
  isActive: false,
  toggleSidebar: () => {}
})

```

## defineEmits

在 script setup 中使用 defineEmits 时会报以下相关错误：

> e is defined but never used

针对此错误可修改 .eslintrc.js 中添加配置

```js
'no-unused-vars': 'off',
'@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
```

[查看原文](https://segmentfault.com/q/1010000040813116)

**使用**

```js
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const content = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
```

## defineOptions 2.0 `unplugin-vue-macros`

[unplugin-vue-macros](https://github.com/sxzz/unplugin-vue-macros/blob/main/README-zh-CN.md) 这个库是在看 element-plus 源码中发现的，使用起来非常简单。

### 安装

```shell
npm i unplugin-vue-macros -D
```

### Vite 配置

```js
// vite.config.ts
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
// import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        // vueJsx: VueJsx(), // 如有需要
      },
    }),
  ],
})
```

### typescript 支持

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["unplugin-vue-macros/macros-global" /* ... */]
  }
}
```

### 使用

```ts
<script setup lang="ts">
import { useSlots } from 'vue'
defineOptions({
  name: 'Foo',
  inheritAttrs: false,
})
const slots = useSlots()
</script>
```

输出

```ts
<script lang="ts">
export default {
  name: 'Foo',
  inheritAttrs: false,
}
</script>

<script setup>
const slots = useSlots()
</script>
```

## defineOptions 1.0

> 下面描述使用方式存在一些问题，`vue` 现在已经内置了 component name，组件内使用的话是和当前组件名称是一致的。

`vue` 组件在自我调用的时候，不需要引入自己的组件，只需要在调用的时候通过自己的 `component name` 调用就行了，但是在 `vue3` 中用 `ts` + `setup` 模式的时候无法直接给组件添加 `name` 属性，使用步骤如下：

1. `yarn add unplugin-vue-define-options`
2. 在 `vite.config.ts` 中添加配置
```js
// 省去了部分代码
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), DefineOptions()],
})
```

3. 使用
```js
<script setup lang="ts">
  defineOptions({
    name: 'Layout'
  })
</script>
<template>
  <div>layout</div>
</template>
```
## 组件中使用 `v-model`

`vue3` 当在组件上绑定 `v-model` 时：

```vue
<CustomInput
  v-model="searchText"
/>
```

其实代码等价于：

```vue
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```

可以看到 `v-model` 做了两件事：

1. 把 `searchText` 绑定到子组件 `modelValue` 到的 `props` 上
2. 子组件更新触发 `update:modelValue`

因此在组件是使用 `v-model` 可以如此：

**子组件**

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```

**父组件**

```html
<CustomInput v-model="searchText" />
```

### `v-model` 参数

默认情况下 `v-model` 在组件上是使用 `modelValue` 作为 prop ，并以 `update:modelValue` 为对应的事件。相应可以给 `v-model` 传参数修改默认值：

**子组件**

```html
<MyComponent v-model:title="bookTitle" />
```

**父组件**

```vue
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

## `withDefaults` + `defineProps`

vue3 中父组件给子组件传值，子组件若要带有默认值的话，需要通过以下方式：

```html
// 父组件
<Tinymce id="tinymce" v-model="content" />
```

```typescript
// 子组件
interface IProps {
  id: string,
  modelValue: string,
  toolbar?: string[],
  menubar?: string,
  height?: number | string,
  width?: number | string,
}

const props = withDefaults(defineProps<IProps>(), {
  id: 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
  modelValue: '',
  toolbar: () => [],
  menubar: 'file edit insert view format table',
  height: 360,
  width: 'auto'
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const content = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
```

## ElementPlus里的类型别名声明及使用

```html
<el-table ref="table"></el-table>
```

```typescript
import { ref, onMounted } from 'vue'
import type { ElTable } from 'element-plus'

const table = ref<InstanceType<typeof ElTable>>()

onMounted(() => {
  console.log(table.value?.$el)
})
```

## 按需自动导入

需要先安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把两款插件配置到 `webpack` 或者 `vite` 中

### vite 配置

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

更多可参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

### unplugin-vue-components 使用效果

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

不使用

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './src/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

### 使用 unplugin-auto-import 效果

```js
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

不使用

```js
import { computed, ref } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

可以看到 `unplugin-auto-import` 的使用，省去了用去大量手动导入 `vue` 或者 `react` 原生语法的重复工作，很大程度上减少工作成本。