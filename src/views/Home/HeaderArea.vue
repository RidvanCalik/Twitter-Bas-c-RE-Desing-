<template>


    <div class="d-flex container p-4 align-items-center">
        <button class="btn position-absolute d-md-none" type="button" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <h2><i class="bi bi-list "></i></h2>
        </button>
        <div class="w-100 justify-content-center d-flex">
            <div class="input-group   w-50 ">

                <input type="text" class="form-control rounded-pill p-2 text-center shadow " placeholder="Ara"
                    aria-describedby="basic-addon1">

            </div>
        </div>
    </div>
    <!--modal trends for mobile-->

    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <TrendArea></TrendArea>
            </div>
        </div>
    </div>
</template>

<style>
.modal-dialog {

    margin: auto;
    position: absolute;

    left: 50%;
    margin-left: -500px;


}
</style>
<script setup>
import TrendArea from '@/views/Home/TrendArea.vue';
</script>