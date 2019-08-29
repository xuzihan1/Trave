<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    overflow hidden
    text-align center
    color #ffffff
    line-height $headerHeight
    font-size .32rem
    position relative
    background $bgColor
    height $headerHeight

    .header-back
      top 0
      left 0
      text-align center
      font-size .4rem
      position absolute
      width .64rem
      color #ffffff

</style>
