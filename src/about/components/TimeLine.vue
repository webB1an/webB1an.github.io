<template>
  <div class="timeline-wrap">
    <div class="timeline-item" v-for="(item,index) in dataList" :key="index">
      <div class="timeline-item-title">
        <span>{{ item.time }}</span>
      </div>
      <div class="timeline-item-description">
        <span class="timeline-item-description-span">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  data(){
    return {
      
    }
  },
  props: {
    dataList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.timeline-wrap {
  padding: 20px 40px;
}


.timeline-item {
  padding: 0px 10px 20px 20px;
  border-left: 1px solid #84b9e5;
  line-height: 1;
  position: relative;
}
.timeline-item::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  position: absolute;
  left: -4px;
  top: 0px;
  border: 1px solid #84b9e5;
  border-radius: 50%;
  background: #fff;
  background: #84b9e5;
}
.timeline-item .timeline-item-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.6em;
}
.timeline-item .timeline-item-description-span {
  padding: 8px 0 8px 0;
  display: block;
  color: #a3a0a0;
  font-size: 16px;
  /* font-weight: bold; */
  
}

.timeline-item .timeline-item-description {
  font-size: 14px;
}

</style>