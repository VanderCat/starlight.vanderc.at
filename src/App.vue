<script setup>
import axios from 'axios';
import { useUserStore } from '@/stores/user';
const store = useUserStore();

if (store.token != null) {
  try {
    axios.post("https://goldenoak.vanderc.at/refresh",{
       accessToken: store.token,
       clientToken: "starlight-web"
    }).then((result)=>{
      console.log(result)
      store.user = result.data.selectedProfile
      store.token = result.data.accessToken
    }).catch((error)=>{
      console.error(error.Response)
      store.user = null
      store.token = null
      store.uuid = null
    })
  
  } catch (error) {
      console.log(error)
  }
}
</script>

<template>
  <RouterView class="centered root"/>
</template>

<style scoped>
</style>
