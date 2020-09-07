<template>
  <div class="container">
    <div class="img_title">
      <img class="img-responsive" v-if="$route.params.id==='1'" src="../assets/cimg/k12.jpg" alt />
      <img class="img-responsive" v-if="$route.params.id==='2'" src="../assets/cimg/zhiye.jpg" alt />
      <img class="img-responsive"  v-if="$route.params.id==='3'"  src="../assets/cimg/gaodeng.jpg" alt />
    </div>
    <Detailcom v-for="i in arr" :key="i.id" :i="i" :pid='$route.params.id'/>
    <div class="goback">
      <img @click="gobackfn()" class="img" src="../assets/cimg/goback.jpg" alt />
    </div>
  </div>
</template>

<script>
import Detailcom from "../components/ying_yong_detail";
import { mapState } from "vuex";
export default {
  components: {
    Detailcom,
    arr: [],
  },
  computed: {
    ...mapState(["forK12", "forGao_deng", "forZhi_ye"]),
    arr: function () {
      if (this.$route.params.id === "1") {
        return this.forK12;
      } else if (this.$route.params.id === "2") {
        return this.forZhi_ye;
      } else if (this.$route.params.id === "3") {
        return this.forGao_deng;
      }
    },
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
.img_title {
  margin-top: 100px;
  margin-bottom: 100px;
}
.img {
  display: inline-block;
}

.goback {
  text-align: center;
  margin: 5%;
}


/* 媒体查询（手机） iphone6 */
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
  .img_title {
    margin-top: 0;
    margin-bottom: 0;
  }
  .img_title img{
    height: 10rem;
  }
  .container .gobtn > img[data-v-12185905] {
    display: inline-block;
    width: 10rem;
  }
}


/* 媒体查询（手机） iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
  .container .img_title {
    margin-top: 0;
    margin-bottom: 0;
  }

  .img_title img{
    height: 10rem;
  }
  .container .gobtn > img[data-v-12185905] {
    display: inline-block;
    width: 10rem;
  }
  .goback img{
    width: 10rem;
  }
}

@media screen and (max-width: 751px){
    .goback img{
      width: 100px;
      height: 30px;
    }
}
</style>