<template>
  <div class="object-css">
    <div class="object-css-img">
      <img src="/images/tools/object-image.png" :style="{
        'object-fit': objectFit,
        'object-position': objectPositionX + ' ' + objectPositionY,
      }" />
    </div>

    <div class="language-css extra-class">
      <pre class="language-css"><code ref="codeContainer"></code></pre>
    </div>

    <el-form label-width="130px">
      <el-form-item label="object-fit">
        <el-radio-group v-model="objectFit">
          <el-radio v-for="item in objectFitList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="object-position-x">
        <el-radio-group v-model="objectPositionX">
          <el-radio v-for="item in objectPositionXList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="object-position-y">
        <el-radio-group v-model="objectPositionY">
          <el-radio v-for="item in objectPositionYList" :key="item" :label="item">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, watch, onMounted } from 'vue'
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
type ObjectPositionX = 'left' | 'center' | 'right'
type ObjectPositionY = 'top' | 'center' | 'bottom'

const objectFitList: ObjectFit[] = [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
]

const objectPositionXList: ObjectPositionX[] = [
  'left',
  'right',
  'center',
]

const objectPositionYList: ObjectPositionY[] = [
  'top',
  'bottom',
  'center',
]

const objectFit = ref<ObjectFit>('fill')
const objectPositionX = ref<ObjectPositionX>('center')
const objectPositionY = ref<ObjectPositionY>('center')

const codeContainer = ref<HTMLElement>()

const css = computed(() => {
  return `object-fit: ${objectFit.value};
object-position: ${objectPositionX.value} ${objectPositionY.value};`
})

const getCssCode = () => {
  if (!codeContainer.value) return
  let cssCode = Prism.highlight(css.value, Prism.languages.css, 'css')
  codeContainer.value.innerHTML = cssCode
}

watch(css, () => {
  getCssCode()
}, { immediate: true })

onMounted(() => {
  getCssCode()
})
</script>

<style lang='scss' scoped>
.object-css {
  &-img {
    width: 300px;
    height: 300px;
    margin: 20px auto;
    border: 8px solid #ccc;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
