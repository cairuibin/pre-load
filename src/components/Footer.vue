<template>
  <div class="footer_wrap">
    <div id="footer" class="container-fluid">
      <div class="left">
        <div>联系方式：010-85952290</div>
        <div>邮政编码：100089</div>
        <div>总部地址：北京市海淀区中关村北一街甲15号</div>
      </div>
      <div class="center">
        <div>
          <a
            href="https://www.yesvrclass.com"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.yesvrclass.com</a>
        </div>
        <div>
          <a
            href="http://www.necibook.com"
            target="_blank"
            rel="noopener noreferrer"
          >http://www.necibook.com</a>
        </div>
        <div>
          <a
            href="https://www.zjyve.com"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.zjyve.com</a>
        </div>
      </div>
      <div class="right">
        <div class="right_left">
          <div>
            <img src="../assets/cimg/phone.jpg" alt /> 联系我们 Contact Us
          </div>
          <div>
            <img src="../assets/cimg/man.jpg" alt /> 加入我们 Join Us&emsp;&emsp;
          </div>
        </div>
        <div class="right_right">
          <img src="@/assets/cimg/w1.jpg" alt />
        </div>
      </div>
    </div>
    <div
      class="bottom_nav"
    >京ICP备20014632号 &emsp; &emsp;京公网备案 11010802031814号 &emsp; &emsp;COPYRIGHT@2020 中教云控股集团有限公司</div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 165px;

  background: #545454;
  overflow: hidden;
  display: flex;
  color: rgb(179, 179, 179);
  padding: 48px;
  border-top: 14px solid #f81f17;
  border-bottom: 2px solid #727272;
  flex-wrap: wrap;
}

.left {
  flex: 1;
  text-align: center;
  align-items: center;
  line-height: 20px;
  font-size: 12px;
}

.center {
  flex: 1;
  border-right: 2px solid rgb(179, 179, 179);
  border-left: 2px solid rgb(179, 179, 179);
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  height: 90px;
}

.right {
  flex: 1;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.right_left {
  flex: 1;
  text-align: center;
}

.right_right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.right_right > img {
  width: 70px;
  height: 70px;
}

.right > .right_left > div > img {
  display: inline;
}

.bottom_nav {
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 10px;
  text-align: center;
  background: #545454;
  color: rgb(179, 179, 179);
}
a {
  color: rgb(179, 179, 179);
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #footer {
    height: auto;
  }
  .left {
    text-align: left;
    min-width: 100%;
  }

  .center {
    min-width: 100%;
    text-align: left;
    border: none;
  }

  .right {
    min-width: 100%;
  }

  .right_left {
    min-width: 100%;
    text-align: left;
  }

  .right_right {
    text-align: left;
  }
  .bottom_nav {
    height: auto;
  }
}
/* 媒体查询（手机） iphone6 */
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){
  .right_right{
    position: relative;
  }
  .right_right > img{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 0;
  }
}

/* 媒体查询（手机） iphone6 plus*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
  .right_right{
    position: relative;
  }
  .right_right > img{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 0;
  }
}


@media screen and (max-width: 751px) {
  .right{
    display: flex;
  }
  .right_left{
    width: 60%;
    min-width: auto;
    flex: none;
  }
  .right_right{
    width: 70px;
  }
  .bottom_nav{
    line-height: 30px;
  }
}
</style>