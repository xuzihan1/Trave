<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data () {
          return {
              recommendList: [{
                  id: "0001",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0002",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0003",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0004",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0005",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0006",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
                  title: "北京欢乐谷",
                  desc: ">亚洲唯一飞行式过山车等你来挑战"
              }, {
                  id: "0007",
                  imgUrl: "https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      min-width 0
      flex 1
      padding .1rem
      .item-title
        ellipse()
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
        ellipse()
      .item-btn
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        color #fff
        border-radius .06rem
</style>
