<template>
    <div>
        <div class="content">
            <div class="content">
            did ya get hacked or what<br/>
            <br/>
            Old Password: <input type="password" v-model="oldPassword" ref="oldPasswordField" @keypress.enter="passwordField.focus()"/><br/>
            New Password: <input type="password" v-model="password" ref="passwordField" @keypress.enter="passwordField2.focus()"/><br/>
            Type Again: <input type="password" v-model="password2" ref="passwordField2" @keypress.enter="register"/><br/>
            <br/>
            <ErrorLogin :errorMessage="errMsg" :errorCause="errCause" v-if="err" />
            [<a href="#" @click="register" >ok</a>]
        </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import ErrorLogin from '@/components/ErrorLogin.vue'

const oldPassword = ref('')
const password = ref('')
const password2 = ref('')

const err = ref(false)
const errMsg = ref('')
const errCause = ref('')

const oldPasswordField2 = ref()
const passwordField2 = ref()
const passwordField = ref()

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()


import { useUserStore } from '@/stores/user';
const store = useUserStore();

if (store.token == null) router.replace("/")

async function register() {
    try {
        if (password2.value != password.value){
            err.value = true;
            errMsg.value = "passwords do not match!"
            return;
        }
        err.value = false
        let result = await axios.post("https://goldenoak.vanderc.at/changepassword", {
            username: store.user.name,
            password: oldPassword.value,
            newPassword: password.value
        })
        console.log(result.response)
        router.push("/profile/"+store.uuid)
    } catch (error) {
        console.error(error)
        err.value = true
        errMsg.value = error.response.data.errorMessage
        errCause.value = error.response.data.cause
        console.error(error.response.data)
    }
}
</script>

<style>
.content {
    width: 100%;
}
</style>