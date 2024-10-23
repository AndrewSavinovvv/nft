<script setup>
import avatar1 from "@/assets/img/avatars/avatar1.png"
import avatar2 from "@/assets/img/avatars/avatar2.png"
import avatar3 from "@/assets/img/avatars/avatar3.png"
import avatar4 from "@/assets/img/avatars/avatar4.png"
import avatar5 from "@/assets/img/avatars/avatar5.png"
import avatar6 from "@/assets/img/avatars/avatar6.png"
import avatar7 from "@/assets/img/avatars/avatar7.png"
import avatar8 from "@/assets/img/avatars/avatar8.png"
import avatar9 from "@/assets/img/avatars/avatar9.png"
import avatar10 from "@/assets/img/avatars/avatar10.png"
import avatar11 from "@/assets/img/avatars/avatar11.png"
import avatar12 from "@/assets/img/avatars/avatar12.png"
import CardCreators from "@/components/creators/CardCreators.vue";

const users = [
  {
    id:1,
    avatar: avatar1,
    name: "Keepitreal",
    sales:"34.53 ETH"
  },
  {
    id:2,
    avatar: avatar2,
    name: "DigiLab",
    sales:"34.53 ETH"
  },
  {
    id:3,
    avatar: avatar3,
    name: "GravityOne",
    sales:"34.53 ETH"
  },
  {
    id:4,
    avatar: avatar4,
    name: "Juanie",
    sales:"34.53 ETH"
  },
  {
    id:5,
    avatar: avatar5,
    name: "BlueWhale",
    sales:"34.53 ETH"
  },
  {
    id:6,
    avatar: avatar6,
    name: "Mr Fox",
    sales:"34.53 ETH"
  },
  {
    id:7,
    avatar: avatar7,
    name: "Shroomie",
    sales:"34.53 ETH"
  },
  {
    id:8,
    avatar:avatar8,
    name: "Robotica",
    sales:"34.53 ETH"
  },
  {
    id:9,
    avatar: avatar9,
    name: "RustyRobot",
    sales:"34.53 ETH"
  },
  {
    id:10,
    avatar: avatar10,
    name: "Animakid",
    sales:"34.53 ETH"
  },
  {
    id:11,
    avatar: avatar11,
    name: "Dotgu",
    sales:"34.53 ETH"
  },
  {
    id:12,
    avatar: avatar12,
    name: "Ghiblier",
    sales:"34.53 ETH"
  },
]
</script>

<template>
  <div class="creators">
    <h1 class="creators__title">Top Creators</h1>
    <div class="creators__info">
      <h6 class="creators__text">Checkout Top Rated Creators on the NFT  Marketplace</h6>
      <button class="creators__btn">
        <img src="@/assets/img/RocketLaunch.png" alt="">
        View Rankings
      </button>
    </div>
    <div class="card">
    <CardCreators
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :avatar="user.avatar"
        :sales="user.sales"
    />
  </div>
    <button class="creators__btn1">
      <img src="@/assets/img/RocketLaunch.png" alt="">
      View Rankings
    </button>
  </div>
</template>

<style scoped>
.creators {
  margin-top: 50px;
}
.creators__title {
  font-family: "Work Sans", sans-serif;
  font-size: 38px;
  font-weight: 600;
  line-height: 45px;
  color: white;
  margin: 0;
}

.creators__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.creators__text {
  font-family: "Work Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  color: white;
  margin: 0;
}

.creators__btn img {
  padding-right: 12px;
}

.creators__btn {
  display: flex;
  align-items: center;
  background: none;
  color: white;
  cursor: pointer;
  border: 1px solid #A259FF;
  border-radius: 15px;
  padding: 19px 50px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
}
.creators__btn1 {
  display: none;
  align-items: center;
  background: none;
  color: white;
  cursor: pointer;
  border: 1px solid #A259FF;
  border-radius: 15px;
  padding: 19px 50px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
}
.card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 50px;
  justify-items: center;
}

@media (max-width: 1280px) {
  .card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 72px;
  }
  .creators__btn {
    padding: 15px 20px;
    margin-right: 50px;
  }
  .creators__title {
    font-size: 28px;
  }
  .creators__text {
    font-size: 16px;
  }
}

@media (max-width: 834px) {
  .creators__title, .creators__text {
    padding-left: 40px;
  }
  .creators__info {
    display: flex;
    gap: 0;
  }
}
@media (max-width: 767px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .creators__title {
    font-size: 28px;
  }
  .creators__text {
    display: flex;
    font-size: 16px;

  }
  .creators__btn {
    display: none;
  }
  .creators__btn1 {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 40px;
  }
  .card > *:nth-child(n+6) {
    display: none;
  }
  .creators {
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
  }
}

</style>