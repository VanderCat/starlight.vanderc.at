<template>
    <div class="text-medium login disable-select" v-if="store.user != null">
        <div>logged in as <i>{{store.user.name??"<ERROR>"}}</i></div>
        <div class="button-list">
            <a href="#" @click="logout">not you?</a>
            <RouterLink :to="'/profile/'+store.uuid">profile</RouterLink>
        </div>
    </div>
    <div class="text-medium login disable-select" v-else>
        <div>you currently not logged in</div>
        <div class="button-list">
            <RouterLink to="login">login</RouterLink>
            <RouterLink to="register">register</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login {
display: flex;
flex-direction: column;
align-items: center;
width: fit-content;
}
</style>

<script setup>
import axios from 'axios';

import { useUserStore } from '@/stores/user';

import { onMounted } from 'vue'

onMounted(()=>{
    getUser()
})

async function getUser() {
    if (store.token != null) {
        store.fetchUser()
    }
}

const store = useUserStore();

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

async function logout() {
    console.log("test")
    let a = await axios.post("https://goldenoak.vanderc.at/invalidate", {
            accessToken: store.token,
            clientToken: "starlight-web"
        });
    store.token = null
    store.user = null
    store.uuid = null
    router.push("login")
}
</script>