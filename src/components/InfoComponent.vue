<script setup>
import BottomComponent from "@/components/BottomComponent.vue";

const blocks = [
  {count: "240k+",
  title: "Total Sale"},
  {count: "100k+",
    title: "Auctions"},
  {count: "240k+",
    title: "Artists"},
]
</script>

<template>
  <div class="info">
    <div class="info__left" >
      <h1  class="info__left-title">Discover Digital Art & Collect NFTs</h1>
      <p  class="info__left-text">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
      <button class="info__left-btn">
        <img src="@/assets/img/rocketInfo.png" alt="">
        Get Started
      </button>
      <div class="info__right_blocks">
        <div v-for="block in blocks" :key="block.title" style="order: 2;">
          <h4 class="blocks__count">{{block.count}}</h4>
          <h6 class="blocks__info">{{block.title}}</h6>
        </div>
      </div>
    </div>
    <div class="info__right">
      <img src="@/assets/img/img.png" alt="">
      <h6 class="img__title">Space Walking</h6>
      <div class="author">
        <img class="author__avatar" src="@/assets/img/author.png" alt="">
        <h6 class="author__name">Animakid</h6>
      </div>
    </div>
    <button class="info__right-btn">
      <img src="@/assets/img/rocketInfo.png" alt="">
      Get Started
    </button>
    <div class="info__left_blocks">
      <div v-for="block in blocks" :key="block.title" style="order: 2;">
        <h4 class="blocks__count">{{block.count}}</h4>
        <h6 class="blocks__info">{{block.title}}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info__left-title {
  font-family: "Work Sans", sans-serif;
  font-size: 67px;
  font-weight: 600;
  color: white;
}
.info__left-text {
  color: white;
  font-family: "Work Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
}
.info__left-btn {
  color: white;
  background-color: #A259FF;
  border: none;
  align-items: center;
  display: flex;
  padding: 20px 50px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  line-height: 22px;
  margin-bottom: 40px;
}
.info__left-btn img {
  padding-right: 12px;
}
.info__right_blocks {
  display: flex;
  justify-content: space-between;
}
.blocks__count {
  font-family: "Space Mono", monospace;
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 39px;
}
.blocks__info {
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
}
.info__left {
  width: 50%;
  padding-right: 30px;
}
.info__right {
  display: flex;
  flex-direction: column;
  background: #3B3B3B;
  border-radius: 20px;
}
.img__title{
  font-family: "Work Sans", sans-serif;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: white;
  margin-left:20px;
  margin-top: 20px;
  margin-bottom: 0;
}
.author{
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.author__name {
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: white;
  padding-left: 12px;
}
.info__right-btn,.info__left_blocks {
  display: none;
}
@media (max-width: 1063px) {
  .info__left-title {
    font-size: 38px;
  }
  .info__left-text {
    font-size: 16px;
    font-weight: 400;
  }
  .blocks__count {
    font-size: 22px;
  }
  .blocks__info {
    font-size: 16px;
  }
  .info__right {
  width: 50%;
  }
  .img__title {
    font-size: 16px;
  }
  .author__name{
    font-size: 10px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .info {
    flex-direction: column;
    align-items: center;
  }

  .info__left {
    width: 100%;
    padding-right: 0;
  }

  .info__right {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .info__left-title {
    font-size: 28px;
  }

  .info__left-text {
    font-size: 16px;
    line-height: 24px;
  }

  .info__left-btn {
    padding: 15px 30px;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .blocks__count {
    font-size: 22px;
    margin-right: 30px;
    margin-left: 30px;
  }

  .blocks__info {
    font-size: 16px;
    margin-right: 30px;
    margin-left: 20px;
  }
  .info__right img {
    width: 100%;
  }
  .info__left-btn {
    display: none;
  }
  .author{
    display: flex;
    height: 24px;
    width: 24px;
    margin-bottom: 24px;
  }

  .info__right-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    background-color: #A259FF;
    border: none;
    padding: 20px 50px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    line-height: 22px;
    margin-bottom: 40px;
  }
  .info__left_blocks{
    display: flex;
  }
  .info__right_blocks {
    display: none;
  }
}

</style>