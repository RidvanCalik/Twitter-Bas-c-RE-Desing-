<template>
    <div class="container p-5" id="mainArea">
        <router-link class="btn btn-primary d-flex align-items-center justify-content-center " id="addTweet"
            to="/newTweet">+</router-link>


        <div class="card shadow p-3 m-2" v-for="p in post">
            <div class="card-body">
                <div class="row">
                    <div class="col-2 gap-3 d-flex flex-column  align-items-center text-center">
                        <img :src="p.postUserImg">
                        <h6 class=" card-title text-primary">{{ p.postUserName }}</h6>
                    </div>
                    <div class="col-10">
                        <h6 class="card-title text-primary">{{ p.postTag.map((x) => { return "#" + x }).toString()
                        }}
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



var post = ref([]);

onMounted(() => {
    apiConnection.getPosts().then((x) => { post.value = x.data; console.log(x.data); }).catch(function (err) { post.value = false; });

})


</script>


<style scoped>
img {
    width: 50%;
    border-radius: 50%;
    object-fit: cover;

}


#addTweet {
    z-index: 10;
    right: 2em;
    bottom: 2em;
    position: fixed;
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>