<template>
  <div class="mt-15">
    <v-container>
      <h1>
        <!-- <v-icon>mdi-desktop-mac-dashboard</v-icon> -->
        Dashboard
      </h1>

      <v-row dense>
        <v-col cols="12" sm="6" md="4" v-for="(item, index) in 6" :key="index">
          <v-card max-width="350" color="#115173" dark>
            <div class="card-body-icon">
              <font-awesome-icon :icon="crow" size="2x" />
            </div>
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

<style scoped>
.card-body-icon {
  position: absolute;
  z-index: 0;
  top: 25px;
  right: 4px;
  opacity: 0.4;
  font-size: 84px;
}
</style>