<template>
    <div class="row h-100 justify-content-center align-items-center">

        <div class="col-10 col-md-5 m-3">

            <form>
                <div class="mb-3">
                    <label for="userInput" class="form-label">Kullanıcı Adı</label>
                    <input autocomplete="off" type="text" class="form-control p-2" id="userInput" v-model="userName"
                        @change.capture="validateUserName">
                    5-15 arası karakter ve boşluk özel karakter içeremez <i
                        :class="userNameCheck ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>

                </div>
                <button type="button" class="btn btn-primary p-1 m-2"
                    @click="showPassUpdatePanel = !showPassUpdatePanel">Şifre
                    güncelle</button>
                <fieldset v-if="showPassUpdatePanel" class="border p-2 m-2">
                    <legend class="w-auto">Şifre Güncelleme</legend>
                    <div class="mb-3">
                        <label for="userPassOne" class="form-label">Şifre değişmi için ilk başta güncel şifrenizi
                            girin</label>
                        <input type="password" class="form-control" v-model="userPass1" id="userPassOne">
                    </div>
                    <div class="mb-3">
                        <label for="userPass2" class="form-label">Yeni şifre
                            girin</label>
                        <input type="password" class="form-control" v-model="userPass2" id="userPass2">
                        <small>8-30 arası karakter ve boşluk özel karakter içeremez</small> <i
                            :class="userNewPassCheck ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
                    </div>
                    <div class="mb-3">
                        <label for="userPass3" class="form-label">Yeni Şifre(Tekrar)</label>
                        <input type="password" class="form-control" v-model="userPass3" id="userPass3">
                        <small>8-30 arası karakter ve boşluk özel karakter içeremez</small> <i
                            :class="userNewPassAgainCheck ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
                    </div>
                </fieldset>

                <button type="button" class="btn btn-primary w-100 p-3"
                    :class="{ 'disabled': !checkSave }">Kaydet</button>
            </form>

        </div>

    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
//import apiConnection from '../../apiConnection';
import store from '../../store';

var showPassUpdatePanel = ref(false);
var userName = ref("");
var userPass1 = ref();
var userPass2 = ref("");
var userPass3 = ref();

onMounted(() => {
    userName.value = store.getters.getUser["userName"];
})
var userNameCheck = computed(() => {
    return new RegExp('^[a-zA-Z0-9\d_\\ğıüşöçİĞÜŞÖÇ]{5,15}$').test(userName.value) ? true : false;
});

var userNewPassCheck = computed(() => {
    return new RegExp('^[a-zA-Z0-9\d_\\ğıüşöçİĞÜŞÖÇ]{8,30}$').test(userPass2.value) ? true : false;
});
var userNewPassAgainCheck = computed(() => {
    return userPass2.value == userPass3.value ? true : false;
});
var checkSave = computed(() => {
    if (showPassUpdatePanel) {
        if ((userPass2.value == userPass3.value) && userNameCheck) {
            return true;
        }
        return false;
    } if (userNameCheck) {
        return true;
    } else {
        return false;
    }
});

function save() {
    if (showPassUpdatePanel) {
        if (userPass2.value == userPass3.value) {

        }
    }
}
</script>
