<template>
    <div class="container d-flex justify-content-center align-items-center h-100">
        <div class="col-10 col-md-4 h-50 card shadow p-4 justify-content-around">
            <div class="card-title text-center">Kayıt Ol</div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill" placeholder="Kullanıcı Adı">
            </div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill" placeholder="Şifre">
            </div>
            <div class="input-group  ">
                <input type="text" class="form-control rounded-pill" placeholder="Şifre Tekrar">
            </div>
            <div class="input-group  ">
                <button type="button" class="form-control btn-primary rounded-pill">Kayıt Ol</button>
            </div>
            <router-link class="text-center" to="/">Giriş Ekranı</router-link>

        </div>
    </div>
</template>
<script setup>


</script>