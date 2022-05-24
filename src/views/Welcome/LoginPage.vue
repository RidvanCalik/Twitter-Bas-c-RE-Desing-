<template>
    <div class="container d-flex justify-content-center align-items-center h-100">
        <div class="col-10 col-md-4 h-50 card shadow p-4 justify-content-around">
            <div class="card-title text-center">Gİriş yap</div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill" v-model="UserName" placeholder="Kullanıcı Adı">
            </div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill" v-model="Pass" placeholder="Şifre">
            </div>
            <div class="input-group  ">
                <button type="button" class="form-control btn-primary rounded-pill" @click="login">Giriş Yap</button>
            </div>
            <router-link class="text-center" to="/register">Üye değil misin? Haydi Kayıt Ol</router-link>
            {{ UserName }}dsfs
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

var UserName = ref();
var Pass = ref();

function login() {
    console.log(UserName.value);
}

</script>