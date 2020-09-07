<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in CFswiperList" :key="index">

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

    <div @click="go_ohter('vr')">
      <div class="c_h2" id="VRARZH">VR/AR智慧教育解决方案</div>
      <div class="en">VR/AR Interlligent Education Solutions</div>
      <div id="bigData" class="text_center">中教云通过大数据、云计算、人工智能、物联网、虚拟现实技术，为高等院校、职业院校、中小学提供</div>
      <div class="text_center">教育信息化一站式解决方案。充分融合VR/AR软硬件及优质原创课程资源优势，定制化搭建智慧课堂，重塑未来校园新生态。</div>
      <div class="flex_wrap">
        <div class="flex_item" v-for="(v ,i) in  CFvrList" :key="i">
          <div v-if="!v.textFlag" class="col-xs-12 col-sm-12 col-md-12 wow zoomIn padding_100">
            <img :src="v.img" />
          </div>
          <div v-if="v.textFlag" class="col-xs-12 col-sm-12 col-md-12 padding_100">
            <div class="flex_title">
              <span class="flex_title_text">{{v.title}}</span>
            </div>
            <div class="flex_content">{{v.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container zjybg_wrap" id="ZJYSZ" @click="go_ohter('zjysz')">
      <div class="c_h2">中教云数字课程教育云平台</div>
      <div class="en">Cloud Platform For Digtal Curriculum Materials</div>
      <div id="bigData" class="text_center">中教云以大数据、云计算、区块链、人工智能为基础，加速信息技术与教育教学深度融合，打通教育资源</div>
      <div class="text_center">生产企业与学校壁垒，重塑共建共筹的教育产业生态，汇聚多元优质数字化课程教材资源，为教育行政部门、学校、老师、学</div>
      <div class="text_center">生、家长，提供集“智管、智教、智学、智辅”为一体化的全流程智慧教育综合性服务平台。</div>

      <div class="zjybg_wrapitem" v-for="v in zjybg_wrapitemList" :key="v.title">
        <div class="zjybg_wraptop">
          <div class="zjybg_wrapleft">
            <img :src="v.src" alt />
          </div>
          <div class="zjybg_wrapright">
            <div class="zjybg_wrapbigtext">{{v.title}}</div>
            <div class="zjybg_wrapsmalltext">{{v.en}}</div>
          </div>
        </div>
        <div class="zjybg_wrapcontent">{{v.text}}</div>
      </div>
    </div>

    <div class="container Czjybg_wrap" @click="go_ohter('zjyzy')">
      <div class="c_h2" id="ZJYZY">中教云职业教育云平台</div>
      <div class="en">Cloud Platform For Digtal Curriculum Materials</div>
      <div id="bigData" class="text_center">中教云构建全方位职业智慧教育云平台和教育大数据平台，融入智慧教学、智慧实训、1+X体系</div>
      <div class="text_center mb_150">和产教融合等核心理念，为职业院校提供“平台+资产+资源+应用+智慧实训基地+企业”的一站式综合教育解决方案。</div>

      <div class="Czjybg_wrapitem" v-for="v in Czjybg_wrapitemList" :key="v.title">
        <div class="Czjybg_wraptop">
          <div class="Czjybg_wrapleft">
            <img :src="v.src" alt />
          </div>
          <div class="Czjybg_wrapright">
            <div class="Czjybg_wrapbigtext">{{v.title}}</div>
            <div class="Czjybg_wrapsmalltext">{{v.en}}</div>
          </div>
        </div>
        <div class="Czjybg_wrapcontent">{{v.text}}</div>
      </div>
    </div>

    <div class="c_h2" id="ZJYZN">中教云智能教辅</div>
    <div class="en">Intelligent Teaching Auxiliary</div>
    <div class="row c_three">
      <div class="right">
        <div
          class="text_left"
        >依据国家课程标准，基于不同版本教材的设计理念，借助人工智能、区块链、虚拟现实、云计算等新一代信息技术，联合各大教育出版企业、教育资源内容加工企业，共同打造致力于构建包括智慧学习、交互式学习的新型教育体系。</div>
        <div
          class="text_left"
        >为教师提供资源及智慧教学服务；为学生提供个性、智能、可持续的学习服务。打造国际一流、国内领先的课堂教学+课后补充相结合的教育资源服务体系，创新教育服务新业态。</div>
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
  methods: {
    go_ohter(e) {
      console.log(e);
      if (e === "vr") {
        window.open("https://www.yesvrclass.com");
      } else if (e === "zjysz") {
        window.open("http://www.necibook.com");
      } else if (e === "zjyzy") {
        window.open("https://www.zjyve.com");
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
    },
  },
  computed: {
    ...mapState([
      "CFswiperList",
      "CFvrList",
      "zjybg_wrapitemList",
      "Czjybg_wrapitemList",
    ]),
  },
  data() {
    return {
      winWith:false,
      ismobile:false
    };
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
    /* customer-swiper */
    //   new Swiper(".customer-swiper", {
    //     loop: true, // 循环模式选项
    //     slidesPerView: 3,
    //     //自动播放
    //     autoplay: {
    //       delay: 3000,
    //       stopOnLastSlide: false,
    //       disableOnInteraction: false,
    //     },
    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //     observeParents: true, //修改swiper的父元素时，自动初始化swiper
    //   });
    //   /* wowjs动画 */
    //   var wow = new WOW({
    //     boxClass: "wow",
    //     animateClass: "animated",
    //     offset: 0,
    //     mobile: true,
    //     live: true,
    //   });
    //   wow.init();
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
  padding-top: 50px;
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
  width: 100%;
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
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 5px;
  margin: 10vh 0;
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
  padding: 30px 60px;
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

.thumbnail {
  border: none;
}

.en {
  font-size: 28px;
  color: rgb(92, 92, 92);
  text-align: center;
  font-family: "微软雅黑";
  font-weight: 100;
  width: 100%;
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
  width: 46%;
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
  padding-bottom: 30px;
}
.flex_title_text {
  position: relative;
  padding-bottom: 15px;
  font-weight: bold;
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
  text-align: justify;
}
.zjybg_wrap {
  width: 100%;
  background: url("../assets/cimg/zjybg.jpg") no-repeat center center;
  display: flex;
  justify-content: space-around;
  background-size: 100% 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 10%;
}

.zjybg_wrapitem {
  min-height: 350px;
  height: 360px;
  width: 40%;
  margin: 50px 5%;
}
.zjybg_wraptop {
  width: 100%;
  flex: 1;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid rgb(92, 92, 92);
  padding-bottom: 30px;
}
.zjybg_wrapleft {
  flex: 2;
  text-align: right;
}
.zjybg_wrapleft > img {
  display: inline-block;
}
.zjybg_wrapright {
  flex: 2;
}
.zjybg_wrapbigtext {
  font-size: 26px;
  font-weight: bold;
  color: rgb(70, 70, 70);
}
.zjybg_wrapsmalltext {
  font-size: 16px;
  color: rgb(70, 70, 70);
}
.zjybg_wrapcontent {
  text-indent: 2em;
  font-size: 16px;
  color: rgb(92, 92, 92);
  text-align: justify;
  line-height: 30px;
}
.Czjybg_wrap {
  width: 100%;
  background: url("../assets/cimg/servicedetail/servie2.jpg") no-repeat center
    center;
  display: flex;
  justify-content: space-around;
  background-size: 100% 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 10%;
  padding-top: 0;
}

.Czjybg_wrapitem {
  height: 300px;
  width: 40%;
  margin: 50px 5%;
}
.Czjybg_wraptop {
  width: 100%;
  flex: 1;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #fff;
  padding-bottom: 30px;
}
.Czjybg_wrapleft {
  flex: 2;
  text-align: right;
}
.Czjybg_wrapleft > img {
  display: inline-block;
}
.Czjybg_wrapright {
  flex: 2;
}
.Czjybg_wrapbigtext {
  font-size: 26px;
  font-weight: bold;
  color: #fff;
}
.Czjybg_wrapsmalltext {
  font-size: 16px;
  color: #fff;
}
.Czjybg_wrapcontent {
  text-indent: 2em;
  font-size: 16px;
  color: #fff;
  text-align: justify;
  line-height: 30px;
}
.text_center {
  text-align: center;
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  color: rgb(92, 92, 92);
}
.text_left {
  font-size: 16px;
  line-height: 30px;
  color: rgb(92, 92, 92);
  text-indent: 2em;
  text-align: justify;
  letter-spacing: 1px;
}
.mb_150 {
  margin-bottom: 150px;
}
.c_three {
  width: 91%;
  height: 640px;
  background: url(../assets/cimg/zhineng.png) no-repeat center center;
  background-size: 100% auto;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.c_three > .right {
  width: 30%;
  position: absolute;
  right: 11%;
}
#ZJYZN {
  margin-top: 130px;
}
#VRARZH {
  margin-top: 170px;
}
/* 媒体查询（手机） */
/*iphone6 */
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){

#swiper {height:200px;}
#bigData {padding:20px;}
#bigData .bigData-title {font-size:20px;}
#bigData .bigData-device {font-size:20px;margin:10px 0 10px;}
#contactUs {height:200px;transition:all ease 0.6s;}
#contactUs .contactUs-container {padding-top:0;}
#contactUs .contactUs-container h1 {font-size:25px;}
#contactUs .contactUs-container h3 {font-size:18px;}
#contactUs .contactUs-container button {width:200px;height:30px;margin-top:20px;}
#contactUs .contactUs-container .contactUs-contactWay span {display:inline-block;width:28px;height:28px;margin:10px;}
#customer {padding:30px 0;box-sizing:border-box;background:#fff;}
#customer .customer-title {font-size:16px;font-weight:bold;}
#customer .customer-logo img {/* width:48px;height:48px;*/}
#customer .customer-block {padding:30px;}
#customer .customer-block > div {padding:30px 0;}
#whyChooseUs {padding:20px 0;transition:all ease 0.6s;}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {font-size:20px;font-weight:700;}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {font-size:12px;}
#whyChooseUs .server-block {padding:50px 0;border:1px solid #ccc;/* border-bottom:5px solid #ccc;*/}
#whyChooseUs .server-block img {width:48px;height:48px;}
#whyChooseUs .server-block > p {font-size:20px;margin:30px 0;}
#whyChooseUs .server-block > div {color:#ccc;}
#VRARZH {margin-top:2rem;font-size:2rem;}
.en {font-size:2rem;}
.c_wrap_container {padding:0;}
.padding_100 {padding:10px 30px;}
.en {font-size:2rem;}
.c_h2 {font-size:2rem;margin-top:2rem;}
#VRARZH {margin-top:2rem;}
#bigData{padding:20px;}
.text_center[data-v-006a26f5] {padding:2rem;}
.flex_wrap {padding:2rem; margin-top: 2rem;}
.flex_item[data-v-006a26f5] {
    width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .zjybg_wrap{
    width: 100%;
    background:none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    background-size: 100% 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 2rem;
  }
  .zjybg_wrapitem {
  min-height: 3.5rem;
  height: 100%;
  width: 100%;
  margin: 2rem 5%;
  }
  .zjybg_wraptop {
  width: 100%;
  flex: 1;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 3px solid rgb(92, 92, 92);
  padding-bottom: 2rem;
  }
  .zjybg_wrapleft > img{
    width:9rem;
  }
  .zjybg_wrapbigtext{
    font-size: 2rem;
  }
  .Czjybg_wrapitem {
    min-height: 3.5rem;
    height: 100%;
    width: 100%;
    margin: 2rem 5%;
  }
  .Czjybg_wrapleft> img{
    width:9rem;
  }
  .Czjybg_wrap{
    width: 100%;
    background: none;
    background-size: 100% 100%;
    background-color: #2152b8;
    
  }
  .Czjybg_wrap #ZJYZY, .Czjybg_wrap .en, .Czjybg_wrap .text_center{
      color:#fff;
    }
  .mb_150 {
    margin-bottom: 2rem;
  }
  .Czjybg_wrap .text_center {
    text-align: center;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    margin-bottom:0;
  }
  .c_three{
    width:100%;
    height: 50rem;
    background: url(/static/img/zhineng.ee23574.png) no-repeat left bottom;
    background-size: 135%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: block;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 3rem;
  }

  #ZJYZN {
  margin-top: 2rem;
  }
  #HomePage .row{margin-right:0; margin-left:0;}
  #HomePage .c_three{
    width:100%;    padding: 2rem;
  }
  #HomePage .flex_wrap .flex_item{
    width: 100%;
  }

  .flex_wrap .flex_item {width: 100%;}
  #HomePage .row{margin-right:0; margin-left:0;}
  #HomePage .c_three{
    width:100%;    padding: 2rem;
  }
  #HomePage .flex_wrap .flex_item{
    width: 100%;
  }
  #HomePage .flex_wrap .flex_item:nth-child(2n){  
    margin-bottom:6rem;
  }
  #HomePage .c_three >.right {
    width: 100%;
    position: relative;
    right:0;
    }
  #HomePage .en:before {
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

    .zjybg_wrapleft > img{
    width:9rem;
    }
    .Czjybg_wrapleft> img{
    width:9rem;
    }
    .zjybg_wrapbigtext{
      font-size: 2rem;
    }
    .Czjybg_wrapbigtext {
    font-size: 2rem;
    }
}

/*iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){

  #swiper {height:200px;}
  #bigData {padding:20px;}
  #bigData .bigData-title {font-size:20px;}
  #bigData .bigData-device {font-size:20px;margin:10px 0 10px;}
  #contactUs {height:200px;transition:all ease 0.6s;}
  #contactUs .contactUs-container {padding-top:0;}
  #contactUs .contactUs-container h1 {font-size:25px;}
  #contactUs .contactUs-container h3 {font-size:18px;}
  #contactUs .contactUs-container button {width:200px;height:30px;margin-top:20px;}
  #contactUs .contactUs-container .contactUs-contactWay span {display:inline-block;width:28px;height:28px;margin:10px;}
  #customer {padding:30px 0;box-sizing:border-box;background:#fff;}
  #customer .customer-title {font-size:16px;font-weight:bold;}
  #customer .customer-logo img {/* width:48px;height:48px;*/}
  #customer .customer-block {padding:30px;}
  #customer .customer-block > div {padding:30px 0;}
  #whyChooseUs {padding:20px 0;transition:all ease 0.6s;}
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {font-size:20px;font-weight:700;}
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {font-size:12px;}
  #whyChooseUs .server-block {padding:50px 0;border:1px solid #ccc;/* border-bottom:5px solid #ccc;*/}
  #whyChooseUs .server-block img {width:48px;height:48px;}
  #whyChooseUs .server-block > p {font-size:20px;margin:30px 0;}
  #whyChooseUs .server-block > div {color:#ccc;}
  #VRARZH {margin-top:2rem;font-size:2rem;}
  .en {font-size:2rem;}
  .c_wrap_container {padding:0;}
  .padding_100 {padding:10px 30px;}
  .flex_wrap {padding:2rem;}

  .flex_wrap .flex_item {width: 100%;}
  #HomePage .row{margin-right:0; margin-left:0;}
  #HomePage .c_three{
    width:100%;    padding: 2rem;
  }
  #HomePage .flex_wrap .flex_item{
    width: 100%;
  }
  #HomePage .flex_wrap .flex_item:nth-child(2n){  
    margin-bottom:6rem;
  }
  #HomePage .c_three >.right {
    width: 100%;
    position: relative;
    right:0;
    }
    #HomePage .en:before {
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
    .zjybg_wrapleft > img{
    width:9rem;
    }
    .Czjybg_wrapleft> img{
    width:9rem;
    }
    .zjybg_wrapbigtext{
      font-size: 2rem;
    }
    .Czjybg_wrapbigtext {
    font-size: 2rem;
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
  .flex_wrap {
    padding: 0;
  }
  .zjybg_wrapitem {
    width: 100%;
  }
  .Czjybg_wrapitem {
    margin: 0;
    width: 100%;
    margin-top: 96px;
  }
  .flex_wrap .flex_item {
    width: 100%;
    padding: 50px;
  }
  .text_center {
    padding: 10px 50px;
  }
}
</style>