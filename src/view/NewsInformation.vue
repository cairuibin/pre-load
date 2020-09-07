<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in newSswiperList" :key="index">
            <!-- <img class="swiper-lazy" :data-src="item.img" alt="轮播图" /> -->

            <!-- <img class="swiper-lazy" :data-src="item.img" alt="轮播图" /> -->
            <div v-if="winWith">
              <img class="swiper-lazy" :data-src="item.img02" id="123456789" alt="轮播图" />
            </div>
            <div v-else>
              <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            </div>

            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="newsbg">
      <div id="qiyezixun" class="c_h2_news">企业资讯</div>
      <div class="en">Enterprise Information</div>
      <div class="row c_88">
        <div class="col-sm-12 col-md-4" v-for="v in QIYEZIXUN" :key="v.title2">
          <div class="thumbnail">
            <img class="mb40" :src="v.img" alt="..." />
            <div class="caption">
              <div class="div_center">{{v.title}}</div>
              <div class="div_center div_bottom_border">
                <span>{{v.title2}}</span>
              </div>
              <div class="c_text">{{v.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row liao_jiemore">
      <div style="text-align: center;" class="red_button_wrap">
        <!-- @click="GOto('/companyintroduction',2)" -->
        <img @click="jumpzx" class="red_button" src="../assets/cimg/red_btn.jpg" alt />
      </div>
    </div>

    <div class="newsbg">
      <div id="hangyedongcha" class="c_h2_news">行业洞察</div>
      <div class="en">Industry Insight</div>
      <div class="row c_88">
        <div class="col-sm-12 col-md-4" v-for="v in HANGYEDONGCHA" :key="v.title2">
          <div class="thumbnail">
            <img class="mb40" :src="v.img" alt="..." />
            <div class="caption">
              <div class="div_center">{{v.title}}</div>
              <div class="div_center div_bottom_border">
                <span>{{v.title2}}</span>
              </div>
              <div class="c_text">{{v.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row liao_jiemore">
        <div style="text-align: center;" class="red_button_wrap">
          <!-- @click="GOto('/companyintroduction',2)" -->
          <img @click="jumphy" class="red_button" src="../assets/cimg/red_btn.jpg" alt />
        </div>
      </div>
    </div>

    <div class="newsbg">
      <div id="shipinzhuanqu" class="c_h2_news">视频专区</div>
      <div class="en">Video Zone</div>
      <div class="row c_88">
        <div class="col-sm-12 col-md-4" v-for="v in SHIPINGZHUANQU" :key="v.title2">
          <div class="thumbnail">
            <img class="mb40" @click="playto(v.vedioSrc)" :src="v.img" alt="..." />
            <!-- <video class="mb40" :src="v.vedioSrc" controls></video> -->
            <div class="caption">
              <div class="div_center red">{{v.title}}</div>
              <div class="div_center div_bottom_border">
                <span>{{v.title2}}</span>
              </div>
              <div class="c_text">{{v.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row liao_jiemore">
        <div style="text-align: center;" class="red_button_wrap">
          <!-- @click="GOto('/companyintroduction',2)" -->
          <img @click="jumpsp" class="red_button" src="../assets/cimg/red_btn.jpg" alt />
        </div>
      </div>
    </div>

    <div class="shejiao" id="shejiaomeiti">
      <div class="c_h2 c_h2_news">社交媒体</div>
      <div class="en">Social Media</div>
      <!-- <div class="row c_6_wrap">
        <div class="col-xs-4 col-md-2" v-for="v in erweimaList" :key="v.z">
          <div class="col-1-of-3">
            <div class="card img_wrap_l">
              <div class="card__side card__side--front-1">
                <img :src="v.z" />
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <img :src="v.f" />
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="img_wrap_l">
        <div v-for="v in erweimaList" :key="v.z">
          <img :src="v.z" alt />
          <img :src="v.f" alt />
        </div>
      </div>
    </div>
    <div class="module none" id="newmodule">
      <video
        id="homeplay"
        class="img-responsive center-block ipad_img_100 width100"
        :src="cursrc"
        controls
        :autoplay="true"
      ></video>
      <button class="closemodule" @click="closemodule">关闭</button>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
// import { WOW } from "wowjs";
import { mapState } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState([
      "newSswiperList",
      "erweimaList",
      "QIYEZIXUN",
      "HANGYEDONGCHA",
      "SHIPINGZHUANQU",
    ]),
  },
  data() {
    return {
      cursrc: "",
      winWith:false,
      ismobile:false,
    };
  },
  methods: {
    playto(e) {
      this.cursrc = e;
      console.log(document.getElementById("homeplay"));
      document.getElementById("newmodule").classList.add("block");
      document.getElementById("newmodule").classList.remove("none");
      // document.getElementById("homeplay").play();
    },
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
    closemodule() {
      document.getElementById("newmodule").classList.remove("block");
      document.getElementById("newmodule").classList.add("none");
      // document.getElementById("newshomeplay").pause();
    },
    jumpzx(){
      this.GoTop();
      this.$router.push('/qiyezixun_item');
    },
    jumphy(){
      this.GoTop();
      this.$router.push('/hangyedongtai_item');
    },
    jumpsp(){
      this.GoTop();
      this.$router.push('/shipin_item');
      
    },

    //判断是pc还是手机
    getInnerItem:function(){
      //debugger
      this.winWith = window.getInnerItem();
      console.log(this.winWith)
      //alert(this.winWith);
    },
    _isMobile:function(){
      this.ismobile =  window._isMobile();
      //alert(this.ismobile);
    }
    // jump() {
    //   this.$router.push("/qiyezixun_item");
    // },
  },

  created(){
    this.getInnerItem();
    this._isMobile();

  },

  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: "fade",
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true,
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  },
};
</script>
<style scoped>
.row {
  width: 1200px;
  margin: 0 auto;
}

.card {
  -webkit-perspective: 150rem;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 200px;
}

.card__side {
  height: 200px;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
}

.card__side--back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.card:hover .card__side--front-1 {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.card:hover .card__side--back {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}

.row .col-1-of-3 {
  width: 200px;
  float: left;
  margin: 31px;
}

/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  /* height: 600px; */
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide {
  position: relative;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  /* font-size: 50px; */
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}
#contactUs {
  color: #fff;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

.c_three {
  padding: 50px 100px;
}

.c_three_item {
  padding: 8%;
}

.c_h2 {
  text-align: center;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 5px;
  margin-top: 10vh;
}

.thumbnail {
  border: none;
  padding: 10%;
}

.c_p_center {
  text-align: center;
  line-height: 30px;
}

.c_6_wrap {
  width: 89%;
  margin: 120px auto;
}

.img_252 {
  width: 100%;
  padding: 10px 0;
}
.newsbg {
  padding-bottom: 50px;
}
.c_h2_news {
  text-align: center;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 5px;
  margin-top: 150px;
}

.en {
  font-size: 28px;
  color: rgb(92 92 92);
  text-align: center;
  font-family: "微软雅黑";
  font-weight: 100;
  position: relative;
}

.en::before {
  content: "";
  width: 128px;
  height: 4px;
  background: #e81f17;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -64px;
}
.div_center {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: rgb(92 92 92);
  font-family: "微软雅黑";
}

.div_bottom_border > span {
  border-bottom: 4px solid #e81f17;
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  padding-bottom: 7px;
  margin-bottom: 20px;
}
.red_button {
  background-color: #e81f17;
  display: inline-block;
  width: 14rem;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  line-height: 3.9rem;
  font-weight: bold;
  font-size: 20px;
}

.red {
  color: #e81f17;
}
.c_text {
  font-size: 16px;
  line-height: 32px;
  color: rgb(92, 92, 92);
  text-indent: 4rem;
  text-align: justify;
}
.c_88 {
  margin-top: 120px;
  width: 85%;
}
.mb40 {
  margin-bottom: 40px;
  width: 100%;
  max-height: 350px;
}
.red_button_wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shejiao {
  background: url("../assets/cimg/she_jiao.jpg") no-repeat;
  background-size: 100%;
  padding: 50px 0;
}

.block {
  display: block;
}
.none {
  display: none;
}
.module {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  top: 0;
  left: 0;
  z-index: 100;
}
.module > video {
  width: 50%;
  /* height: 50%; */
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25%;
  top: 20%;
}

.closemodule {
  position: absolute;
  top: 50px;
  right: 100px;
}
.img_wrap_l {
  display: flex;
  flex-wrap: wrap;
  margin: 60px auto;
  width: 1480px;
}
.img_wrap_l div {
  margin: 20px;
  position: relative;
  width: 200px;
  height: 200px;
}
.img_wrap_l div img {
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}
.img_wrap_l div img:nth-of-type(2) {
  transform: rotateY(90deg);
}
.img_wrap_l div:hover img:nth-of-type(1) {
  opacity: 0;
}
.img_wrap_l div:hover img:nth-of-type(2) {
  transform: rotateY(0deg);
}
@media screen and (max-width: 320px) {
  .img_wrap_l div img {
    width: 42% !important;
    height: 42% !important;
  }
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  .img_wrap_l {
    display: block;
    flex-wrap: wrap;
    margin: 60px auto;
    width: auto;
  }
  .img_wrap_l div {
    margin: 20px 28px;
    position: static;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    align-items: center;
  }
  .img_wrap_l div img {
    width: 50%;
    height: 50%;
    position: static;
    opacity: 1 !important;
    transform: rotate(0) !important;
  }
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  .c_three {
    padding: 50px 10px;
  }

  .c_three_item {
    padding: 0;
  }

  .c_p_center {
    padding: 0 10px;
  }

  .c_6_wrap {
    width: 100%;
  }
}
/* 媒体查询（手机） iphone6 */
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .img_wrap_l {
    display: flex;
    flex-wrap: wrap;
    margin: 60px auto;
    width: 375px !important;
  }
  .img_wrap_l div {
    margin: 20px;
    position: relative;
    width: 147px;
    height: 147px;
  }
  .c_h2_news,
  .c_h2,
  .en,
  #HomePage .div_center,
  .div_bottom_border > span {
    font-size: 1.8rem;
  }
  .en:before {
    content: "";
    width: 6rem;
    height: 3px;
    background: #e81f17;
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -64px;
    transform: translateX(50%);
  }
  .c_h2_news {
    margin-top: 2rem;
  }
  #HomePage .thumbnail {
    margin-bottom: 2rem;
  }
  #HomePage .newsbg {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  #HomePage .c_88 {
    margin-top: 2rem;
    width: 100%;
  }
  .shejiao {
    background: none;
    padding-top: 2rem;
  }
  .col-sm-12, .col-md-4{
    padding-right: 0;
    padding-left: 0;
  }
  .thumbnail{
    padding: 0 3rem;
  }
  .c_text {
    font-size: 14px;
    line-height: 32px;
  }

}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width: 414px) and (max-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .c_h2_news,
  .c_h2,
  .en {
    font-size: 2rem;
  }
  .en:before {
    content: "";
    width: 6rem;
    height: 3px;
    background: #e81f17;
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -64px;
    transform: translateX(50%);
  }
  .c_h2_news {
    margin-top: 2rem;
  }
  .img_wrap_l {
    display: flex;
    flex-wrap: wrap;
    margin: 60px auto;
    width: 375px !important;
  }
  .img_wrap_l div {
    margin: 20px;
    position: relative;
    width: 147px;
    height: 147px;
  }
  .c_h2_news,
  .c_h2,
  .en,
  #HomePage .div_center,
  .div_bottom_border > span {
    font-size: 1.8rem;
  }
  .en:before {
    content: "";
    width: 6rem;
    height: 3px;
    background: #e81f17;
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -64px;
    transform: translateX(50%);
  }
  .c_h2_news {
    margin-top: 2rem;
  }
  #HomePage .thumbnail {
    margin-bottom: 2rem;
  }
  #HomePage .newsbg {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  #HomePage .c_88 {
    margin-top: 2rem;
    width: 100%;
  }
  .shejiao {
    background: none;
    padding-top: 2rem;
  }
  .col-sm-12, .col-md-4{
    padding-right: 0;
    padding-left: 0;
  }
  .thumbnail{
    padding: 0 3rem;
  }
  .c_text {
    font-size: 14px;
    line-height: 32px;
  }
}
/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  .img_wrap_l {
    display: flex;
    flex-wrap: wrap;
    margin: 60px auto;
    width: 768px !important;
  }
  .img_wrap_l div {
    margin: 20px;
    position: relative;
  }
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  .c_three {
    padding: 50px 0px;
  }

  .c_6_wrap {
    width: 98%;
  }

  .c_h2 {
    margin-top: 4vh;
  }
  .mb40 {
    width: 89%;
  }
}
@media screen and (max-width: 751px) {
  .liao_jiemore {
    width: auto;
  }
}
@media screen and (max-width: 1480px) {
  .img_wrap_l {
    width: 975px;
  }
}
@media screen and (max-width: 1000px) {
  .img_wrap_l {
    width: 733px;
  }
}
@media screen and (max-width: 320px) {
  .img_wrap_l {
    width: 320px;
  }
}
</style>