<template>
  <div class="container wrap">
    <div class="row">
      <div class="col-md-5">

        <img width="100%" :src="i.img" alt />
      </div>
      <div class="col-md-7 ml30">
        <div class="title">{{i.title}}</div>
        <img class="m_img" width="85px" src="../assets/cimg/red_bottom.png" alt />
        <div
          class="content"
        >
        {{i.text[0].t}}
        </div>
        <div class="button">
          <img class="red_button"  @click="godetail(i)" src="../assets/cimg/lcmore.jpg" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ['i'],
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
    godetail(id){
      this.GoTop()
      this.$router.push(`/detailnews/`)
      window.sessionStorage.setItem('i',JSON.stringify(id))
    }
  }
};
</script>

<style scoped >
.wrap {
  margin-bottom: 4.3%;
  /* width: 78%; */
}
.ml30 {
  padding-left: 5%;
}
.title {
  font-size: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content {
  font-size: 16px;
  text-align: justify;
  line-height: 30px;
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 30px;
}
.m_img {
  margin-top: 3%;
  margin-bottom: 3%;
}
.button {
  margin-top: 4%;
}
.red_button {
  max-width: 140px;
  cursor: pointer;
}

/* 媒体查询（手机） iphone6 */
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .container .title{
    font-size:2rem;
  }
  .container .red_button{
    max-width: 10rem;
  }
    .container .gobtn > img{
    display: inline-block;
    width: 10rem;
  }

}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width: 414px) and (max-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .container .title{
    font-size:2rem;
  }
  .container .red_button {
    max-width: 10rem;
  }
    .container .gobtn > img {
    display: inline-block;
    width: 10rem;
  }
  
}

@media screen and (min-width: 1100px) and (max-width: 1200px) {
  .red_button {
    margin-top: 1%;
  }
  .m_img {
    margin-top: 1%;
    margin-bottom: 1%;
  }
  
}
@media screen and (min-width: 900px) and (max-width: 1099px) {
  .content {
    overflow: hidden;
  }
  .m_img {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .content {
    line-height: 26px;
  }
  .button {
    padding-top: 0;
  }
}
</style>