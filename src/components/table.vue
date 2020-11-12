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
            <v-icon class="mr-3" @click="detailPeserta(item._id)"
              >mdi-card-account-details</v-icon
            >
            <v-icon class="mr-3" @click="deletePeserta(item._id)"
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
     deletePeserta(id) {
      Swal.fire({
        title:'Apakah Anda Yakin Menghapus Data Ini?',
        showDenyButton: true,
        denyButtonText: 'Batal',
        confirmButtonText:'Hapus',
      }).then((res) =>{
        if(res.isConfirmed){
          api.deletePeserta({
            headers:{
              Authorization:'Bearer '+localStorage.getItem('Bearer')
            }
          },id)
          .then((res)=>{
            this.$swal({
              icon:'success',
              title:'Berhasil Menghapus Data'
            });
            console.log(res)
          })
          .catch(err =>{
            this.$swal({
              icon:'error',
              title:'Sinyal Error'
            });
            console.log(err)
          })
          this.$store.dispatch('getApiPeserta')
        }
      })
    },
    detailPeserta(id){
      console.log(id)
      this.$router.push({
        path: `/peserta/${id}`
      })
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
  }
};
</script>