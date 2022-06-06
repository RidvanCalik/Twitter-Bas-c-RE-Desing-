<script setup>
import { onMounted, ref } from 'vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import HeaderArea from '@/views/Home/components/HeaderArea.vue';
import TrendArea from '@/views/Home/components/TrendArea.vue';
import MainArea from '@/views/Home/components/MainArea.vue';
import UserPanelArea from '@/views/Home/components/UserPanelArea.vue';
import store from '../../store/index.js';
import router from '../../router/index.js';



onMounted(function () {
  //kullanıcı kotnrolü
  if (!store.getters.getUser) {
    router.push(`/?err=${store.state.errMessage[2]}`)
  }

});
var errMesage = ref("");


</script>

<template >

  <div class="row h-100 ">

    <div class="col-md-3  ">
      <TrendArea></TrendArea>
    </div>

    <div class=" col-md-6 ">
      <div class="row" id="headerArea">
        <HeaderArea></HeaderArea>
      </div>
      <div class="row" id="mainArea">
        <MainArea></MainArea>

      </div>
    </div>
    <div class=" col-md-3">
      <UserPanelArea></UserPanelArea>

    </div>

  </div>








</template>

<style>
* {
  margin: 0 !important;
  padding: 0 !important;
}

html,
body {
  height: 100vh;
}

#app {
  height: 100%;
}

#headerArea {
  height: 15vh;
}

#mainArea {
  height: 85vh;
}
</style>
