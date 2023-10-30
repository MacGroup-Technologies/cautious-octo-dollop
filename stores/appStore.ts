import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({ theme: "light" }),
  actions: {
    setTheme(payload: 'light' | "dark") {
      this.theme = payload
    }
  },
  persist: true
})
