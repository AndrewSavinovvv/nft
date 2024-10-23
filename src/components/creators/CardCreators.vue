<script setup>
defineProps({
  id: String,
  name: String,
  sales: String,
  avatar: String,
});
</script>

<template>
  <div class="creators__card">
    <div class="user__header">
      <span class="user__id">{{ id }}</span>
      <img :src="avatar" alt="User avatar" class="user__avatar">
    </div>
    <div class="user__info">
      <h2 class="user__name">{{ name }}</h2>
      <div class="user__sale">Total Sales: <p class="user__sales">{{ sales }}</p></div>
    </div>
  </div>
</template>

<style scoped>


.creators__card {
  position: relative;
  background: #3B3B3B;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user__id {
  position: absolute;
  top: 20px;
  left: 18px;
  background: #2B2B2B;
  border-radius: 50%;
  padding: 4px 10px;
  color: #858584;
}

.user__name {
  display: flex;
  justify-content: center;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: white;
  margin: 0;
}

.user__sale {
  display: flex;
  align-items: center;
  color: #858584;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
}

.user__sales {
  color: white;
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  line-height: 22px;
  padding-left: 10px;
  margin: 0;
}

.user__avatar {
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  height: 100px;
  width: 100px;
}


@media (max-width: 1280px) {
  .user__avatar {
   margin-bottom: 0;
    margin-right: 20px;
    height: 50px;
    width: 50px;
  }
  .user__id {
    position: absolute;
    top: 16px;
    left: 10px;

  }
}
@media (max-width: 834px) {
  .creators__card {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .creators__card:nth-child(n+7) {
    display: none;
  }
}
@media (max-width: 685px) {
  .creators__card {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .user__id {
    position: absolute;
    top: 16px;
    left: 10px;
  }
}
</style>
