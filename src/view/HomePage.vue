<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in HomeSwiperList" :key="index">
            
            <!-- <img class="swiper-lazy" :data-src="item.img" alt="轮播图" /> -->
            <div v-if="winWith">
              <img class="swiper-lazy" :data-src="item.img02" id="123456789" alt="轮播图" />
            </div>
            <div v-else>
              <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            </div>

            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{item.title}}</h1>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->
      </div>
    </div>
    <div class="position_bottom">
      <div id="jituanjianjie" class="c_h2" style="color: rgb(70, 70, 70);">集团简介</div>
      <div class="en">Group Profile</div>
    </div>
    <div id="bigData" class="container-fuild" style="position: relative;">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn padding_cc">
          <img class="img-responsive min_height_460 ipad_img_100" src="@/assets/cimg/img1.jpg" alt />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 padding_cc">
          <p
            class="home_pz"
          >&emsp;&emsp;中教云控股集团有限公司（简称“中教云集团”或“中教云”）成立于2016年，总部位于北京市海淀区中关村，是一家以VR/AR/MR教育应用、5G、教育大数据、教育云计算、教育物联网、人工智能、知识技术等高精尖技术为引擎，助力中国教育现代化2035中长期战略规划，引领信息化时代教育变革、重塑智慧教育新业态的综合性教育科技集团。集团下属中教云迪数字科技有限公司、也未艾教育科技有限公司、中教云智数字科技有限公司、中教云教育科技有限公司四家教育业务子公司。目前，集团旗下产品遍及全国20多个省市（自治区），覆盖700多所中小学、职业院校、高等院校，服务全国师生超过千万。</p>
          <div style="text-align: center;" class="red_button_wrap">
            <img
              class="red_button"
              src="../assets/cimg/red_btn.jpg"
              @click="GOto('/contactus',1,'关于我们')"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div id="left_right">
      <div class="img_w">
        <img src="../assets/cimg/product1.jpg" alt />
        <img
          @click="GOto('/servicedetail',3,'产品&f服务')"
          style="cursor: pointer;"
          src="../assets/cimg/product2.jpg"
          alt
        />
      </div>
      <div class="img_w">
        <img src="../assets/cimg/product3.jpg" alt />
        <img
          @click="GOto('/servicedetail',3,'产品&f服务')"
          style="cursor: pointer;"
          src="../assets/cimg/product4.jpg"
          alt
        />
      </div>
      <div class="img_w">
        <img src="../assets/cimg/product5.jpg" alt />
        <img
          @click="GOto('/servicedetail',3,'产品&f服务')"
          style="cursor: pointer;"
          src="../assets/cimg/product6.jpg"
          alt
        />
      </div>
      <div class="img_w">
        <img src="../assets/cimg/product7.jpg" alt />
        <img
          @click="GOto('/servicedetail',3,'产品&f服务')"
          style="cursor: pointer;"
          src="../assets/cimg/product8.jpg"
          alt
        />
      </div>
    </div>
    <div class="newsbg">
      <div id="xinwenzixun" class="c_h2_news">新闻资讯</div>
      <div class="en">News Information</div>
      <div class="row c_88">
        <div class="col-sm-12 col-md-4 " v-for="v in NEWSLIST3" :key="v.title2">
          <div class="thumbnail">
            <img :src="v.img" class="mb_img" alt="..." />
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
          <img
            class="red_button mt0"
            src="../assets/cimg/red_btn.jpg"
            @click="GOto('/NewsInformation',2,'新闻动态')"
            alt
          />
        </div>
      </div>
    </div>
    <div class="c_ying_yongbg">
      <div id="yingyongshili" class="c_ying_yong">应用实例</div>
      <div class="en">Examples of Application</div>
      <div class="container c_wrap_container">
        <div class="row CompanyIntroduction-container">
          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn padding_100">
            <img
              class="img-responsive center-block ipad_img_100 width100"
              src="@/assets/cimg/y1.jpg"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 padding_100">
            <div class="div_center div_bottom_border">
              <span>天津市第四中学</span>
            </div>
            <div class="kc_i">
              <img src="../assets/cimg/yicon.jpg" alt />
              <span>课程名称：</span>
              <span>《热机》初中物理</span>
            </div>
            <div class="kc_i">
              <img src="../assets/cimg/yicon.jpg" alt />
              <span>获奖情况：</span>
              <span>荣获2018年第十一届全国新技术新媒体大赛一等奖</span>
            </div>
            <div class="kc_i kc_i_left">
              <img src="../assets/cimg/yicon.jpg" alt />
              <span class="xue_xi_zhe">学习者分析：</span>
              <span>对于初中生来说了解发动机的内部构造，从原理上理解还比较容易。但涉及到生活中真实的发动机就比较困难了，利用虚拟现实就可以比较好的解决这个问题。</span>
            </div>
            <div style="text-align: center;" class="red_button_wrap">
              <img
                class="red_button"
                src="../assets/cimg/red_btn.jpg"
                @click="GOto('/companyintroduction',5,'应用实例')"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container c_wrap_container">
        <div class="row CompanyIntroduction-container">
          <div class="col-xs-12 col-sm-12 col-md-6 padding_100">
            <div class="div_center div_bottom_border">
              <span>甘肃卫生职业学院</span>
            </div>
            <div
              class="c_text"
            >甘肃卫生职业学院虚拟现实创新教学实验中心打破传统的教育模式，采用“教育信息化2.0”的先进教学理念，借助信息化助推教育教学改革，以院校专业建设、人才培养为核心，探索复合型技术技能型人才培养新模式，助力院校高水平建设，实现教育教学高质量发展。</div>
            <div style="text-align: center;" class="red_button_wrap">
              <img
                class="red_button"
                src="../assets/cimg/red_btn.jpg"
                @click="GOto('/companyintroduction',5,'应用实例')"
                alt
              />
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn padding_100">
            <img
              @click="playto"
              class="img-responsive center-block ipad_img_100 width100"
              src="@/assets/cimg/y2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="module none" id="module">
      <!-- <video
        id="homeplay"
        class="img-responsive center-block ipad_img_100 width100"
        src="https://ts.zjyve.com/public_resource/80cdfbf9b54f441d940ba986d0a83d90"
        controls
      ></video> -->
      <video
        id="homeplay"
        class="img-responsive center-block ipad_img_100 width100"
        src="@/assets/video/80cdfbf9b54f441d940ba986d0a83d90.mp4"
        controls
      ></video>
      <button class="closemodule" @click="closemodule">关闭</button>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState(["HomeSwiperList", "HomeServerList", "NEWSLIST3"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_INDEX"]),
    GOto(path, i, name) {
      console.log(path, i, name);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.navIndex = i;
      sessionStorage.setItem("navIndex", i);
      this.$router.push(path);
      this.SET_ACTIVE_INDEX({ index: i, name });
    },
    playto(e) {
      console.log(document.getElementById("module"));
      document.getElementById("module").classList.add("block");
      document.getElementById("module").classList.remove("none");
      document.getElementById("homeplay").play();
    },
    closemodule() {
      document.getElementById("module").classList.remove("block");
      document.getElementById("module").classList.add("none");
      document.getElementById("homeplay").pause();
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
    new Swiper(".banner-swiper", {
      loop: true,
      effect: "fade",

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
  /* height: 805px; */
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

/* 大数据管理系统 */
#bigData {
  /* padding: 220px; */
  padding: 220px 220px 100px 220px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 16px;
  color: rgb(92 92 92);

  line-height: 37px;
  text-align: justify;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
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
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 5px;
  margin-top: 120px;
}

.c_ying_yongbg {
  background: url(../assets/cimg/c_ying_yongbg.jpg) no-repeat center center;

  background-size: 106% 100%;
}

.c_ying_yong {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  /* padding-top: 120px; */
  padding-top: 100px;
  padding-bottom: 10px;
}

.liao_jiemore {
  text-align: center;
  margin: 4vh 0;
}

.c_news_wrap {
  display: flex;
  padding: 100px 100px 0 100px;
  flex-wrap: wrap;
}

.c_news_item {
  height: 300px;
  flex: 1;
  min-width: 400px;
}

.c_news_item:nth-child(2n) {
  margin: 0 6%;
}

.c_wrap_container {
  padding: 0 13%;
  margin: 40px 0;
}

.CompanyIntroduction-container {
  padding: 40px 0;
  color: #808080;
  transition: all ease 0.5s;
  display: flex;
  align-items: center;
}

.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

.padding_100 {
  padding: 30px 80px;
}

.c_88 {
  width: 88%;
  /* margin: 30px auto; */
  margin:90px auto;
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
  height: 3px;
  background: #e81f17;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -64px;
}

.red_button {
  background-color: #e81f17;
  display: inline-block;
  width: 14rem;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 3%;
  font-size: 20px;
}
.mt0 {
  margin-top: 0;
}
#left_right {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px 0;
}

.img_w {
  display: flex;
  flex-wrap: wrap;
  width: 49%;
  /* width: 46%; */
  justify-content: space-around;
  margin-bottom: 31px;
}

.img_w:nth-child(2n + 1) {
  padding-right: 10px;
}

.img_w > img {
  width: 50%;
}

.thumbnail {
  border: none;
}

.caption > p {
  line-height: 24px;
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
  padding-bottom: 12px;
  margin-bottom: 20px;
}

.newsbg {
  background: url(../assets/cimg/newsbg.jpg) no-repeat center center;
  background-size: contain;
  padding-bottom: 50px;
}

.kc_i {
  line-height: 32px;
  text-align: center;
}

.kc_i_left {
  text-align: left;
}

.kc_i > span:nth-child(2) {
  font-weight: bold;
  color: #e81f17;
  font-size: 16px;
}

.kc_i > span:nth-child(3) {
  color: rgb(92, 92, 92);
  font-size: 16px;
}

.kc_i > img {
  display: inline;
  position: relative;
  top: -2px;
  right: 10px;
}

.c_text {
  font-size: 16px;
  line-height: 32px;
  color: rgb(92, 92, 92);
  text-indent: 2em;
  text-align: justify;
  margin: 0 1px;
}

.bigData-container {
  width: 100%;
  margin: 0 auto;
}
.min_height_460 {
  /* min-height: 460px; */
  max-height: 475px;
}
.padding_cc {
  padding: 0 80px;
}
.cc_padding {
  padding: 3.9%;
}
.mb_img {
  margin-bottom: 40px;
  width: 100%;
}
.width100 {
  width: 100%;
}
/* .position {
  position: absolute;
  top: 0;
} */
.position_bottom {
  position: relative;
  top: 70px;
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

  .img_w {
    width: 100%;
  }

  .img_w:nth-child(2n + 1) {
    padding-right: 0px;
  }

  .bigData-container {
    width: 100%;
    margin: 0 auto;
  }
  .cc_padding {
    padding: 30px;
  }
  .cc_padding:nth-child(3) {
    margin-right: 50%;
  }
}

@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){

    #HomePage .en, #HomePage .c_h2, #HomePage .div_center, #HomePage .div_bottom_border > span{
        font-size: 2rem;
    }
    #bigData,#HomePage .c_88 {
    padding: 2rem 3rem;
    }
    #HomePage .c_88 {
    padding: 2rem 3rem;
    margin:0 auto;
    width: 100%;
    }
    #HomePage .thumbnail .caption {
    padding: 0;
    color: #333;
    }
    #HomePage .col-sm-12,#HomePage .col-md-4{
          padding-right: 0;
    padding-left: 0;
    }
    #HomePage .c_wrap_container {
    margin-top: 0;
    }
    #HomePage .padding_100{
    padding: 2rem 0rem;
    }
    #HomePage .CompanyIntroduction-container{
    padding: 0 3rem;
    }
    #HomePage .c_h2_news{
      margin-top:0;
    }
    #HomePage .en::before {
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
    #HomePage .img_w > img{
    width: 100%;
    }
    #HomePage .c_h2_news{
    font-size: 2rem;
    }
    
    #HomePage .position_bottom{
      position: relative;
      top: 0;
      margin-top: 2rem;
    }
    #HomePage .padding_cc {
      padding: 0;
      margin-right: 0;
    }
    #HomePage .cc_padding:nth-child(3) {
    margin-right: 0;
    }

    #HomePage .CompanyIntroduction-container {
      padding: 0 4rem;
      color: #808080;
      -webkit-transition: all ease 0.5s;
      transition: all ease 0.5s;
      display: block;
    }
    #HomePage .kc_i{
      text-align: left;
    }
    #HomePage .newsbg{
      
      padding-bottom: 0;
    }
    #HomePage .padding_100 {
        padding: 2rem;
    }
    #HomePage .c_ying_yong{
        padding-top: 2rem;
        font-size: 2rem;
    }
    #HomePage .c_ying_yongbg {
      background: none;
    }

}
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
#HomePage .en, #HomePage .c_h2{
        font-size: 2rem;
    }

    #HomePage .position_bottom{
      position: relative;
      top: 0;
      margin-top: 2rem;
    }
    #HomePage .padding_cc {
      padding: 0;
      margin-right: 0;
    }
    #HomePage .cc_padding:nth-child(3) {
    margin-right: 0;
    }

    #HomePage .CompanyIntroduction-container {
      padding: 0 3rem;
    }
    #HomePage .kc_i > img {
    right: 0px;
    }
    #HomePage .kc_i{
      text-align: left;
    }
    #HomePage .newsbg{
      
      padding-bottom: 0;
    }
    #HomePage .padding_100 {
        padding: 2rem;
    }
    #HomePage .c_ying_yong{
        padding-top: 2rem;
    }
    #HomePage .c_ying_yongbg {
      background: none;
    }

}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px 10px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  .c_wrap_container {
    padding: 0;
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

  .padding_100 {
    padding: 30px;
  }

  .c_88 {
    width: 100%;
  }                

  .ipad_img_100 {
    width: 100%;
    margin-bottom: 30px;
  }
  .thumbnail > img {
    width: 80%;
  }
}
@media screen and (min-width: 996px) and (max-width: 1445px) {
  #bigData {
    padding: 220px 0;
  }
  .img_w > img{
    width: 50%;
	  height: 95%;
    cursor: pointer;
  }
}
</style>