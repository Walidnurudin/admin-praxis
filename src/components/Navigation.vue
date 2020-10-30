<template>
  <div>
    <!-- mobile -->
    <v-app-bar color="primary" dark fixed>
      <v-toolbar-title>
        <v-img :src="logo" width="50" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom class="mr-5">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" style="cursor: pointer" class="mr-5">
            <span class="white--text">Admin</span>
            <v-icon class="ml-2">mdi-arrow-down-drop-circle-outline</v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item to="/dashboard" style="cursor: pointer">
            <v-icon>mdi-apple-airplay</v-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Tampil-table" style="cursor: pointer">
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

      <!-- <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <!-- dekstop -->
    <!-- <v-navigation-drawer v-model="sideNav" fixed :temporary="!sideNav" class="warna" app :permanent="!sideNav"> -->
    <!-- <v-list dense>
        <router-link to="/admin/dashboard" class="text-decoration-none">
          <v-img src="@/assets/p.png" aspect-ratio="1" class="ukurangmb mb-9"></v-img>
          <v-spacer></v-spacer>
          <v-list-item link class="mb-4">
            <v-icon class="tulisan">mdi-apple-airplay</v-icon>

            <v-list-item-content>
              <v-list-item-title>
                <p class="tulisan2">Dashboard</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/admin/Tampil-table" class="text-decoration-none">
          <v-list-item link class="mb-4">
            <v-icon class="tulisan">mdi-table-account</v-icon>

            <v-list-item-content>
              <v-list-item-title>
                <p class="tulisan2">Tampil Table</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/admin/tambah-karya" class="text-decoration-none">
          <v-list-item link class="mb-4">
            <v-icon class="tulisan">mdi-creation</v-icon>

            <v-list-item-content>
              <v-list-item-title>
                <p class="tulisan2">Tambah Karya</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>-->
  </div>
</template>

<script>
import logo from "@/assets/p.png";
// import {mapGetters} from 'vuex'

export default {
  methods: {
    logout: function() {
      localStorage.removeItem("Bearer");
      return this.$router.push({ name: "Home" });
    }
  },
  computed: {
    // ...mapGetters([
    //   'gettersUser'
    // ])
  },
  data: () => {
    return {
      logo,
      sideNav: false
    };
  }
};
</script>

<style scoped>
.warna {
  background-color: #0f3057;
}
.tulisan {
  color: white;
  margin-bottom: 15px;
  font-size: 15px;

  margin-left: 10px;
}

.ukurangmb {
  height: 100px;
  width: 100px;
  display: block;
  margin: auto;
}
.tulisan1 {
  color: white;
  text-align: center;
}
.tulisan2 {
  font-size: 19px;
  color: white;

  margin-left: 10px;
}
.tulisan3 {
  margin-top: 2px;
  margin-right: 3px;
}
</style>