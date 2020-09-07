<template>
  <div class="container">
    <template v-if="!item.k12_not_flg">
      <div class="title">
        <span>{{item.title}}</span>
      </div>
      <div class="main row">
        <div class="top row">
          <div class="left col-md-9">
            <img width="100%" :src="item.img" alt />
          </div>
          <div class="right col-md-3">
            <div class="tname">课程名称</div>
            <div class="ctxt">{{item.resourceNmae}}</div>
            <div class="huo_jiang">获奖情况</div>
            <div class="bottom">{{item.huo_jiang}}</div>
          </div>
        </div>
        <div class="center row">
          <div class="left col-md-7">
            <div class="name">教学目标</div>

            <div class="ul">
              <li v-for="v in item.jiao_xue_mu" :key="v.desc">{{v.desc}}</li>
            </div>
            <div class="xuexi">学习者分析</div>
            <div class="text" v-for="(v ,i) in item['xue_xi_fen']" :key="i">{{v.t}}</div>
          </div>
          <div class="right col-md-5">
            <div class="name">教学重难点分析及解决措施</div>
            <div class="zhong" v-for="(v,i) in item.im" :key="i">{{v.t}}</div>
            <div class="zhong">{{item.nan}}</div>
            <div class="zhong" v-for="(v) in item.df" :key="v.t">{{v.t}}</div>
            <!-- <div class="zhong">3、利用虚拟现实设备了解真实发动机构造及工作过程。</div> -->
          </div>
        </div>
        <div class="bottom row">
          <div class="left col-md-7">
            <div class="fan_kui">教师反馈</div>
            <div class="text" v-for="(v,i) in item.jiao_shi_fan" :key="i">{{v.t}}</div>
          </div>
          <div class="right col-md-5">
            <img width="100%" :src="item.simg" alt />
          </div>
        </div>
      </div>
      <div class="gobtn">
        <img @click="goback" src="../assets/cimg/goback.jpg" alt />
      </div>
    </template>
    <template v-if="item.k12_not_flg">
      <div class="container">
        <div class="title">
          <span>{{item.title}}</span>
        </div>

        <div class="text" v-for="(m) in item.detailFtext.slice(0,1)" :key="m.t">{{m.t}}</div>
        <div class="img_big">
          <img width="100%" :src="item.img" alt />
        </div>
        <div class="text" v-for="(m,n) in item.detailFtext.slice(1)" :key="n">{{m.t}}</div>
        <div class="gobtn">
             
        <img @click="goback" src="../assets/cimg/goback.jpg" alt />

        </div>
      </div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        item: {},
      };
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
    goback() {
      this.GoTop();
      this.$router.back(-1);
    },
  },
  beforeCreate() {
    this.item = JSON.parse(window.sessionStorage.getItem("i"));
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.gobtn {
  text-align: center;
  padding: 5%;
}
.gobtn > img {
  display: inline-block;
  cursor: pointer;
}
.title {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 8%;
  margin-bottom: 7%;
  position: relative;
}
.main {
  color: #fff;
  font-size: 16px;
  overflow: hidden;
}
.title > span {
  position: relative;
  display: inline-block;
  padding: 0 20px;
}
.title > span::before {
  content: "";
  width: 100%;
  height: 8px;
  position: absolute;
  bottom: -44%;
  left: -2px;
  display: block;
  background: #e62017;
  /* left: 50%; */
}
.center > .left {
  height: 621px;
}

.top > .right {
  background: #5a5a5a;
  height: 100%;
  /* height: 324px; */
}

.center {
  margin-top: 15px;
  margin-bottom: 15px;
}
.center > .left,
.center > .right,
.bottom > .left {
  background: #c3c3c3;
}
.top > .right {
  padding: 4.5%;
  position: relative;
}
.top > .right::before {
  content: "";
  display: block;
  width: 100%;
  height: 22px;
  background: #e81f17;
  position: absolute;
  bottom: -22px;
  left: 0;
}
.top > .right > .tname {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
}
.top > .right > .tname > .ctxt {
  line-height: 40px;
}
.top > .right > .huo_jiang {
  margin-top: 55%;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
}
.center > .left {
  padding: 5%;
}
.center > .right {
  padding: 3.9%;
  height: 621px;
  position: relative;
}
.center > .right::before {
  content: "";
  height: 100%;
  width: 15px;
  position: absolute;
  top: 0;
  left: -2px;
  display: block;
  background: #fff;
}
.center > .left > .name {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
}
.center > .left > .xuexi {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 15px;
}
.center > .left > .ul {
  line-height: 40px;
}
.center > .left > .text {
  line-height: 40px;
}
.center > .right > .name {
  font-size: 20px;
  font-weight: bold;
  padding: 5%;
}
.center > .right > .zhong {
  line-height: 40px;
}
.bottom > .left {
  padding: 5%;
  height: 420px;
}
.bottom > .left::before {
  content: "";
  display: block;
  width: 100%;
  height: 20px;
  background: #e81f17;
  position: absolute;
  bottom: 0;
  left: 0;
}
.bottom > .left > .fan_kui {
  font-size: 20px;
  padding-bottom: 15px;
  font-weight: bolder;
}
.bottom > .left > .text {
  line-height: 40px;
}
.text {
  font-size: 16px;
  line-height: 37px;
  text-indent: 2em;
  text-align: justify;
}
.text:last-child {
  margin-bottom: 5%;
}
.img_big {
  margin: 5%;
}
@media screen and (min-width: 1199px) {
  .top > .right {
    background: #5a5a5a;
    height: 391px;
  }
}
@media screen and (min-width: 770px) and (max-width: 991px) {
  .top > .left {
    margin-bottom: 2%;
  }
  .top > .right {
    margin-bottom: 3%;
  }
  .center > .left {
    margin-bottom: 2%;
    height: auto;
  }
  .bottom > .left {
    margin-bottom: 2%;
    height: auto;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .top > .right {
    background: #5a5a5a;
    height: 324px;
  }

  .top > .right > .huo_jiang {
    margin-top: 45%;
  }
  .center > .right {
    height: 621px;
  }
  .bottom > .left {
    padding: 3.2%;
    height: 341px;
  }
}
@media screen and (min-width: 768px) and (max-width: 996px) {
  .top > .right > .huo_jiang {
    margin-top: 5%;
  }
  .center > .right > .name {
    padding-top: 0;
  }
  .center > .right > .name {
    padding-left: 0;
    padding-top: 0;
  }
  .center > .right {
    height: auto;
  }
  .top > .left {
    margin-bottom: 2%;
  }
  .top > .right {
    margin-top: 0;
    margin-bottom: 3%;
  }
  .center > .left {
    margin-bottom: 2%;
    height: auto;
  }
  .bottom > .left {
    margin-bottom: 2%;
    height: auto;
  }
}
@media screen and (min-width: 100px) and (max-width: 767px) {
  .top > .right > .huo_jiang {
    margin-top: 5%;
  }

  .center > .right > .name {
    padding-top: 0;
    padding-left: 0;
  }
  .center > .right {
    height: auto;
  }
  .top > .left {
    margin-bottom: 2%;
  }
  .top > .right {
    margin-bottom: 3%;
  }
  .center > .left {
    margin-bottom: 2%;
    height: auto;
  }
  .bottom > .left {
    margin-bottom: 2%;
    height: auto;
  }
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
  .top > .right {
    padding: 2rem 4rem;
    position: relative;
  }
  .center > .left {
    padding: 2rem 4rem;
  }
  .center > .right {
    padding: 2rem 4rem;
    position: relative;
  }
  .bottom > .left {
    padding: 2rem 4rem;
  }
  .container .gobtn > img{
    display: inline-block;
    width: 10rem;
  }
      .top > .right > .tname, .top > .right > .huo_jiang, .center > .left > .name, .center > .left > .xuexi,.bottom > .left > .fan_kui {
    font-size: 2rem;
  }
}
</style>


