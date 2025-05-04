<template>
  
  <div class="container">
    <Navbar/>
    <div class="row">
      <div class="col-2">
        <SideNav/>
      </div>
      <div class="col-10">
        <RouterView/>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="js" name="App">
  import { RouterView } from 'vue-router';
</script>

<style scoped>

</style>