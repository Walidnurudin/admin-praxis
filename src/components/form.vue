<template>
  <v-container>
    <h1>karya</h1>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col>
          <v-text-field v-model="form.title" label="Title project" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-textarea
            name="input-7-1"
            outlined
            label="Deskripsi"
            auto-grow
            v-model="form.deskripsi"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="form.github" label="Link Github" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="form.youtube" label="Link Youtube" outlined></v-text-field>
        </v-col>
      </v-row>

      <div v-for="i in add" :key="i">
        <v-row>
          <v-col>
            <v-text-field v-model="form.anggota.nama" label="Nama anggota" outlined></v-text-field>
          </v-col>
        </v-row>
      </div>

      <v-row>
        <v-col>
          <v-btn class="mr-3" depressed color="primary" @click="tambah()">add</v-btn>
          <v-btn depressed color="error" @click="hapus()">hapus</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn depressed color="primary">Kirim</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      add: 1,
      form: {
        title: "",
        deskripsi: "",
        github: "",
        youtube: "",
        anggota: [
          {
            nama: ""
          }
        ]
      }
    };
  },
  methods: {
    tambah() {
      this.add = this.add + 1;
      console.log(this.add);
    },
    hapus() {
      if(this.add > 1) {
        this.add = this.add - 1;
      }
      console.log(this.add);
    }
  }
};
</script>

<style>
</style>