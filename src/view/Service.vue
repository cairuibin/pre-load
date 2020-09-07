<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in CXYswiperList" :key="index">
            
            <!-- <img class="swiper-lazy" :data-src="item.img" alt="轮播图" /> -->
            <div v-if="winWith">
              <img class="swiper-lazy" :data-src="item.img02" id="123456789" alt="轮播图" />
            </div>
            <div v-else>
              <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            </div>

            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <!-- <h1>{{item.title}}</h1>
              <p>{{item.content}}</p> -->
            </div>
          </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
    <div class="flex_wrap">
      <div class="flex_item" v-for="(v,i) in  CXYList" :key="i">
        <div v-if="!v.textFlag" class="col-xs-12 col-sm-12 col-md-12 wow zoomIn padding_100">
          <img @click="gotoyanjiu(i)" :src="v.img" />
        </div>
        <div @click="gotoyanjiu(i)" v-if="v.textFlag" class="col-xs-12 col-sm-12 col-md-12 padding_100">
          <div class="flex_title">
            <span class="flex_title_text" :id="v.idc">{{v.title}}</span>
          </div>
          <div class="flex_content">{{v.content}}</div>
           <div class="flex_content">{{v.content2}}</div>
        </div>
      </div>
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
    ...mapState(["CXYswiperList", "CXYList"]),
  },
  data() {
    return {
      winWith:false,
      ismobile:false
    };
  },
  methods:{
    gotoyanjiu(i){
      console.log(i)
      if(i===0||i===1){
        window.open('http://www.vrrcedu.cn/#')
      }
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

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      lazy: {
        loadPrevNext: true,
      },
      observer: true,
      observeParents: true,
    });

    // new Swiper(".customer-swiper", {
    //   loop: true,
    //   slidesPerView: 3,

    //   autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //   },

    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   observer: true,
    //   observeParents: true,
    // });
    // var wow = new WOW({
    //   boxClass: "wow",
    //   animateClass: "animated",
    //   offset: 0,
    //   mobile: true,
    //   live: true,
    // });
    // wow.init();
  },
};
</script>
<style scoped>
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

  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 
蔡瑞斌
 */
#swiper .swiper-pagination-bullet {
}

/* 
蔡瑞斌
 */
/* 大数据管理系统 */
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

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  /* background: #efefef; */
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px;
}

#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  padding-top: 20px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px 0;
}

.container {
  width: 99vw;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  /* border-bottom: 5px solid #ccc; */
}

#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}

#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

.server-wrapper {
  padding: 10px;
  display: inline-block;
}

.c_h2 {
  text-align: center;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 5px;
  margin-top: 10vh;
}

.c_h2_news {
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 5px;
  margin-top: 2vh;
}

.c_ying_yong {
  text-align: center;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 5px;
  margin: 3vh 0;
}

.liao_jiemore {
  text-align: center;
  margin: 4vh 0;
}

.c_news_wrap {
  display: flex;
  padding: 100px 100px 0 100px;
}

.c_news_item {
  border: 1px solid #000;
  height: 300px;
  flex: 1;
}

.c_news_item:nth-child(2n) {
  margin: 0 6%;
}

.c_wrap_container {
  padding: 0 100px;
}

.CompanyIntroduction-container {
  padding: 40px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

.padding_100 {
  padding: 30px 16%;
}

.c_yuanjing {
  /* height: 500px; */
  /* border: 1px solid #000; */
  width: 80%;
  padding: 50px 100px;
  margin: 50px auto;
}

.c_yuan_jing_flex {
  display: flex;
}

.c_yuan_jing_dt {
  display: inline-block;
}

.c_wrap_container_yuan_jing {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.c_yuan_jing_50 {
  padding: 50px 100px;
  min-width: 400px;
  width: 50%;
}

.img_reduce {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.img_reduce_p {
  padding: 10px 3%;
  text-align: center;
}

.c_swiper_wrap {
  width: 80vw;
}

.c_three {
  padding: 50px 100px;
}

.c_three_item {
  padding: 8%;
}

.thumbnail {
  border: none;
}

.en {
  font-size:28px;
  color: #cccc;
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
.flex_wrap {
  display: flex;
  padding: 100px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.flex_wrap .flex_item {
  width: 50%;
  display: flex;
  align-items: center;
}
.flex_wrap .flex_item img {
  width: 100%;
}
.flex_title {
  font-size: 24px;
  color: rgb(92, 92, 92);
  text-align: center;
  padding-bottom: 10px;
}
.flex_title_text {
  position: relative;
  padding-bottom: 10px;
}
.flex_title_text::before {
  content: "";
  width: 100%;
  height: 2px;
  background: #e81f17;
  position: absolute;
  left: 0;
  bottom: 0;
}
.flex_content {
  font-size: 16px;
  text-align: justify;
  line-height: 34px;
  text-indent: 2em;
}
.zjybg_wrap {
  background: url("../assets/cimg/zjybg.jpg") no-repeat center center;
  height: 300px;
  background-size: 100% 100%;
}
.flex_wrap {
  display: flex;
  padding: 100px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.flex_wrap .flex_item {
  width: 50%;
}
.flex_wrap .flex_item img {
  width: 100%;
}
.flex_title {
  font-size: 24px;
  color: rgb(92, 92, 92);
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
.flex_title_text {
  position: relative;
  padding-bottom: 20px;font-weight: bold;
}
.flex_title_text::before {
  content: "";
  width: 100%;
  height: 2px;
  background: #e81f17;
  position: absolute;
  left: 0;
  bottom: 0;
}
.flex_content {
  font-size: 16px;
  text-align: left;
  line-height: 34px;
  text-indent: 2em;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 20px;
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

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    /* width: 48px;
    height: 48px; */
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    /* border-bottom: 5px solid #ccc; */
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }

  .c_h2 {
    letter-spacing: 0;
  }

  .c_wrap_container {
    padding: 0;
  }

  .padding_100 {
    padding: 10px 30px;
  }

  .c_three {
    padding: 0;
  }

  .c_three_item {
    padding: 20px;
  }
  .padding_100[data-v-35c48404] {
    padding: 2rem 1rem;
  }
}
/* 媒体查询（手机） iphone6 */
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
  #HomePage .flex_wrap {
    display: block;
    padding: 2rem;
  }
  #HomePage .flex_wrap .flex_item {
    width: 100%;
    display: block;
  }
  #HomePage .flex_title{
    font-size: 1.8rem;
  }
    .padding_100 {
    padding: 2rem 1rem;
  }
  .flex_content {
    font-size: 14px;
    line-height: 32px;
  }

}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
  #HomePage .flex_wrap {
    display: block;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  #HomePage .flex_wrap .flex_item {
    width: 100%;
    display: block;
  }
    #HomePage .flex_title{
    font-size: 1.8rem;
  }
    .padding_100 {
    padding: 2rem 1rem;
  }
  .flex_content {
    font-size: 14px;
    line-height: 32px;
  }


}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
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

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }

  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }

  .c_wrap_container {
    padding: 0px;
  }

  .padding_100 {
    padding: 30px;
  }

  #bigData {
    padding: 30px;
  }

  .c_three {
    padding: 50px 0;
  }

  .c_three_item {
    padding: 3%;
  }
  .flex_wrap .flex_item{
    width: 100%;
  }
}
</style>