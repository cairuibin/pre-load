<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in YINGswiperList" :key="index">
            
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

    <div class="c_h2" id="K12">K12</div>

    <div class="row c_88">
      <div class="col-sm-12 col-md-6" v-for="v in K12" :key="v.name">
        <div class="thumbnail">
          <img class="c_img" :src="v.img" alt="..." />

          <div class="c_text">
            <div class="text_item">
              <span class="red">课程名称：</span>
              {{v.name}}
            </div>
            <div class="text_item">
              <span class="red">获奖情况：</span>
              {{v.title}}
            </div>
            <div class="text_item">
              <span class="red">学习者分析：</span>
              {{v.desc}}
            </div>
            <div class="text_item">
              <span class="red" style="font-weight: bolder;">教师反馈：</span>
              {{v.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="liao">
      <img class="red_button" @click="goDetail('k12')" src="../assets/cimg/red_btn.jpg" alt="..." />
    </div>
    <div class="c_h2" id="ZHIYEJIAOYU">职业教育</div>
    <div class="en">Vocational Colleges</div>
    <div class="row c_88">
      <div class="col-sm-12 col-md-6" v-for="v in ZHIYE" :key="v.title">
        <div class="thumbnail">
          <img class="c_img" :src="v.img" alt="..." />

          <div class="c_text c_text_z">
            <div class="text_item red_bottom">&emsp;&emsp;{{v.content}}</div>

            <div class="text_item">
              <div class="vforitem" v-for="m in v.desc" :key="m.title">
                <span class="red">•</span>
                {{m.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="liao">
      <img class="red_button" @click="goDetail('zhiye')" src="../assets/cimg/red_btn.jpg" alt="..." />
    </div>
    <div class="c_h2" id="GAODENGJIAOYU">高等院校</div>
    <div class="en">Institutions Of Heigher Learning</div>
    <div class="row c_88">
      <div class="col-sm-12 col-md-6" v-for="v in GAODENG" :key="v.title">
        <div class="thumbnail">
          <img class="c_img" :src="v.img" alt="..." />

          <div class="c_text">
            <div class="text_item">
              <div class="vforitem" v-for="m in v.desc" :key="m.title">&emsp;&emsp;{{m.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="liao margin">
      <img
        class="red_button"
        @click="goDetail('gaodeng')"
        src="../assets/cimg/red_btn.jpg"
        alt="..."
      />
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { mapState } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState(["YINGswiperList", "K12", "ZHIYE", "GAODENG"]),
  },

  data() {
    return {
      winWith:false,
      ismobile:false
    };
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
    goDetail(e) {
      this.GoTop()
      if (e === "k12") {
        window.sessionStorage.setItem('pid','1')
        this.$router.push("/companyintroduction_detail/1");
        
      } else if (e === "zhiye") {
         window.sessionStorage.setItem('pid','2')
        this.$router.push("/companyintroduction_detail/2");
      } else if (e === "gaodeng") {
         window.sessionStorage.setItem('pid','3')
        this.$router.push("/companyintroduction_detail/3");
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

.c_three {
  padding: 50px 100px;
}

.c_three_item {
  padding: 8%;
}

.thumbnail {
  border: none;
  padding: 50px 16%;
}
.c_88 {
  width: 100%;
  margin: 50px auto;
  padding: 0 50px;
}
.c_88 .thumbnail img {
  width: 100%;
}
.c_text {
  width: 100%;
  margin: 0 auto;
}
.red {
  color: #e81f17;
  font-size: 20px;
  font-weight: bold;
}
.text_item {
  font-size: 16px;
  color: rgb(92, 92, 92);
  line-height: 32px;
}
.c_img {
  margin-bottom: 30px;
}
.en {
  font-size: 28px;
  color: rgb(92, 92, 92);
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
#K12 {
  position: relative;
  margin: 100px 0;
}
#K12::before {
  content: "";
  width: 128px;
  height: 3px;
  background: #e81f17;
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -64px;
}
.red_bottom {
  border-bottom: 3px solid #e81f17;
  min-height: 141px;
  margin: 20px 0;
}
.c_text_z .text_item {
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
}
.vforitem {
  font-size: 15px;
  min-width: 33.3%;
  line-height: 30px;
  text-align: justify;
}
.liao {
  text-align: center;
}
.red_button {
  display: inline-block;
  cursor: pointer;
}
.margin{
  margin: 5%;
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
    margin-top: 5vh;
  }
  .c_wrap_container {
    padding: 0;
  }
  .padding_100 {
    padding: 30px;
  }
}

/* 媒体查询（手机） iphone6*/
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
  #HomePage #k12 ,#HomePage .c_h2{
    font-size: 2rem;
  }
  .flex_wrap {

    display: block;
    padding: 2rem;

    }
    #K12{
    margin: 2rem 0;
    }
    #K12:before,.en:before {
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
    .c_h2 {
    text-align: center;
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: 5px;
    margin-top: 2rem;
    }
    #HomePage .c_88 {
    width: 100%;
    margin: 2rem auto;
    padding: 0 1.5rem;
    }
    .thumbnail {
    border: none;
    padding: 2rem 0rem;
    }
    .en{
    font-size: 2rem;

    }
    .red_button{
    width: 12rem;

    }
    .red_bottom {
    padding-bottom: 2rem;
    }

    .col-sm-12, .col-md-6{
      padding-right: 0;
      padding-left: 0;
    }
}
/* 媒体查询（手机） iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
  #HomePage #k12 ,#HomePage .c_h2{
    font-size: 2rem;
  }
    .flex_wrap {

    display: block;
    padding: 2rem;

    }
    #K12{
    margin: 2rem 0;
    
    }
    #K12:before,.en:before {
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
    .c_h2 {
    text-align: center;
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: 5px;
    margin-top: 2rem;
    }
    #HomePage .c_88 {
    width: 100%;
    margin: 2rem auto;
    padding: 0 1.5rem;
    }
    .thumbnail {
    border: none;
    padding: 2rem 2rem;
    }
    .en{
    font-size: 2rem;

    }
    .red_button{
    width: 12rem;
    }
    .red_bottom {
    padding-bottom: 2rem;
    }
    .col-sm-12, .col-md-6{
      padding-right: 0;
      padding-left: 0;
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
  .c_h2 {
    margin-top: 5vh;
  }
  .c_wrap_container {
    padding: 0;
  }
  .padding_100 {
    padding: 30px;
  }
  .thumbnail {
    padding: 50px;
  }
  .c_text_z .text_item {
  justify-content: space-between;
}
}
</style>