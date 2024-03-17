<template>
    <div>
        <div class="content">
            by logging in you accept that starlight glimmer is the best pony.<br/>
            <br/>
            Username: <input type="text" v-model="username" @keypress.enter="passwordField.focus()"/><br/>
            Password: <input type="password" v-model="password" ref="passwordField" @keypress.enter="login"/><br/>
            <br/>
            <ErrorLogin :errorMessage="errMsg" :errorCause="errCause" v-if="err" />
            [<a href="#" @click="login">ok</a>] [<RouterLink to="register">register</RouterLink>]
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import ErrorLogin from '@/components/ErrorLogin.vue'
import { useUserStore } from '@/stores/user';
const store = useUserStore();

const username = ref('')
const password = ref('')

const err = ref(false)
const errMsg = ref('')
const errCause = ref('')

const passwordField = ref()

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

if (store.token != null) router.replace("/")

async function login() {
    try {
        err.value = false
        let result = await axios.post("https://goldenoak.vanderc.at/authenticate", {
            username: username.value,
            password: password.value,
            clientToken: "starlight-web"
        })
        console.log(result.data)
        store.setToken(result.data.accessToken)
        store.user = result.data.selectedProfile
        store.uuid = result.data.selectedProfile.id
        router.push("profile/"+store.user.id)
    } catch (error) {
        console.error(error)
        err.value = true
        errMsg.value = error.response.data.errorMessage
        errCause.value = error.response.data.cause
    }
}
</script>

<style>
.content {
    width: 100%;
}
</style>