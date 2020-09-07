<template>
  <div class="container">
    <!-- {{i}} -->
    <div class="title"><span>{{i.title}}</span></div>
    <div class="img">
      <img src="../assets/cimg/red_bottom.png" alt />
    </div>
    <div class="date">
      <span>2020-08-01</span>
      <span>来源：中国教育报</span>
    </div>
    <div
      class="text"
    >{{i.textdetail[0].t}}</div>
    <div class="img_big">
      <img width="100%" :src='i.img' alt />
    </div>
    <div
      class="text"
      v-for="(m,n) in i.textdetail.slice(1)" :key="n"
    >
    {{m.t}}
    </div>
        <div class="goback">
          <img @click="goout" src="../assets/cimg/goback.jpg" alt="">
        </div>
  </div>
</template>

<script>
export default {
  computed:{
i:function(){
  return JSON.parse( window.sessionStorage.getItem('i'))
}
  },
  created(){
    console.log(this.i,'233333333333333333')
  },
  methods:{
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

    goout(){
      this.GoTop();
      this.$router.back(-1)
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 35px;
  font-weight: bold;margin-top: 5%;padding-bottom: 2%;
}
.img{
  text-align: center;
}
.img>img{
  display: inline-block;
  width: 30%;
  height: 8px;
}
.img_big{
  margin: 6% 0;
}
.date{
  text-align: center;line-height: 45px;
}
.date>span{

}
.text{
  line-height: 27px;text-align: justify;text-indent: 2em;
  font-size: 16px;
  line-height: 37px;
}
.text:last-child{
  margin-bottom: 100px;
}
.goback{
  text-align: center;margin: 5%;
}
.goback>img{
  display: inline-block;
  cursor: pointer;
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
  .title{
    font-size:2rem;
  }
  .goback>img {
    height:4rem;
  }
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  .goback img{
    width: 12rem;
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
  .title{
    font-size:2rem;
  }
  .title > span::before {
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
  .goback>img {
    height:4rem;
  }
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  .goback img{
    width: 12rem;
  }
}
</style>