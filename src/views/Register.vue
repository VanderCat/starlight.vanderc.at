<template>
    <div>
        <div class="content">
            <div class="content">
            create your new account and embrace the feelings for the equine.<br/>
            <br/>
            Username: <input type="text" v-model="username"/><br/>
            Password: <input type="password" v-model="password"/><br/>
            Type Again: <input type="password"/><br/>
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

const err = ref(false)
const errMsg = ref('')
const errCause = ref('')

async function register() {
    try {
        err.value = false
        let result = await axios.post("https://goldenoak.vanderc.at/register", {
            username: username.value,
            password: password.value
        })
        console.log(result.response)
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