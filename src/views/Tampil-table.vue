<template>
  <div class="mt-15">
    <navigasi/>
    <tabl />
  </div>
</template>

<script>
import tabl from "@/components/table.vue";
import navigasi from "@/components/Navigation.vue"

export default {
  components: {
    tabl,
    navigasi
  }
};
</script>