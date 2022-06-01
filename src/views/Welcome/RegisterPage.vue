<template>

    <div class="myRegister h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div v-if="false" class="alert alert-danger  my-2 p-2 col-10 col-sm-6 col-md-4" role="alert">
            {{ errMessage }}
        </div>
        <div class="col-10 col-sm-6 col-md-4 h-50 card shadow p-4 justify-content-around">

            <div class="card-title text-center">Kayıt Ol</div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill m-2 p-2" v-model="UserName"
                    placeholder="Kullanıcı Adı">
            </div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill m-2 p-2" v-model="Pass1" placeholder="Şifre">

            </div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill m-2 p-2" v-model="Pass2" placeholder="Şifre Tekrar">
            </div>
            <div class="input-group">
                <button type="button" class="btn w-100 d-block btn-primary rounded-pill m-2 p-2"
                    :disabled="!canRegister">Kayıt
                    Ol</button>
            </div>
            <router-link class="text-center" to="/">Giriş Ekranı</router-link>

        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import store from '../../store';

var UserName = ref();
var Pass1 = ref();
var Pass2 = ref();
var errMessage = ref();
var UserPass = ref();





</script>