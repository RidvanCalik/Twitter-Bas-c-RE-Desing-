<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TrendArea from "./views/TrendArea.vue";
import HeaderArea from './views/HeaderArea.vue';
import MainArea from './views/MainArea.vue';
var showLoading = true;

onMounted(function () {
  console.log("aaaa");
});


</script>

<template >
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
