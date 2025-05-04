<template>
  <div class="container-fluid">
    <h1 class="my-4">產品頁面</h1>
    <div class="row g-4">
      <div class="col-4" v-for="product in data" :key="product.id">
        <div class="card h-100">
          <img :src="product.imageUrl" class="card-img-top product-img " alt="card-image">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useApiStore } from '../stores/apiStore';
  import { storeToRefs } from 'pinia';

  const apiStore = useApiStore();
  const { data, loading, error } = storeToRefs(apiStore);

  onMounted(() => {
    apiStore.fetchData('https://ec-course-api.hexschool.io/v2/api/starstar/products/all');
  });
</script>

<style scoped>
  .product-img {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }
</style>
