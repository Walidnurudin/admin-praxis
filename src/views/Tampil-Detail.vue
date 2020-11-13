<template>
  <div>
    <navigasi />
    <div class="text-center mt-16" v-if="this.loading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-container v-else>
      <v-row class="mt-16">
        <v-col cols="12" sm="6">
          <v-card max-width="600">
            <v-card-text>
              <div>
                <h1>DATA DIRI</h1>
                <br />
                <h3>nama:</h3>
                <span>{{ detailPeserta.namaUser }}</span>
                <h3>Alamat:</h3>
                <span>{{ detailPeserta.alamat }}</span>
                <h3>Email:</h3>
                <span>{{ detailPeserta.emailUser }}</span>
                <h3>Tempat Lahir:</h3>
                <span>{{ detailPeserta.tempatLahir }}</span>
                <h3>Tanggal Lahir:</h3>
                <span>{{ detailPeserta.tanggalLahir }}</span>
                <h3>Nomor Telepon:</h3>
                <span>{{ detailPeserta.nomorHape }}</span>
                <h3>Kota Asal:</h3>
                <span>{{ detailPeserta.kotaAsal }}</span>
                <h3>Media Sosial:</h3>
                <span>{{ detailPeserta.mediaSosial }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card max-width="600">
            <v-card-text>
              <div>
                <h1>Data Praxis Academy</h1>
                <br />
                <h3>Program:</h3>
                <span>{{ detailPeserta.program }}</span>
                <h3>Alasan Ikut:</h3>
                <span>{{ detailPeserta.alasanIkut }}</span>
                <h3>Pengalaman Kerja:</h3>
                <span>{{ detailPeserta.pengalamanKerja }}</span>
                <h3>Pengalaman Project:</h3>
                <span>{{ detailPeserta.pengalamanProject }}</span>
                <h3>Komitmen:</h3>
                <span>{{ detailPeserta.komitmen }}</span>
                <h3>Referensi:</h3>
                <span>{{ detailPeserta.referensi }}</span>
                <h3>Mengetahui Bootcamp:</h3>
                <span>{{ detailPeserta.bootCamp }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card max-width="600">
            <v-card-text>
              <div>
                <h1>Pendidikan</h1>
                <br />
                <h3>Nama Kampus:</h3>
                <span>{{ detailPeserta.namaKampus }}</span>
                <h3>Pendidikan:</h3>
                <span>{{ detailPeserta.pendidikan }}</span>
                <h3>Semester:</h3>
                <span>{{ detailPeserta.semester }}</span>
                <h3>Alamat Kampus:</h3>
                <span>{{ detailPeserta.alamatKampus }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card max-width="600">
            <v-card-text>
              <div>
                <h1>Daftar Riwayat Hidup</h1>
                <br />
                <v-img :src="detailPeserta.uploadedFiles" width="500px"></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as api from "@/api/praxis.js";
import navigasi from "@/components/Navigation.vue";

export default {
  data() {
    return {
      detailPeserta: [],
      loading: false,
    };
  },
  components: {
    navigasi,
  },
  methods: {
    getApiPesertaDetail: function (id) {
      this.loading = true;
      const tt = localStorage.getItem("Bearer");

      api
        .detailPeserta(id, {
          headers: {
            Authorization: "Bearer " + tt,
          },
        })
        .then((res) => {
          return res.data.result;
        })
        .then((res) => {
          this.detailPeserta = res;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getApiPesertaDetail(this.$route.params.id);
  },
};
</script>

<style>
</style>