<template>
  <div class="mt-15">
    <navigasi/>
    <fom />
  </div>
</template>

<script>
import fom from "@/components/form.vue";
import navigasi from "@/components/Navigation.vue"

export default {
  components: {
    fom,
    navigasi
  }
};
</script>