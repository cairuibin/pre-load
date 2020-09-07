<template>
  <div class="wrap212">
    <div class="img_qiyezixun container">
      <img src="../assets/cimg/qiyezixun/qiyetitle.jpg" alt="">
    </div>
    <div class="container wrap" v-for="(v,i) in curArr" :key="i">
      <div class="row">
        <div class="col-md-5">
          <img width="100%" :src="v.img" alt />
        </div>
        <div class="col-md-7 ml30">
          <div class="title">{{v.title}}</div>
          <img class="m_img" width="85px" src="../assets/cimg/red_bottom.png" alt />
          <div class="content" v-for="(m,n) in v.text" :key="n">{{m.t}}</div>
          <div class="button">
            <img class="red_button" @click="godetail(v)" src="../assets/cimg/lcmore.jpg" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div class="footer_page">
      <span @click="pre" :style="{fontFamily:'宋体',fontWeight:'bolder'}">&lt;</span>
      <span
        v-for="(v,i) in Math.ceil(qiyezixun_itemlist.length/pageSize)"
        :key="i"
        :class="i+1===pageNum?'actives':''"
        @click="clikitem(i)"
      >{{i+1}}</span>
      <span @click="next" :style="{fontFamily:'宋体',fontWeight:'bolder'}">&gt;</span>
    </div>
    <div class="goback">
      <img  @click="goback" src="../assets/cimg/goback.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 8,
    };
  },
  props: ["i", "pid"],
  computed: {
    ...mapState(["qiyezixun_itemlist"]),

    curArr() {
      return this.qiyezixun_itemlist.slice(
        (this.pageNum - 1) * this.pageSize,
        this.pageNum * this.pageSize
      );
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
    godetail(v) {
      
      window.sessionStorage.setItem('qiyezixundetailfor',JSON.stringify(v))
      this.GoTop();
      this.$router.push(`qiyezixundetailfor/`);
    },
    goback(){
      this.GoTop();
      this.$router.back(-1)
    },
    next() {
      console.log(this.pageNum, Math.ceil(this.qiyezixun_itemlist.length / this.pageSize))
      if (
        this.pageNum < Math.ceil(this.qiyezixun_itemlist.length / this.pageSize)
      ) {
        this.pageNum = ++this.pageNum;
      } else {
        this.pageNum = 1;
      }
    },
    pre() {
      if (
        this.pageNum >1
      ) {
        this.pageNum = --this.pageNum;
      } else {
        this.pageNum = Math.ceil(
          this.qiyezixun_itemlist.length / this.pageSize
        );
      }
    },
    clikitem(i) {
      if (i < Math.ceil(this.qiyezixun_itemlist.length / this.pageSize)) {
        this.pageNum = i + 1;
      }
    },
  },
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
  cursor: pointer;
  margin-top: 4%;
}
.red_button {
  max-width: 140px;
}
.footer_page {
  text-align: center;
  margin-bottom: 3%;
}
.footer_page > span {
  text-align: center;
  line-height: 40px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #eee;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid transparent;cursor: pointer;
  color: #888888;font-size: 16px;
}
.footer_page > span:hover {
  border-color: #e81f17;
}
.footer_page > span.actives{
  background: #e81f17;
  color: #fff;
}
.img_qiyezixun{
margin-top: 5%;
margin-bottom: 5%;
}
.goback{
  text-align: center;margin-bottom: 5%;
}
.goback>img{
  display: inline-block;
}

/* 媒体查询（手机） iphone6 */
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .img_qiyezixun  img{
    height: 6rem;
  }
  .container .title{
    font-size: 1.8rem;
  }
  .red_button {
    max-width: 10rem;
  }
  .goback>img {
    height:4rem;
  }
  .wrap212{
	  margin-left: 1rem;
    margin-right: 1rem;
  }
  .ml30 {
    margin-top: 10px;
  }
  .content {
  font-size: 14px;
  }
}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width: 414px) and (max-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .img_qiyezixun  img{
    height: 6rem;
  }
  .container .title{
    font-size: 1.8rem;
  }
  .red_button {
    max-width: 10rem;
  }
  .goback>img {
    height:4rem;
  }
  .wrap212{
	  margin-left: 1rem;
    margin-right: 1rem;
	}
  .ml30 {
    margin-top: 10px;
  }
  .content {
  font-size: 14px;
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