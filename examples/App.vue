<template>
  <div id="app">
    <Swiper :imgList="list" :keysControl="true">
      <!-- <div class="" slot="leftBtn">
        i am left btn
      </div>
      <div class="" slot="rightBtn">
        i am left btn
      </div> -->
    </Swiper>
  </div>
</template>

<script>
import Swiper from "./components/swiper.vue";

export default {
  name: "App",
  components: {
    Swiper,
  },
  data() {
    return {
      list: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F05%2F20170205181958_ZSPC3.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686973756&t=398e2599a4856c33adad90b75c8e914e",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F05%2F20170205182700_dWNkf.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686973756&t=9f5f5a9d2d0808af471437235cb50d3b",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F05%2F20170205175804_ZLiFV.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686994418&t=279aa575f0a54c8467dba6106d985083",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F12%2F20181012234400_GXR22.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686994418&t=7edd4804bcc50e35b441ef76ed709830",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F30%2F20160730202539_QWHR4.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686994418&t=2092d69cbb73539f4cb93f46acf658d7",
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
