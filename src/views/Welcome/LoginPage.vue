<template>
    <div class=" myLogin h-100 w-100 d-flex justify-content-center align-items-center flex-column">
        <div class="alert alert-danger m-3 p-3" v-if="err" role="alert">
            {{ errMessage }}
        </div>
        <div class="col-10 col-sm-6 col-md-4 h-50 card shadow p-4 justify-content-around">

            <div class="card-title text-center">Gİriş yap</div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill p-2" v-model="UserName" placeholder="Kullanıcı Adı">
            </div>
            <div class="input-group  ">
                <input type="password" class="form-control rounded-pill p-2" v-model="Pass" placeholder="Şifre">
            </div>
            <div class="input-group  ">
                <button type="button" class="form-control btn-primary rounded-pill p-2" @click="login">Giriş
                    Yap</button>
            </div>
            <router-link class="text-center" to="/register">Üye değil misin? Haydi Kayıt Ol
            </router-link>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import apiConnection from '../../apiConnection';
import router from '../../router';
const store = useStore();

var err = ref(false);
var errMessage = ref();
var UserName = ref();
var Pass = ref();
onMounted(() => {
    let myUrl = new URLSearchParams(window.location.search);
    if (myUrl.get("err")) {
        err.value = true;
        errMessage.value = myUrl.get("err");
    }

})
function login() {
    apiConnection.isConnection().then((e) => {
        if (!e) {
            err.value = true;
            errMessage.value = store.state.errMessage[1];
        } else {
            apiConnection.loginUser(UserName.value, Pass.value).then(

                function (e) {

                    if (e) {
                        console.log("store eklendi");
                        store.commit("setUser", ...e);
                        router.push({ name: 'Home' });
                    } else {
                        err.value = true;
                        errMessage.value = store.state.errMessage[0];
                    }

                }
            ).catch((err) => { console.log(err) });
        }
    });






}

</script>

