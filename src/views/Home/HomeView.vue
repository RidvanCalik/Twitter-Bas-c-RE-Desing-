<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderArea from '@/views/Home//HeaderArea.vue';
import LoadingSpinnerVue from '@/components/LoadingSpinner.vue';
import apiConnection from '@/apiConnection';
var TrendArea = defineAsyncComponent(() => import('@/views/Home/TrendArea.vue'));
var MainArea = defineAsyncComponent(() => import('@/views/Home/MainArea.vue'));


onMounted(function () {

  apiConnection.isConnection().then(function (x) { console.log(x); });
});


</script>

<template >
  <Suspense>


    <div class="row h-100 ">

      <div class=" d-none d-md-block col-md-2 ">
        <TrendArea>

        </TrendArea>
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

    <template #fallback>
      <LoadingSpinnerVue></LoadingSpinnerVue>
    </template>
  </Suspense>






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
