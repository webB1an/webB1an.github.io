<template>
  <div class="flex">
    <div class="flex-demo" :style="{
      'flex-direction': flexDirection,
      'flex-wrap': flexWrap,
      'justify-content': justifyContent,
      'align-items': alignItems,
      'align-content': alignContent,
    }">
      <div class="flex-demo-item-1">item-1</div>
      <div class="flex-demo-item-2">item-2</div>
      <div class="flex-demo-item-3">item-3</div>
      <div class="flex-demo-item-4">item-4</div>
      <div class="flex-demo-item-5">item-5</div>
    </div>

    <div class="language-css extra-class">
      <pre class="language-css"><code ref="codeContainer"></code></pre>
    </div>

    <el-form label-width="120px">
      <el-form-item label="flex-direction">
        <el-radio-group v-model="flexDirection">
          <el-radio v-for="item in flexDirectionList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="flex-wrap">
        <el-radio-group v-model="flexWrap">
          <el-radio v-for="item in flexWrapList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="justify-content">
        <el-radio-group v-model="justifyContent">
          <el-radio v-for="item in justifyContentList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="align-items">
        <el-radio-group v-model="alignItems">
          <el-radio v-for="item in alignItemsList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="align-content">
        <el-radio-group v-model="alignContent">
          <el-radio v-for="item in alignContentList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>

</template>

<script lang='ts' setup>
import { ref, computed, watch, onMounted } from 'vue'
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'

const flexDirectionList: FlexDirection[] = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
]

const flexWrapList: FlexWrap[] = [
  'nowrap',
  'wrap',
  'wrap-reverse',
]

const justifyContentList: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

const alignItemsList: AlignItems[] = [
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
]

const alignContentList: AlignContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch',
]

const flexDirection = ref<FlexDirection>('row')
const flexWrap = ref<FlexWrap>('wrap')
const justifyContent = ref<JustifyContent>('space-around')
const alignItems = ref<AlignItems>('center')
const alignContent = ref<AlignContent>('stretch')

const flexCss = computed(() => {
  return `flex-direction: ${flexDirection.value};
flex-wrap: ${flexWrap.value};
justify-content: ${justifyContent.value};
align-items: ${alignItems.value};
align-content: ${alignContent.value};`
})

const codeContainer = ref<HTMLElement>()

const getCssCode = () => {
  if (!codeContainer.value) return
  let cssCode = Prism.highlight(flexCss.value, Prism.languages.css, 'css')
  codeContainer.value.innerHTML = cssCode
}

watch(flexCss, () => {
  getCssCode()
}, { immediate: true })

onMounted(() => {
  getCssCode()
})

</script>

<style lang='scss' scoped>
.flex {
  &-demo {
    display: flex;
    height: 300px;
    border: 1px solid #ccc;
    &-item-1 {
      width: 100px;
      height: 50px;
      background-color: #845EC2;
    }
    &-item-2 {
      width: 130px;
      height: 60px;
      background-color: #D65DB1;
    }
    &-item-3 {
      width: 120px;
      height: 70px;
      background-color: #FF6F91;
    }
    &-item-4 {
      width: 200px;
      height: 170px;
      background-color: #FF9671;
    }
    &-item-5 {
      width: 160px;
      height: 120px;
      background-color: #FFC75F;
    }
  }
}
</style>
