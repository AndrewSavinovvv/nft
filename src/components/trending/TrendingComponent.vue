<script setup>
import TrendingCard from "@/components/trending/TrendingCard.vue";
import avatar1 from "@/assets/img/cardmainimg/author1.png";
import avatar2 from "@/assets/img/cardmainimg/avatar2.png";
import avatar3 from "@/assets/img/cardmainimg/avatar3.png";
import card1 from "@/assets/img/cardmainimg/card1.png";
import card2 from "@/assets/img/cardmainimg/card2.png";
import card3 from "@/assets/img/cardmainimg/card3.png";
import mini1 from "@/assets/img/cardmainimg/mini1.png";
import mini2 from "@/assets/img/cardmainimg/mini2.png";
import minim1 from "@/assets/img/cardmainimg/minim1.png";
import minim2 from "@/assets/img/cardmainimg/minim2.png";
import minir1 from "@/assets/img/cardmainimg/minir1.png";
import minir2 from "@/assets/img/cardmainimg/minir2.png";

const cards = [
  { title: "DSGN Animals", author: "MrFox", avatar: avatar1, img: card1, miniimg1: mini1, miniimg2: mini2 },
  { title: "Magic Mushrooms", author: "Shroomie", avatar: avatar2, img: card2, miniimg1: minim1, miniimg2: minim2 },
  { title: "Disco Machines", author: "BeKind2Robots", avatar: avatar3, img: card3, miniimg1: minir1, miniimg2: minir2 }
];
</script>

<template>
  <div class="trending">
    <h1 class="trending__title">Trending Collection</h1>
    <h6 class="trending__text">Checkout our weekly updated trending collection.</h6>

    <div class="card__main">
      <TrendingCard
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :author="card.author"
          :avatar="card.avatar"
          :img="card.img"
          :miniimg1="card.miniimg1"
          :miniimg2="card.miniimg2"
      />
    </div>
  </div>
</template>

<style scoped>
.trending__title {
  font-family: "Work Sans", sans-serif;
  font-size: 38px;
  font-weight: 600;
  color: white;
  line-height: 45px;
  margin-top: 40px;
  margin-bottom: 0;
}
.trending__text {
  font-family: "Work Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  color: white;
  margin: 0;
}
.card__main {
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 834px) {
  .trending__title {
    font-size: 28px;
    padding-left: 72px;
  }
  .trending__text {
    font-size: 16px;
    padding-left: 72px;
  }
  .trending {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
  }
  .card__main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }

  .card__main > *:nth-child(n+3) {
    display: none;
  }
}
@media (max-width: 1280px) {
  .card__main > *:nth-child(n+3) {
    display: none;
  }
}
@media (max-width: 780px) {
  .card__main > *:nth-child(n+2) {
    display: none;
  }
  .trending__title {
    font-size: 28px;
    padding-left: 72px;
  }
  .trending__text {
    padding-left: 72px;
    font-size: 16px;
  }
}
</style>