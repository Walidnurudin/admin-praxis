<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h3>Dashboard Admin Praxis academy</h3>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="gettersApiPeserta"
          :search="search"
        >
          <template v-slot:item.actions="{ item }">
            <v-progress-circular
              v-if="isDownload"
              indeterminate
              color="primary"
            ></v-progress-circular>
            <v-icon class="mr-3" v-else @click="download(item.id)"
              >mdi-arrow-down-thin-circle-outline</v-icon
            >
            <v-icon class="mr-3" @click="deleteItem(item.userId)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as api from "../api/praxis";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "userId" },
        {
          text: "Nama",
          value: "namaUser",
        },
        { text: "Nama kampus", value: "namaKampus" },
        { text: "Program", value: "program" },
        { text: "Email", value: "emailUser" },
        // { text: "CV", value: "cv", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["gettersApiPeserta", "gettersCV"]),
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      Swal.fire({
        title: "Apa kamu yakin ingin menghapus?",
        showDenyButton: true,
        denyButtonText: "ga jadi",
        confirmButtonText: `Hapus`,
      }).then((res) => {
        if (res.isConfirmed) {
          api
            .deletePeserta(id, {
              headers: {
                Authorization: "Bearer: " + localStorage.getItem("Bearer"),
              },
            })
            .then((res) => {
              this.$swal({
                icon: "success",
                title: "Berhasil dihapus",
              });
              console.log(res);
              this.$store.dispatch("getApiPeserta");
            })
            .catch((err) => console.log(err));
        }
      });
    },
    download(id) {
      console.log(id);
      api
        .downloadFiles(id, {
          headers: {
            Authorization: "Bearer: " + localStorage.getItem("Bearer"),
          },
        })
        // axios
        //   .post(`http://192.168.43.56:8080/praxis/data/download/${id}`, {
        //     headers: {
        //       Authorization: "Bearer: " + localStorage.getItem("Bearer")
        //     }
        //   })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.$store.dispatch('getApiPeserta')
    console.log('mount', this.gettersApiPeserta);
  },
};
</script>