<template>
    <div class="container p-4">

        <div class="card shadow p-3 m-2" v-for="p in post">
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <h5 class="card-title text-primary">{{ p.name }}</h5>
                    </div>
                    <div class="col-10">
                        <h6 class="card-title text-primary">{{ p.postTag.map((x) => { return "#" + x }).toString() }}
                        </h6>
                        <p class="card-text m-2">{{ p.post }}</p>


                        <h6 class="card-subtitle mb-2 text-muted">{{ p.postDate }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import apiConnection from '@/apiConnection';

function like(x) {
    console.log(x);
}
var post = ref([]);
onMounted(() => {
    apiConnection.getWantsToTrend().then((x) => { post.value = x.data; console.log(x.data); }).catch(function (err) { post.value = false; });

})

</script>