<template>
  <div>
    <template v-if="pid === '3'">
      <DetailNewsZhigao></DetailNewsZhigao>
    </template>
    <template v-if="pid === '2'">
      <DetailNewsZhigao></DetailNewsZhigao>
    </template>
    <template v-if="pid === '1'">
      <Detailnews></Detailnews>
    </template>
  </div>
</template>

<script>
import Detailnews from "../components/detail_yingyoing";
import DetailNewsZhigao from "../components/detail_news";
export default {
  components: {
    Detailnews,
    DetailNewsZhigao
  },
  computed: {
    pid: function() {
      if (sessionStorage.pid === "1") {
        return "1";
      } else if (sessionStorage.pid === "2") {
        return "2";
      } else if (sessionStorage.pid === "3") {
        return "3";
      }
    }
  },
  created() {}
};
</script>

<style></style>
