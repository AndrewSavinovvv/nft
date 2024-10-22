<script setup>

</script>

<template>
  <div class="footer">

      <div class="footer__left">
        <div>
          <img class="footer__logo" src="@/assets/img/logo/logo.png" alt="">
        </div>
        <h6 class="footer__text">NFT marketplace UI created <br> with Anima for Figma.</h6>
        <h6 class="footer__text">Join our community</h6>
        <ul class="social__list">
          <li><img src="@/assets/img/footer/DiscordLogo.png" alt=""></li>
          <li><img src="@/assets/img/footer/YoutubeLogo.png" alt=""></li>
          <li><img src="@/assets/img/footer/TwitterLogo.png" alt=""></li>
          <li><img src="@/assets/img/footer/InstagramLogo.png" alt=""></li>
        </ul>
      </div>
      <div class="footer__nav">
        <h4 class="footer__nav__title">Explore</h4>
        <a class="footer__nav__item" href="">Marketplace</a>
        <a class="footer__nav__item"  href="">Rankings</a>
        <a class="footer__nav__item"  href="">Connect a wallet</a>
      </div>
      <div class="footer__right">
        <h4 class="footer__right__title">Join our weekly digest</h4>
        <h6 class="footer__right__text">Get exclusive promotions & updates <br> straight to your inbox.</h6>
        <div class="footer__sub">
          <input class="footer__input" type="text" placeholder="Enter your email here" />
          <button class="footer__btn">
            <img class="footer__btn__icon" src="@/assets/img/footer/email.png" alt="">
            Subscribe</button>
        </div>
      </div>

  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  background: #3B3B3B;
  margin-top: 80px;
}

.footer__left {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 40px;
}
.social__list{
  display: flex;
  list-style: none;
  padding: 0;
}
.footer__logo {
  height: 32px;
}
.footer__text {
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #CCCCCC;
  margin: 20px 0;
}
.social__list li {
  margin-right: 10px;
}
.footer__nav {
  display: flex;
  flex-direction: column;
}
.footer__nav__title {
  font-size: 22px;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  color: white;
}
.footer__nav__item{
  text-decoration: none;
  color: #CCCCCC;
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  margin-bottom: 20px;
  font-weight: 400;
}
.footer__right__title {
  font-size: 22px;
  font-weight: 700;
  font-family: "Space Mono", monospace;
  color: white;
}
.footer__right__text {
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #CCCCCC;
}
.footer__sub {
  position: relative;
}
.footer__input {
  padding: 19px 20px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  color: black;
}
.footer__input::placeholder {
  color: black;
  opacity: 1;

}
.footer__btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 19px 10px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  background: #A259FF;
  color: white;
  border: none;
  cursor: pointer;
}
.footer__btn__icon {
  margin-right: 8px;
  display: none;
}
@media  (max-width: 1023px) {
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer__btn {
    position: absolute;
    bottom: 0;
    right: -20px;
    padding: 19px 20px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    background: #A259FF;
    color: white;
    border: none;
    cursor: pointer;
  }
  .footer__sub {
    position: relative;
  }
}
@media (max-width: 767px) {
  .footer__sub {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer__btn {
    width: 100%;
    margin-top: 10px;
    position: static;
    align-items: center;
  }
  .footer__btn__icon {
    display: inline;
    width: 16px;
    height: 16px;
  }
}
</style>