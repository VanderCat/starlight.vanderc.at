<template>
    <div>
        <div class="content">
            <div class="content">
            create your new account and embrace the feelings for the equine.<br/>
            <br/>
            Username: <input type="text" v-model="username" @keypress.enter="passwordField.focus()"/><br/>
            Password: <input type="password" v-model="password" ref="passwordField" @keypress.enter="passwordField2.focus()"/><br/>
            Type Again: <input type="password" v-model="password2" ref="passwordField2" @keypress.enter="register"/><br/>
            <br/>
            <ErrorLogin :errorMessage="errMsg" :errorCause="errCause" v-if="err" />
            [<a href="#" @click="register" >ok</a>] [<RouterLink to="login">login instead</RouterLink>]
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

const username = ref('')
const password = ref('')
const password2 = ref('')

const err = ref(false)
const errMsg = ref('')
const errCause = ref('')

const passwordField2 = ref()
const passwordField = ref()

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()


import { useUserStore } from '@/stores/user';
const store = useUserStore();

if (store.token != null) router.replace("/")

async function register() {
    try {
        if (password2.value != password.value){
            err.value = true;
            errMsg.value = "passwords do not match!"
            return;
        }
        err.value = false
        let result = await axios.post("https://goldenoak.vanderc.at/register", {
            username: username.value,
            password: password.value
        })
        console.log(result.response)
        router.push("login")
    } catch (error) {
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