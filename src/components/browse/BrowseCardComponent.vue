
<template>
  <div class="browse__categories">
    <img class="browse__img" :src="img1" alt="background image">
    <img class="browse__img2" :src="img2" alt="foreground image">
    <h6 class="categories__name">{{ name }}</h6>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  img1: String,
  img2: String
});
</script>

<style scoped>
.browse__categories {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #3B3B3B;
  border-radius: 15px;
  width: 100%;
  max-width: 240px;
  align-items: center;
  overflow: hidden;
}

.browse__img {
  filter: blur(7px);
  width: 100%;
}

.browse__img2 {
  position: absolute;
  top: 70px;
  width: 50px;
}

.categories__name {
  font-size: 22px;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: white;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 25px;
  margin-top: 20px;
}

@media (max-width: 640px) {
  .browse__categories {
    max-width: 160px;
  }

  .browse__img2 {
    top: 50px;
    width: 40px;
  }

  .categories__name {
    font-size: 16px;
    margin-left: 15px;
  }
}
@media (min-width: 1280px) {
  max-width: 1050px;
  .browse__img2 {
    position: absolute;
    top: 70px;
    width: 50px;
  }
}
@media (max-width: 864px) {
  max-width: 690px;
  .browse__categories {
    max-width: 200px;
  }

  .browse__img2 {
    top: 50px;
    width: 80px;
  }

  .categories__name {
    font-size: 18px;
    margin-left: 20px;
  }
}
</style>