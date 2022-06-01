<template>
    <div class="h-100 p-2 p-md-5 d-flex justify-content-center align-items-center">
        <div class="card shadow ">
            <div class="card-body p-4 text-center">
                <h5 class="card-title pb-4">Merhaba {{ userInfo.userName }}</h5>
                <p class="card-text my-5">Twitter Klonuna hoşgeldin</p>
                <router-link class="btn btn-block d-block p-2 btn-primary" to="/Settings">Ayarlar</router-link>

            </div>

        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import store from '../../../store';

var userInfo = ref({});

onMounted(() => {
    userInfo.value = JSON.parse(localStorage.getItem("vuex"))["user"];

})

</script>