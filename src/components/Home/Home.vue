<template>
  <div>
    {{maxValue}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      maxValue: ''
    }
  },
  created: function () {
    let a1 = 3
    let b1 = 6
    let c1 = 11
    let d1 = 22
    let e1 = 1
    let array = [a1, b1, c1, d1, e1]
    let max = Math.min.apply(null, array)
    this.maxValue = max
  }
}
</script>

<style lang="scss" scoped>

</style>
