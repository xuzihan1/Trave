<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data () {
            return {
                recommendList: [{
                    id: "0001",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0002",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0003",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0004",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0005",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0006",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }, {
                    id: "0007",
                    imgUrl: "https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
                    title: "北京欢乐谷",
                    desc: ">亚洲唯一飞行式过山车等你来挑战"
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%

    .item-img
      width 100%

  .item-info
    padding .1rem

    .item-title
      ellipse()
      line-height .54rem
      font-size .32rem

    .item-desc
      line-height .4rem
      color #ccc
      ellipse()

</style>
