<template>
  <button class="btn btn-danger" @click="logout">登出</button>
</template>

<script setup>
import { useApiStore } from '@/stores/apiStore'
const apiStore = useApiStore()

function logout() {
  apiStore.logout()
}
</script>
