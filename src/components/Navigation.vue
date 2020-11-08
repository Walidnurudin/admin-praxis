<template>
  <div>
    <v-app-bar color="primary" dark fixed>
      <v-toolbar-title>
        <v-img :src="logo" width="50" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom class="mr-5">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" style="cursor: pointer" class="mr-5">
            <span class="white--text">Selamat datang admin {{gettersUser}}</span>
            <v-icon class="ml-2">mdi-arrow-down-drop-circle-outline</v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item to="/" style="cursor: pointer">
            <v-icon>mdi-apple-airplay</v-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/tampil-table" style="cursor: pointer">
            <v-icon>mdi-table-account</v-icon>
            <v-list-item-title>Tampil Table</v-list-item-title>
          </v-list-item>

          <v-list-item to="/tambah-karya" style="cursor: pointer">
            <v-icon>mdi-creation</v-icon>
            <v-list-item-title>Tambah Karya</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item style="cursor: pointer" @click="logout()">
            <v-icon>mdi-logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import logo from "@/assets/p.png";
import {mapGetters} from 'vuex';

export default {
  methods: {
    logout: function () {
      localStorage.removeItem("Bearer");
      return this.$router.push({ name: "Login" });
    },
  },
  data: () => {
    return {
      logo,
      sideNav: false,
    };
  },
  computed: {
    ...mapGetters([
      'gettersUser'
    ])
  },
  mounted(){
    console.log(this.gettersUser)
  }
};
</script>