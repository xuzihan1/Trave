<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>

</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    background $bgColor
    padding 0 .1rem
    height .72rem

    .search-input
      line-height .62rem
      width 100%
      text-align center
      padding 0 .1rem
      box-sizing border-box
      border-radius .06rem
      color #666
      height .62rem


</style>
