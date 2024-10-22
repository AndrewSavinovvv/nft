<script setup>
import BrowseCardComponent from "@/components/browse/BrowseCardComponent.vue";
import browse1 from "@/assets/img/browse/browse1.png"
import browse2 from "@/assets/img/browse/browse2.png"
import browse3 from "@/assets/img/browse/browse3.png"
import browse4 from "@/assets/img/browse/browse4.png"
import browse5 from "@/assets/img/browse/browse5.png"
import browse6 from "@/assets/img/browse/browse6.png"
import browse7 from "@/assets/img/browse/browse7.png"
import browse8 from "@/assets/img/browse/browse8.png"

import paint from "@/assets/img/browse/PaintBrush.png"
import swatches from "@/assets/img/browse/Swatches.png"
import music from "@/assets/img/browse/MusicNotes.png"
import camera from "@/assets/img/browse/Camera.png"
import video from "@/assets/img/browse/VideoCamera.png"
import magic from "@/assets/img/browse/MagicWand.png"
import ball from "@/assets/img/browse/Basketball.png"
import planet from "@/assets/img/browse/Planet.png"

const categories = [
  { name: 'Art', img1: browse1, img2: paint },
  { name: 'Collectibles', img1: browse2, img2: swatches },
  { name: 'Music', img1: browse3, img2: music  },
  { name: 'Photography', img1: browse4, img2: camera },
  { name: 'Video', img1: browse5, img2: video },
  { name: 'Utility', img1: browse6, img2: magic  },
  { name: 'Sport', img1: browse7, img2: ball },
  { name: 'Virtual Worlds', img1: browse8, img2: planet },
];
</script>

<template>
  <div class="browse">
    <h1 class="browse__title">Browse Categories</h1>
    <div class="browse__grid">
      <BrowseCardComponent
          v-for="(category, index) in categories"
          :key="index"
          :name="category.name"
          :img1="category.img1"
          :img2="category.img2"
      ></BrowseCardComponent>
    </div>
  </div>
</template>

<style scoped>
.browse {
  padding-top: 80px;
}
.browse__title {
  font-size: 38px;
  color: white;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
}

.browse__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}
@media  (max-width: 1023px) {
  .browse__title {
    font-size: 28px;
  }
}
@media   (max-width: 767px) {
  .browse__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

