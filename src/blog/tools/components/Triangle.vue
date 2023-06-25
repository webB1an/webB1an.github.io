<template>
  <div class="triangle-container">
    <div class="center"></div>
    <div class="square"></div>
    <div class="square rotate"></div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

</script>

<style scoped>
.triangle-container {
  position: relative;
  width: 140px;
  height: 140px;
}
.center {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  background-color: #fff;
  z-index: 6;
}
.square {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background: #d1f4fa;
  z-index: 4;
}
.square.rotate {
  width: 85px;
  height: 85px;
  background-color: #8e98f5;
  transform: rotate(45deg);
  z-index: 5;
}
</style>