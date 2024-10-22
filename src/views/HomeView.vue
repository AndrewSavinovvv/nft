<script setup>
import CreatorsComponent from "@/components/creators/CreatorsComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";
import TrendingComponent from "@/components/trending/TrendingComponent.vue";
import BrowseComponent from "@/components/browse/BrowseComponent.vue";

</script>

<template>
  <div class="container">
    <InfoComponent></InfoComponent>
   <TrendingComponent></TrendingComponent>
 <CreatorsComponent></CreatorsComponent>
    <BrowseComponent></BrowseComponent>
  </div>
</template>

<style scoped>

</style>