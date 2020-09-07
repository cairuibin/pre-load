<template>
  <div id="header" class="container-fuild">
    <div class="header-nav container hidden-xs">
      <div class="header-nav-logo">
        <img src="@/assets/cimg/logo.jpg" />
      </div>

      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in NAVLIST"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)"
        >
          <router-link :to="item.path">
            {{ item.name }}
            <!-- <span class="glyphicon glyphicon-menu-down"></span> -->
            <i
              class="underline"
              :style="[
                { width: item.name == '首页' ? '0px' : '120px' },
                {
                  left:
                    item.name == '首页'
                      ? '-22px'
                      : item.name === '产品&服务'
                      ? '-20px'
                      : '-26px'
                }
              ]"
            ></i>
          </router-link>

          <dl
            :style="[
              {
                width:
                  item.name == '首页'
                    ? '80px'
                    : item.name === '创新研究'
                    ? '120px'
                    : '120px'
              },
              {
                left:
                  item.name == '首页'
                    ? '-22px'
                    : item.name === '产品&服务'
                    ? '-20px'
                    : '-26px'
              }
            ]"
          >
            <dt
              @click="Goto(i.path, item, index)"
              v-for="(i, n) in item.children"
              :key="n"
            >
              <!-- {{i}} -->
              <a v-if="i.name == '虚拟现实研究中心'">
                {{ i.name.slice(0, 4) }}
                <br />
                {{ i.name.slice(4) }}
              </a>
              <a v-else-if="i.name == '数字课程教材研究中心'">
                {{ i.name.slice(0, 6) }}
                <br />
                {{ i.name.slice(6) }}
              </a>
              <a v-else>{{ i.name }}</a>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <div class="header-nav-two">
      <div class="left-logo">
        <img src="@/assets/cimg/logo.jpg" />
      </div>
      <div class="right-control">
        <span class="my-icon" @click="open">
          <div class="top-icon"></div>
          <div class="middle-icon"></div>
          <div class="bottom-icon"></div>
        </span>
        <span
          @click="close"
          class="glyphicon none glyphicon-remove right_2"
        ></span>
      </div>
    </div>
    <div class="middle-nav">
      <ul>
        <li v-for="(item, index) in NAVLIST" :key="index">
          <div @click="jump(item)">
            <span>{{ item.name }}</span>
            <i v-if="item.children"
              ><img
                @click.stop="changeSel(index, $event)"
                src="//img.kaikeba.com/a/42047141800202klas.png"
                alt=""
            /></i>
          </div>
          <ol class="sel-ol" v-if="item.children">
            <li
              @click="childJump(v.path, item, index)"
              v-for="(v, i) in item.children"
              :key="i"
            >
              {{ v.name }}
            </li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import NAVLIST from "../store/index";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["NAVLIST", "navIndex", "menuName", "menuClass"])
  },
  data() {
    return {
      // navIndex: sessionStorage.getItem("navIndex")
      //   ? sessionStorage.getItem("navIndex")
      //   : 0,
      // menuName: "首页",
      // menuClass: "glyphicon glyphicon-menu-down",
    };
  },
  created() {
    console.log(this.NAVLIST);
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_INDEX"]),
    navClick(index, name) {
      // console.log(index, "21212");

      this.SET_ACTIVE_INDEX({ index, name });
      // this.navIndex = index;
      // sessionStorage.setItem("navIndex", index);
      // this.menuName = name;
    },
    // menuClick() {
    //   if (this.menuClass == "glyphicon glyphicon-menu-down") {
    //     this.menuClass = "glyphicon glyphicon-menu-up";
    //   } else {
    //     this.menuClass = "glyphicon glyphicon-menu-down";
    //   }
    // },
    Goto(path, item, index) {
      console.log(path, item, index);
      let el = document.getElementById(path);
      if (el) {
        if (item.path !== window.location.hash.slice(1)) {
          this.navClick(index, item.name);
          this.$router.push(item.path);
          this.$nextTick(() => {
            el.scrollIntoView({
              behavior: "smooth"
            });
          });
        } else {
          el.scrollIntoView({
            behavior: "smooth"
          });
        }
      } else {
        this.$router.push(item.path);
      }
    },
    open(e) {
      let middleNav = document.querySelector(".middle-nav");
      let r2 = document.querySelector(".right_2");
      let myIcon = document.querySelector(".my-icon");
      middleNav.classList.add("on");
      myIcon.classList.add("none");
      r2.classList.remove("none");
    },
    close(e) {
      let middleNav = document.querySelector(".middle-nav");
      let r = document.querySelector(".my-icon");
      middleNav.classList.remove("on");
      e.target.classList.add("none");
      r.classList.remove("none");
    },
    changeSel(index, e) {
      e.target.classList.toggle("trans");
      let els = document.querySelectorAll(".sel-ol");
      let el = els[index - 1];
      if (el.classList.contains("on-sel")) {
        el.style.height = 0;
      } else {
        el.style.height = 32 * el.children.length + "px";
      }
      el.classList.toggle("on-sel");
    },
    childJump(path, item, index) {
      this.Goto(path, item, index);
      let middleNav = document.querySelector(".middle-nav");
      middleNav.classList.remove("on");
      let r = document.querySelector(".my-icon");
      let r2 = document.querySelector(".right_2");
      r.classList.remove('none');
      r2.classList.add('none')
    },
    jump(item) {
      this.$router.push(item.path);
      let middleNav = document.querySelector(".middle-nav");
      middleNav.classList.remove("on");
      let r = document.querySelector(".my-icon");
      let r2 = document.querySelector(".right_2");
      r.classList.remove('none');
      r2.classList.add('none')
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 78px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  /* width: 230px; */
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 78px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 30px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  /* padding: 15px 0; */
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 6px;
  opacity: 0;
  transition: all 0.1s ease;
  background-color: #de2b2b;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #000;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #de2b2b;
  text-decoration: none;
  border-bottom: 6px solid #de2b2b;
  font-weight: bold;
}

/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 120px;
  top: 82px;
  left: -27px;
  z-index: 999999;
  text-align: center;
  /* box-shadow: 0 0 3px 1px #ccc; */
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  /* border-bottom: 1px solid #ccc; */
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #eeee;
}
a {
  color: rgb(92, 92, 92);
  font-size: 13px;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 230px;
    /* height: 45px; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
/* 蔡瑞斌 */
.swiper-slide-title {
  background-color: none;
}
@media screen and (max-width: 751px) {
  #header .header-nav-two {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    background: #fff;
  }
  #header .left-logo {
    width: 126px;
  }
  #header .left-logo img {
    width: 100%;
  }
  #header .right-control .my-icon .top-icon {
    width: 22px;
    height: 2px;
    background: #e81f17;
    margin-bottom: 4px;
  }
  #header .right-control .my-icon .middle-icon {
    width: 22px;
    height: 2px;
    background: #e81f17;
    margin-bottom: 4px;
  }
  #header .right-control .my-icon .bottom-icon {
    width: 22px;
    height: 2px;
    background: #e81f17;
  }
  .middle-nav {
    position: absolute;
    transition: all 0.5s;
    right: 0;
    top: -100%;
    z-index: 2;
    background: #e81f17;
    width: 100%;
  }
  .middle-nav ul {
    margin-bottom: 0;
    padding: 0px 8px;
  }
  .middle-nav ul > li {
    padding: 11px 0px;
    color: #fff;
    align-items: center;
    border-bottom: solid 1px #fff;
    position: relative;
  }
  .middle-nav ul > li div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .middle-nav ul > li div i {
    width: 24px;
    height: 24px;
    display: inline-block;
  }
  .middle-nav ul > li div img {
    width: 24px;
    height: 24px;
    transition: all 0.3s;
  }
  .middle-nav ul > li ol {
    padding-left: 20px;
    height: 0;
    overflow: hidden;
    transition: all 0.3s;
  }
  .middle-nav ul > li ol > li {
    padding: 6px 0px;
  }
  .middle-nav li:last-child {
    border-bottom: none;
  }
  .on {
    top: 48px;
  }
  .middle-nav ul > li ol.on-sel {
    transition: all 0.3s;
  }
  .trans {
    transform: rotate(180deg);
  }
  .right_2 {
    color: #e81f17;
    font-size: 20px;
  }
  .none {
    display: none;
  }
}
@media screen and (min-width: 752px) {
  #header .header-nav-two {
    display: none;
  }
  #header .middle-nav{
    display: none;
  }
}
</style>
