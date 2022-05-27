
<script setup>
import { onMounted, ref } from 'vue';
import apiConnection from '@/apiConnection';

var trends = ref([]);
onMounted(() => {

    console.log("dsfasd");
    apiConnection.getTrends().then((x) => { console.log(x); }).catch(function (err) { trends.value = false; });

})
</script>

<template>

    <div class="h-100 d-flex align-items-center justify-content-center  p-2">

        <ul class="list-group w-100 shadow-lg ">
            <li class="list-group-item text-center p-3">Gündem</li>
            <li class="list-group-item p-1" v-for="x in trends">{{ x }}</li>
        </ul>
    </div>


</template>

