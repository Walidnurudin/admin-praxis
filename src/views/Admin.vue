<template>
  <div>
    <navigasi />
    <router-view></router-view>
  </div>
</template>

<script>
import navigasi from "@/components/admin/Navigation.vue";

export default {
  components: {
    navigasi
  },
  async beforeCreate() {
    await this.$store.dispatch("getApiUser");
    this.$store.dispatch("getApiPeserta");
    this.$store.dispatch("getApiFiles");
    console.log("local ", localStorage.getItem("Bearer"));
    
    if (localStorage.getItem("Bearer")) {
      scrollTo(0, 0);
    } else {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>