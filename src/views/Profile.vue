<template>
    <div>
        <div class="content">
            <div v-if="user != null">
                <h3 class="profile-header">
                    <div>{{ user.name }}</div>
                    <div>
                        <a v-if="isThisUserLoggedIn" style="height:48px; display: flex;">
                            <SvgIcon :path="mdiPencilOutline" type="mdi" size="48"/>
                        </a>
                    </div>
                </h3>
                <div class="list">
                    <a>change password</a>
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
import { mdiPencilOutline } from '@mdi/js'

import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router';

const user = ref()
const store = useUserStore()
const route = useRoute()

const isThisUserLoggedIn = computed(()=>{
    return route.params.uuid==store.uuid;
})

onMounted(async ()=>{
    const res = await fetch("https://goldenoak.vanderc.at/session/minecraft/profile/"+route.params.uuid);

    user.value = await res.json();
})
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