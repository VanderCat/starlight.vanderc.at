<template>
    <div>
        <div class="content">
            <div v-if="user != null">
                <h3 class="profile-header" v-if="!editMode">
                    <div>{{ user.name }}</div>
                    <div>
                        <a href="#" @click="startEdit" v-if="isThisUserLoggedIn" style="height:48px; display: flex;">
                            <SvgIcon :path="mdiPencilOutline" type="mdi" size="48"/>
                        </a>
                    </div>
                </h3>
                <h3 class="profile-header" v-else>
                    <input type="text" v-model="text" :placeholder="user.name" :style="(!nameAvailable)?'color:red;':''"/>
                    <div>
                        <a href="#" :style="(!nameAvailable)?'opacity:0.2':''" v-if="text != ''" style="height:48px; display: flex;" @click="changeName">
                            <SvgIcon :path="mdiCheck" type="mdi" size="48"/>
                        </a>
                        <a href="#" @click="closeEdit" v-else style="height:48px; display: flex;">
                            <SvgIcon :path="mdiClose" type="mdi" size="48"/>
                        </a>
                    </div>
                </h3>
                <div class="list" v-if="isThisUserLoggedIn">
                    <RouterLink to="/changepassword">change password</RouterLink>
                    <a>change skin</a>
                </div>
            </div>
            <div v-else>
                <LoadingSpinner/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPencilOutline, mdiClose, mdiCheck } from '@mdi/js'

import { onMounted, ref, computed } from 'vue';
import { computedAsync } from '@vueuse/core'
import axios from 'axios';
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router';

const user = ref()
const editMode = ref(false)
const store = useUserStore()
const route = useRoute()
const text = ref("");

const isThisUserLoggedIn = computed(()=>{
    return route.params.uuid==store.uuid;
})

onMounted(async ()=>{
    const res = await fetch("https://goldenoak.vanderc.at/session/minecraft/profile/"+route.params.uuid);

    user.value = await res.json(); //todo: change store too
})

const nameAvailable = computedAsync(async ()=>{
    if (text.value == "") return true;
    const res = await fetch("https://goldenoak.vanderc.at/checkname/"+text.value);

    const val = await res.json();
    return val.status == "AVAILABLE";
})

async function startEdit() {
    editMode.value = true;
}

async function changeName() {
    editMode.value = false;
    if (!nameAvailable) {
        return
    }
    const res = await axios.put("https://goldenoak.vanderc.at/changename/"+text.value, null, {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    })
    user.value.name = text.value
    store.user.name = text.value
}

async function closeEdit() {
    editMode.value= false
}

</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile-header {
    font-size: 3rem;
    display: flex;
    align-content: flex-end;
    align-items: center;
    gap: 1rem;
}
</style>