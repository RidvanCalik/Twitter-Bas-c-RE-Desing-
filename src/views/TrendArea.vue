<template>
    <LoadingSpinner v-if="!trends"></LoadingSpinner>
    <div v-else class="h-100 d-flex align-items-start justify-content-center  p-2">

        <ul class="list-group w-100 shadow-lg ">
            <li class="list-group-item text-center p-3">Gündem</li>
            <li class="list-group-item p-1" v-for="x in trends">{{ x }}</li>
        </ul>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import apiConnection from '@/apiConnection';
import LoadingSpinner from '../components/LoadingSpinner.vue';

var trends = ref([]);
onMounted(() => {
    apiConnection.getTrends().then((x) => { trends.value = x.data; }).catch(function (err) { trends.value = false; });

})



</script>