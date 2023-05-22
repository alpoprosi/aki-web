import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoginDialogOpen: false,
    isRegDialogOpen: false,
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
  }
})