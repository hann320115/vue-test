<template>
  <section class="bg-skyBlue sideNavHeight" >
    <ul class="list-unstyled pt-2">
      <li class="text-center">
        <router-link to="/table" class="nav-link-box" active-class="active-box">表格</router-link>
      </li>
      <li class="text-center">
        <router-link to="/products" class="nav-link-box" active-class="active-box">產品</router-link>
      </li>
      <li>
        
      </li>
      <li class="py-2"></li>
    </ul>
  </section>
</template>

<script setup name="SideNav">

</script>

<style scoped>
  .bg-skyBlue{
    background-color: rgb(210, 234, 243);
  }
  .nav-link-box {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .nav-link-box:hover {
    background-color: #e0f0ff;
    color: #000;
  }

  .active-box {
    background-color: #0d6efd;
    color: #fff;
  }
  .sideNavHeight{
    height: 500px;
  }
</style>