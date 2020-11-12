<template>
  <div>
      <v-container>
          {{detailPeserta.namaUser}} <br>
     {{detailPeserta.emailUser}} <br>
     {{detailPeserta.tanggalLahir}} <br>
     {{detailPeserta.tempatLahir}} <br>
     {{detailPeserta.alamat}} <br>
     {{detailPeserta.nomorHape}} <br>
     {{detailPeserta.mediaSosial}} <br>
     {{detailPeserta.kotaAsal}} <br>
      </v-container>
     
  </div>
</template>

<script> 
import * as api from'@/api/praxis.js'
export default {
    data(){
        return{
            detailPeserta:[],

        }
    },
    methods: {
getApiPesertaDetail: function(id){
      const tt = localStorage.getItem('Bearer');

      api.detailPeserta(id,{
        headers:{
          Authorization:'Bearer '+tt
      }
      })
      .then(res=>{
       return res.data.result
      }).then(res=>{
        this.detailPeserta=res
      })
      .catch(err=>{
        console.log(err)
      })
    }
    },
     mounted(){
     console.log(this.getApiPesertaDetail(this.$route.params.id))
 }   
}
</script>

<style>

</style>