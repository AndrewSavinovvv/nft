<script setup>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<style scoped>

</style>
