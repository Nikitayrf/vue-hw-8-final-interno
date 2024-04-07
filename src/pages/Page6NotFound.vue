<template>
  <section class="page6">
    <div class="page6__left">
      <h1 class="page6__title">404</h1>
      <h2 class="page6__heading">We are sorry, but the page you requested was not found</h2>
      <router-link class="header__link" to="/home">
        <BtnComponent>Back To Home</BtnComponent>
      </router-link>

    </div>
    <div class="page6__right">
      <img src="@/assets/img/404.png" alt="404">
    </div>
  </section>
</template>

<script>

import BtnComponent from "@/components/UI/BtnComponent.vue";

export default {
  name: 'Page6NotFound',
  components: {
    BtnComponent
  },
}
</script>


<style scoped lang="scss">
.page6 {
  margin: 0 auto 60px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 81px;

  &__title {
    color: $colorPrimary;
    font-family: dm, sans-serif;
    font-size: 205px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  &__heading {
    color: $colorPrimary2;
    font-family: dm, serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 23px;
  }


}
</style>