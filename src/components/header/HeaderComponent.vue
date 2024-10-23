<script setup>

</script>

<template>
  <div class="header">
    <router-link to="/" class="header__logo">
      <img src="@/assets/img/logo/logo.png" alt="Logo">
    </router-link>
    <div class="burger-menu">
      <span class="burger-menu__top"></span>
      <span class="burger-menu__middle"></span>
      <span class="burger-menu__bottom"></span>
    </div>
    <nav class="header__nav">
      <ul class="header__nav__list">
        <li><router-link to="/market">Marketplace</router-link></li>
        <li><router-link to="/rank">Rankings</router-link></li>
        <li><router-link to="/wallet">Connect a wallet</router-link></li>
      </ul>
      <button class="header__btn">
        <img src="@/assets/img/user.png" alt="User Icon">
        Sign Up
      </button>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 50px;
}

.header__nav__list {
  display: flex;
  list-style: none;
  padding-right: 30px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.header__btn {
  display: flex;
  background-color: #A259FF;
  color: white;
  padding: 20px 31px;
  border: none;
  border-radius: 25px;
  align-items: center;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.header__btn img {
  padding-right: 12px;
}

.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.burger-menu span {
  width: 25px;
  height: 2px;
  background-color: white;
  margin: 4px;
}

.header__nav__list li a {
  color: white;
  text-decoration: none;
  font-family: "Work Sans", sans-serif;
  padding: 12px 20px;
}

@media (max-width: 1280px) {
  .header__nav {
    display: none;
  }
  .burger-menu {
    display: flex;
    .burger-menu__middle {
      width: 35px;
    }
  }
  .header__logo img {
    height: 24px;
  }
}
@media (max-width: 834px) {
  .header__logo img {
    height: 24px;
  }
  .header {
    padding: 15px 50px;
  }
  .burger-menu span {
    width: 20px;
    height: 1px;
    .burger-menu__middle {
      width: 30px;
    }
  }

}
@media (max-width: 640px) {
  .header__logo img {
    height: 24px;
  }
  .header {
    padding: 15px 30px;
  }
}
</style>