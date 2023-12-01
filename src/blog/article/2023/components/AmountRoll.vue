<template>
  <div class="amount-number">
    <div class="amount-number__item" v-for="(n, index) in amountArr" :key="index">
      <span v-if="!isNaN(n)" class="amount-number__item-number" ref="amount">
        <em :style="{transition: `transform ${transitionDuration}s ease-in-out`}">
          <i>0</i>
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
          <i>6</i>
          <i>7</i>
          <i>8</i>
          <i>9</i>
        </em>
      </span>
      <span v-else class="amount-number__item-comma">{{ n }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    },
    increaseInterval: {
      type: Number,
      default: 5000
    },
    transitionDuration: {
      type: Number,
      default: 0.5
    }
  },
  data() {
    return {
      amount: this.num
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setAmoundPosition()
    })
    setInterval(() => {
      this.increaseRandom()
    }, this.increaseInterval)
  },
  computed: {
    // 数字转数组
    amountArr() {
      return this.amount.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,").split('')
    }
  },
  methods: {
    // 随机增长 1-100
    increaseRandom() {
      const random = Math.floor(Math.random() * 100) + 1
      this.amount += random
      // 重新设置位置
      this.setAmoundPosition()
    },
    // 设置数字位置
    setAmoundPosition() {
      const amount = this.$refs.amount

      const amountNumber = this.amount.toString().split('')
      amount.forEach((el, index) => {
        const number = amountNumber[index]
        const em = el.querySelector('em')
        em.style.transform = `translateY(-${number * 10}%)`
      })
    }
  }
}
</script>

<style scoped>
.amount-number {
  display: flex;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
}

.amount-number__item {
  font-size:36px;
  font-weight: bold;
  color: #fff;
}

.amount-number__item-number {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: #42b883;
  border-radius: 5px;
  overflow: hidden;
}

.amount-number__item-number em {
  display: block;
  transform: translateY(-10%);
}

.amount-number__item-number i {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 60px;
}

.amount-number__item-comma {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 60px;
  color: #42b883;
}
</style>
