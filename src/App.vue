<template>
  <v-app>
    <navigasi/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navigasi from "./components/Navigation.vue"

export default {
  components: {
    navigasi
  },
  beforeCreate() {
    
    if (localStorage.getItem("Bearer")) {
      scrollTo(0, 0);
    } else {
      this.$router.push({ name: "Home" });
    }
  }
}
</script>

<style>

</style>