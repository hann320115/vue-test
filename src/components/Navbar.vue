<template>
  <div class="bg-dark">
    <header class="container d-flex align-items-center">
      <img class="py-2" src="/goldline.svg" alt="logo" width="50" height="50">
      <p class="text-white ms-1">測試系統</p>
      <div class="ms-auto me-4">
        <LoginBtn v-if="!isLoggedIn" />
        <SignOutBtn v-else />
      </div>
    </header>
  </div>
</template>

<script setup name="navbar">
import LoginBtn from './LoginBtn.vue'
import SignOutBtn from './SignOutBtn.vue'
import { useApiStore } from '@/stores/apiStore'
import { storeToRefs } from 'pinia'

const apiStore = useApiStore()
const { isLoggedIn } = storeToRefs(apiStore)
</script>
