import { defineStore } from "pinia";
import axios from 'axios'

const BASE_URL = ''

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoginDialogOpen: false,
    isRegDialogOpen: false,
    user: {},
  }),
  actions: {
    showLoginDialog() {
      this.isLoginDialogOpen = true
    },
    hideLoginDialog() {
      this.isLoginDialogOpen = false
    },
    showRegDialog() {
      this.isRegDialogOpen = true
    },
    hideRegDialog() {
      this.isRegDialogOpen = false
    },
    async login(payload) {
      const res = await axios.post(BASE_URL, payload)
      this.user = res.json()
      this.hideLoginDialog()
    },
    async register(payload) {
      const res = await axios.post(BASE_URL, payload)
      this.user = res.json()
      this.hideRegDialog()
    },
  }
})