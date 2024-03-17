// /store/user.js

import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"

const baseurl = "https://goldenoak.vanderc.at"

export const useUserStore = defineStore("user", {
  state: () => ({
    token: useLocalStorage('goldenoak-token', null),
    uuid: useLocalStorage('goldenoak-uuid', null),
    user: null
  }),

  actions: {
    async setToken(token) {
        this.token = token;
    },
    async fetchUser() {
        if (this.token == null) {
            throw "user has not logged in!";
        }
        const res = await fetch(baseurl+"/session/minecraft/profile/"+this.uuid);

        const user = await res.json();
        this.user = user;
    }
    }
});