<template>
  <div class="container">
    <div class="title">
      <span>{{hangyedongcha_iteml.detailtitle}}</span>
    </div>
    <div class="img">
      <img src="../assets/cimg/red_bottom.png" alt />
    </div>
    <div class="date">
      <span>{{hangyedongcha_iteml.detaildate}}</span>
      <span>{{hangyedongcha_iteml.detaillaiyuan}}</span>
    </div>
    <div class="text" v-for="(m,n) in hangyedongcha_iteml.detailFtext" :key="n">
      {{m.t}}</div>
    <div class="img_big">
      <img width="100%" :src="hangyedongcha_iteml.img" alt />
    </div>
    <div class="text" v-for="(m,n) in hangyedongcha_iteml.detailStext" :key="n+10000">

      <div v-for="(k,l) in m.tit" :key="l">
        <div>
            <b>{{k.titem}}</b>
        </div>
        
        <div v-for="(g,h) in k.t" :key="h">
          <template v-if="g">
        {{g.text}}
          </template>
        </div>
      </div>


    </div>
          <div class="goback">
          <img @click="gobackfn" src="../assets/cimg/goback.jpg" alt="">
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    hangyedongcha_iteml: function () {
      return JSON.parse(window.sessionStorage.getItem("hangyedongcha_iteml"));
    },
  },
  created() {
    // console.log(this.i)
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    },
    gobackfn() {
      this.GoTop();
      this.$router.back(-1);
    },

  },

};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 5%;
  padding-bottom: 2%;
}
.img {
  text-align: center;
}
.img > img {
  display: inline-block;
  width: 30%;
  height: 8px;
}
.img_big {
  margin: 6% 0;
}
.date {
  text-align: center;
  line-height: 45px;
}
.date > span {
}
.text {
  line-height: 37px;
  text-align: justify;
  text-indent: 2em;
  font-size: 16px;

}
.text:last-child {
  margin-bottom: 100px;
}

.goback > img{    
  margin:80px auto;
  cursor: pointer;
}

/* 媒体查询（手机） iphone6 */
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .title{
    font-size: 2rem;
  }
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
    margin-right: auto;
    margin-left: auto;
  }
}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width: 414px) and (max-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .title{
    font-size: 2rem;
  }
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
    margin-right: auto;
    margin-left: auto;
  }
  #container .text:last-child {
    margin-bottom: 2rem;
  }
  .goback{
    text-align: center;
    padding:2rem;
  }
  .goback img{
    width: 12rem;
    margin-left:auto;
    margin-right:auto;
  }

}

</style>