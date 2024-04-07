<template>
  <div id="app">
    <HeaderPage />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  name: "App",
  components: {
    HeaderPage,
    FooterComponent,
  }
}
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  gap: 20px;

}
</style>