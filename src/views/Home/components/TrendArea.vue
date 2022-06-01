
<script setup>
import { onMounted, ref } from 'vue';
import apiConnection from '@/apiConnection';

var trends = ref([]);
onMounted(() => {

    apiConnection.getTrends().then((x) => { trends.value = x.data; }).catch(function (err) { trends.value = false; });

})
</script>

<template>

    <div class="h-100 d-flex align-items-center justify-content-center  p-2 p-md-5">

        <ul class="list-group w-100 shadow-lg  display-fixed">
            <li class="list-group-item text-center p-3">Gündem</li>
            <li class="list-group-item p-1" v-for="x in trends">{{ x }}</li>
        </ul>
    </div>


</template>

