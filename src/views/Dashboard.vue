<template>
  <div class="mt-15">
    <navigasi />
    <v-container>
      <h1>Dashboard</h1>

      <v-row dense>
        <v-col cols="12" sm="6" md="4" v-for="(item, index) in 6" :key="index">
          <v-card max-width="350" color="#115173" dark>
            <v-card-title class="headline">Frontend Developer</v-card-title>
            <div class="display-4">80</div>

            <v-card-actions>
              <v-btn text>Detail >>></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import navigasi from "@/components/Navigation.vue";

export default {
  components: {
    navigasi,
  },
};
</script>