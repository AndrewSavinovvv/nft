<script setup>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <router-view></router-view>
  </div>
<FooterComponent></FooterComponent>
</template>

<style scoped>

</style>
