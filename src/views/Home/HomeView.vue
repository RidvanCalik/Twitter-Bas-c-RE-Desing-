<script setup>
import { onMounted, defineAsyncComponent } from 'vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderArea from '@/views/Home//HeaderArea.vue';
import LoadingSpinnerVue from '@/components/LoadingSpinner.vue';
import apiConnection from '../../apiConnection.js';
import TrendArea from '@/views/Home/TrendArea.vue';
import MainArea from '@/views/Home/MainArea.vue';

onMounted(function () {
  //kullanıcı kotnrolü
  apiConnection.isConnection().then(function (x) { console.log(x); });
});


</script>

<template >

  <div class="row h-100 ">

    <div class=" d-none d-md-block col-md-2 ">

      <TrendArea></TrendArea>

    </div>

    <div class=" col-12 col-md-10 ">
      <div class="row" id="headerArea">

        <HeaderArea></HeaderArea>

      </div>
      <div class="row" id="mainArea">


        <MainArea></MainArea>

      </div>
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
