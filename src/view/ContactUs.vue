<template>
  <div id="HomePage">
    <!-- <div v-if="winWith">只有移动端才可以看到这句话</div> -->
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in contactUsswiperList"
            :key="index"
          >

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
              <p>{{item.content}}</p>-->
            </div>
          </div>

        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>

    <div id="gjituanjianjie" class="c_h2">集团简介</div>
    <div class="en">News Information</div>
    <div id="bigData" class="container-fuild">
      <div class="text_c">
        中教云控股集团有限公司（简称“中教云集团”或“中教云”）成立于2016年，总部位于北京市海淀区中关村，是一家以高科技为引擎，在VR/AR/MR教育应用、5G、教育大数据、教育云计算、教育物联网、人工智能、知识图谱技术等方向上不断深入研究与实践的综合性教育科技集团。集团紧跟中国教育现代化2035中长期战略规划布局，引领信息化时代教育变革、重塑智慧教育新业态。
      </div>
      <div class="text_c">
        集团下属中教云迪数字科技有限公司、也未艾教育科技有限公司、中教云智数字科技有限公司、中教云教育科技集团有限公司四家教育业务子公司。
      </div>
      <div class="text_c">
        中教云集团的主要业务是为各级各类教育行政部门、高等教育学校、职业院校、基础教育学校以及企业提供教育信息化解决方案及软硬件产品，融合前沿科技手段建设智能化校园，搭建一体化智能管理、教学、服务平台。优势产品包括VR/AR智慧校园建设服务、数字课程教材云平台、智能教学服务产品、职业教育体系建设服务等。
      </div>
      <div class="text_c">
        集团核心团队由教育界资深专家及国际知名高校的优秀人才组成，硕士及以上人员占核心人员的45%。在教育政策与管理研究、课堂教学应用研究、教育互联网产品研发以及互联网大平台开发、安全运维管理等方面拥有丰富的研究及实践经验。
      </div>
      <div class="text_c">
        截至2020年，中教云业务及产品已遍及全国20多个省市（自治区），覆盖700多所中小学、职业院校、高等院校，服务全国师生超千万；获得了教育管理者、教师、学生用户的一致认可，使得中教云教育新技术走在了教育信息化发展前列。
      </div>
    </div>

    <div class="pbg">
      <div class="c_ying_yong" id="gpinpailinian">品牌理念</div>
      <div class="en">Brand Concept</div>
      <div class="container c_wrap_container">
        <div class="row CompanyIntroduction-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn pinpailinina">
            <img
              class="img-responsive center-block img_ccc"
              src="@/assets/cimg/p_left.jpg"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 pinpailinina" style>
            <div class="col-xs-12 col-sm-6 col-md-6 mb_30">
              <div class="fz_36">
                引领
                <span class="fz_24">Lead</span>
              </div>
              <div class="fz_18">科技赋能教育，教育引领未来</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb_30">
              <div class="fz_36">
                共享
                <span class="fz_24">Shared</span>
              </div>
              <div class="fz_18">汇聚海量内容，共享优质资源</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb_30">
              <div class="fz_36">
                开放
                <span class="fz_24">Open</span>
              </div>
              <div class="fz_18">重塑教育开放平台，打造终身学习场景</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb_30">
              <div class="fz_36">
                标准
                <span class="fz_24">Standard</span>
              </div>
              <div class="fz_18">教育信息化行业标准的建设者</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb_30">
              <div class="fz_36">
                平等
                <span class="fz_24">Equality</span>
              </div>
              <div class="fz_18">推进教育公平，助力教育强国</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c_yuanjing_bg">
      <div class="c_yuanjing">
        <div class="position_bottom">
          <div class="c_ying_yong" id="gyuanjing" style="color:#fff">愿景</div>
          <div class="en" style="color:#fff">Vision</div>
          <div class="c_yuanjing_sec">重塑教育新业态 引领教育新未来</div>
        </div>
        <div class="container c_wrap_container_yuan_jing">
          <div
            :class="['c_yuan_jing_50', i === 1 ? 'mtccc' : '']"
            v-for="(v, i) in YUANJINGLIST"
            :key="v.title"
          >
            <!-- <div class=""> -->
            <img
              class="img-responsive center-block img_reduce wow zoomIn"
              :src="v.img"
            />
            <div class="img_reduce_div">{{ v.title }}</div>
            <div class=".text-justify img_reduce_div_p">{{ v.content }}</div>
            <div class=".text-justify img_reduce_div_p">{{ v.content1 }}</div>
            <div class=".text-justify img_reduce_div_p">{{ v.content2 }}</div>
            <div class=".text-justify img_reduce_div_p">{{ v.content3 }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="c_ying_yong" id="ghexinjingzheng">核心竞争力</div>
    <div class="en">Core Competitiveness</div>
    <div class="flex_wrap">
      <div class="flex_item" v-for="(v, i) in contactUsHXList" :key="i">
        <div
          v-if="!v.textFlag"
          class="col-xs-12 col-sm-12 col-md-12 wow zoomIn padding_100"
        >
          <img :src="v.img" />
        </div>

        <div
          v-if="v.textFlag"
          class="col-xs-12 col-sm-12 col-md-12 padding_100"
        >
          <div class="flex_title">
            <span class="flex_title_text">{{ v.title }}</span>
          </div>
          <div class="flex_content">{{ v.content }}</div>
        </div>

      </div>
    </div>

    <div class="c_ying_yong" id="ghezuojigou">合作机构</div>
    <div class="en">Cooperation Agency</div>
    <div id="swiper" class="swiper_margin0auto">
      <div class="swiper-container customer-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in HZSwiperList"
            :key="index"
          >
          <div v-if="winWith">
            <img
              class="swiper-lazy"
              style="width:100%"
              :src="item.img02"
              alt="轮播图"
            />
          </div>
          <div v-else>
            <img
              class="swiper-lazy"
              style="width:100%"
              :src="item.img"
              alt="轮播图"
            />
          </div>
            <!-- <img
              class="swiper-lazy"
              style="width:100%"
              :src="item.img"
              alt="轮播图"
            /> -->
            <!-- style="width:100%;margin:0 50px;padding:0 50px"  -->
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev">
          <img class="sbtn" src="../assets/cimg/sbtn.jpg" alt />
        </div>
        <div class="swiper-button-next" style="right:30px">
          <img class="sbtn sbtnr" src="../assets/cimg/sbtnr.jpg" alt />
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
  name: "ContacUS",
  computed: {
    ...mapState([
      "contactUsHXList",
      "contactUsswiperList",
      "HZSwiperList",
      "YUANJINGLIST"
    ])
  },
  data() {
    return {
      winWith:false,
      ismobile:false
    };
  },

  methods:{
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
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    new Swiper(".customer-swiper", {
      loop: true,
      autoplay: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    sessionStorage.setItem("pid", "2");
  }

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

#bigData {
  /* padding: 100px 280px 240px 280px; */
  padding: 100px 280px 0px 280px;
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
  font-weight: bold;
  letter-spacing: 5px;
  margin-top: 160px;
  color: rgb(70, 70, 70);
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
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  margin: 0;
  color: rgb(70, 70, 70);
  padding-top: 150px;
}
/* .c_ying_yong:nth-child(1){
  padding-top:0;
} */

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
  display: flex;
}
.pbg {
  /* background: url(../assets/cimg/pbg.jpg); */
  padding-top: 50px;
}
.CompanyIntroduction-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 170px;

  color: #808080;
  transition: all ease 0.5s;
  display: inline-block;
}

.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

.pinpailinina {
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 440px;
  justify-content: space-between;
  padding-left: 5.1%;
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
  /* min-width: 400px; */
  width: 50%;
}

.img_reduce {
  width: 100px;
  /* height: 100px;
  border-radius: 50%; */
}

.img_reduce_div {
  padding: 10px 3%;
  text-align: center;
  color: #fff;
  font-size: 26px;
}

.img_reduce_div_p {
  padding: 10px 3%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  /* line-height: 13px; */
  line-height: 30px;
}
.c_swiper_wrap {
  width: 80vw;
}
.text_c {
  text-indent: 2em;
  line-height: 37px;
  font-size: 16px;
  color: rgb(92, 92, 92);
  text-align: justify;
  font-family: "微软雅黑";
  letter-spacing: 1px;
}
.en {
  font-size:28px;
  color: rgb(70, 70, 70);
  text-align: center;
  font-family: "微软雅黑";
  font-weight: 100;
  position: relative;
}

.en::before {
  content: "";
  width: 128px;
  height: 3px;
  background: #e81f17;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -64px;
}
.c_yuanjing .en::before {
  content: "";
  width: 0;
}
.fz_36 {
  font-size: 36px;
  color: rgb(70, 70, 70);
  font-weight: bold;
}
.fz_24 {
  font-size: 24px;
  color: #e81f17;
  font-weight: normal;
}
.fz_18 {
  font-size: 18px;
  color: rgb(92, 92, 92);
  font-weight: normal;
}
.mb_30 {
  margin-bottom: 30px;
}
.c_yuanjing_bg {
  background: url("../assets/cimg/yubg.jpg") no-repeat center center;
  background-size: 100% 100%;
  padding-top: 80px;
  padding-bottom: 50px;
}
.c_yuanjing_sec {
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
}
.flex_wrap {
  display: flex;
  padding: 100px 100px 0px 100px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.flex_wrap .flex_item {
  width: 40%;
  display: flex;
  align-items: center;
  margin: 30px 0;
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
  padding-bottom: 20px;
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
  text-align: justify;
  line-height: 34px;
  text-indent: 2em;
  margin-top: 30px;
}
.swiper_margin0auto {
  margin: 0px auto;
  margin-top: 130px;
  margin-bottom: 200px;
  width: 61%;
}
.sbtn {
  position: relative;
  right: 10px;
}
.img_ccc {
  width: 80%;
}
.mtccc {
  margin-top: 27px;
}
.position_bottom {
  position: relative;
  bottom: 89px;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
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
  .c_wrap_container {
    padding: 0;
  }

  .c_h2 {
    margin-top: 5vh;
  }

  .padding_100 {
    padding: 20px;
  }
  .c_yuanjing {
    /* height: 500px; */
    border: 1px solid #000;
    width: 80%;
    padding: 50px 100px;
    margin: 10px auto;
  }
  .c_yuanjing {
    width: 100%;
    padding: 30px 0px;
    margin: 50px auto;
  }
  .c_wrap_container_yuan_jing {
    justify-content: space-around;
  }
  .c_yuan_jing_50 {
    padding: 50px;
  }
  .c_ying_yong {
    margin-top: 5vh;
  }
  .c_yuanjing {
    margin: -40px 0;
  }
}
/* 媒体查询（手机） iphone6 */
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .position_bottom .en,
  .c_h2,
  .c_ying_yong {
    font-size: 2rem;
  }
  .fz_36 {
    font-size: 2rem;
  }
  .fz_24 {
    font-size: 1.5rem;
  }
  .fz_18 {
    font-size: 1.5rem;
  }
  .c_yuanjing_sec {
    font-size: 2rem;
  }
  .c_ying_yong {
    margin-top: 2rem;
    padding-top: 0;
  }
  .c_yuan_jing_50 {
    padding: 2rem 1rem;
    width: 100%;
  }
  .img_reduce_div_p {
    line-height: 2rem;
  }
  .c_yuanjing_bg {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .CompanyIntroduction-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .pinpailinina {
    min-height: 10rem;
  }
  .c_yuanjing {
    width: 100%;
    padding: 3rem 2rem;
    margin: 2rem auto;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }

  .c_yuan_jing_50[data-v-8e2a9426] {
    padding: 2rem;
    /* min-width: 400px; */
    width: 100%;
  }
  .img_reduce_div_p[data-v-8e2a9426] {
    padding: 10px 3%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 2.5rem;
  }

  .flex_wrap {
    padding: 2rem;
    display: block;
  }

  .flex_wrap .flex_item {
    width: 100%;
    margin: 0;
  }
  .flex_wrap .flex_item:nth-child(2n){  
    margin-bottom:4rem;
  }

  .en {
    font-size: 2rem;
    font-family: "微软雅黑";
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
  .flex_wrap .col-md-2 {
    width: 50%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .c_yuanjing_bg{
    background: url(../assets/cimg/yubg_m.jpg) no-repeat center center;
    background-size: 100% 100%;
    padding-top: 80px;
    padding-bottom: 50px;
  }
    .c_yuanjing{
    background: none;
    width: 100%;
    padding: 3rem 2rem;
    margin: 2rem auto;
    border:none;
    }
    #HomePage .swiper_margin0auto{
    margin: 3rem auto;
    width:90%;
    }
    #HomePage .swiper-slide{width:100%;}
    #HomePage #swiper {
    height: auto;
    }
    #HomePage .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -3px;

    }
    #HomePage .img_ccc {
    width: 90%;
    }
    .flex_title_text{
      font-size: 2rem;
    }
    .img_reduce_div {
      font-size: 2rem;
    }
}
/* 媒体查询（手机） iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
    .position_bottom .en, .c_h2, .c_ying_yong{
        font-size: 2rem;
    }
    .fz_36{
      font-size: 2rem;
    }
    .fz_24{
      font-size: 1.5rem;
    }
    .fz_18{
      font-size: 1.5rem;
    }
      .c_yuanjing_bg{
        padding-top:5rem;
        padding-bottom:2rem;
      }
    .c_yuanjing{
    background: none;
    width: 100%;
    padding: 3rem 2rem;
    margin: 2rem auto;
    border:none;
    }
    .CompanyIntroduction-container{
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .CompanyIntroduction-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0 auto;
  }
  .pinpailinina {
    min-height: 10rem;
    
  }

  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .c_yuan_jing_50 {
    padding: 2rem;
    /* min-width: 400px; */
    width: 100%;
  }
  .img_reduce_div_p {
    padding: 10px 3%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 2.5rem;
  }

  .flex_wrap {
    padding: 2rem;
    display: block;
  }

  .flex_wrap .flex_item {
    width: 100%;
    display: flex;
    margin: 0;
  }
  .flex_wrap .flex_item:nth-child(2n){  
    margin-bottom:4rem;
  }
  .en {
    font-size: 2rem;
    font-family: "微软雅黑";
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
  .flex_wrap .col-md-2 {
    width: 50%;
  }

    #HomePage .swiper_margin0auto{
    margin: 3rem auto;
    width:90%;
    }
    #HomePage .swiper-slide{width:100%;}
    #HomePage #swiper {
    height: auto;
    }
    #HomePage .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -3px;

    }
    #HomePage .img_ccc {
    width: 90%;
    }
    #HomePage .col-xs-12 .col-sm-6 .col-md-6{
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .flex_title_text{
      font-size: 2rem;
    }
    .img_reduce_div {
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
    padding: 0;
  }
  .c_yuanjing {
    width: 100%;
    padding: 30px 0px;
    margin: 50px auto;
  }
  .c_yuan_jing_50 {
    padding: 50px 0px;
    min-width: 35%;
    width: 49%;
  }
  .img_reduce_p {
    margin-top: 10px;
  }
  .padding_100 {
    padding: 30px;
  }
  .c_ying_yong {
    margin: 0;
  }
  .c_h2 {
    margin-top: 5vh;
  }
  .c_yuan_jing_50 {
    width: 80%;
  }
  .flex_wrap .flex_item {
    display:flex;
    width: 100%;
  }
  .swiper_margin0auto {
    margin: 3rem auto;
    width: 90%;
  }
}
@media screen and (max-width: 751px) {
  .pbg {
    padding-top: 0px;
  }
}
</style>
