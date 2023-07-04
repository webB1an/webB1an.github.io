<template>
  <div class="box-shadow">
    <div class="box-shadow-setting">
      <div class="box-shadow-setting-item">
        <div>X 偏移量</div>
        <el-slider :min="-200" :max="200" v-model="x" show-input size="small" />
      </div>
      <div class="box-shadow-setting-item">
        <div>Y 偏移量</div>
        <el-slider :min="-200" :max="200" v-model="y" show-input size="small" />
      </div>
      <div class="box-shadow-setting-item">
        <div>阴影模糊半径</div>
        <el-slider :min="0" :max="300" v-model="blur" show-input size="small" />
      </div>
      <div class="box-shadow-setting-item">
        <div>阴影扩散半径</div>
        <el-slider :min="0" :max="300" v-model="spread" show-input size="small" />
      </div>
      <div class="box-shadow-setting-item">
        <div>阴影颜色</div>
        <el-color-picker v-model="shadowColor" show-alpha />
      </div>
      <div class="box-shadow-setting-item">
        <div>背景颜色</div>
        <el-color-picker v-model="bgColor" />
      </div>
      <div class="box-shadow-setting-item">
        <div>盒子颜色</div>
        <el-color-picker v-model="boxColor" />
      </div>
      <div class="box-shadow-setting-item">
        <el-switch
          v-model="inset"
          active-text="inset"
          inactive-text="outline"
        />
      </div>
    </div>
    <div class="box-shadow-display">
      <div class="box-shadow-display-parent" :style="{'background-color': bgColor}">
        <div class="box-shadow-display-child" :style="{
          'background-color': boxColor,
          'box-shadow': boxShadow
        }">
          <el-input v-model="boxShadow" type="textarea" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
const inset = ref(false)
const x = ref(10)
const y = ref(10)
const blur = ref(5)
const spread = ref(0)
const shadowColor = ref('rgba(24, 26, 25, 0.8)')
const bgColor = ref('#fff')
const boxColor = ref('#e7a61a')

const boxShadow = computed(() => {
  return `${inset.value ? 'inset ' : ''}${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
})
</script>

<style lang='scss' scoped>
.box-shadow {
  display: flex;
  &-setting {
    width: 400px;
    height: 100%;
    background-color: #fff;
    &-item {
      margin: 20px;
    }
  }
  &-display {
    width: 50%;
    height: 100%;
    background-color: #fff;
    &-parent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 600px;
      height: 600px;
      background-color: red;
    }
    &-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 400px;
      padding: 20px;
    }
  }
}
</style>
