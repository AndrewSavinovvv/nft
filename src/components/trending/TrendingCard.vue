<script setup>
defineProps({
  title: String,
  author: String,
  avatar: String,
  img: String,
  miniimg1: String,
  miniimg2: String,
});
</script>

<template>
  <div class="card">
    <img class="card__img" :src="img" alt="Main image">
    <div class="card__img-mini">
      <img :src="miniimg1" alt="Mini image 1">
      <img :src="miniimg2" alt="Mini image 2">
      <div class="card__score">1025+</div>
    </div>
    <div class="card__name">
      {{ title }}
    </div>
    <div class="card__author">
      <img class="card__avatar" :src="avatar" alt="Author avatar">
      {{ author }}
    </div>
  </div>
</template>

<style scoped>
.card__main {
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 calc(33% - 20px);
  max-width: 300px;
}

.card__img-mini {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  gap: 5px;
}

.card__score {
  color: white;
  background:#A259FF;
  height: 100px;
  width: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 22px;
  line-height: 35px;
}

.card__name {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: white;
  margin-top: 15px;
}

.card__author {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: white;
}

.card__img {
  width: 100%;
}

.card__avatar {
  padding-right: 12px;
}

@media (max-width: 1280px) {
  .card {
    display: flex;
    justify-content: center;
  }
  .card__img {
    padding-top: 25px;
  }

}
@media (max-width: 834px) {
  .trending__title {
    font-size: 28px;
  }
  .trending__text {
    font-size: 16px;
  }
  .trending {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding: 72px;
  }
  .card__main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }

  .card__main > *:nth-child(n+1) {
    display: none;
  }
}
</style>