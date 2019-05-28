<template>
    <div>
      <v-img
        :src="require('../assets/cover.jpg')"
         aspect-ratio="1.9" alt="deepak Badu"
         height="400px"
      >
      </v-img>
    <v-container grid-list-xs text-xs-center>
      <v-layout row wrap>
        <h1 class="text-align">
          <typewriter
            :speed="200"
            :repeat='Infinity'
            :erase-delay='700'
            :interval="400"
            :words='["Its Me Dipak Badu.","I am Web Devloper!!"]'>
            Hello!! 
          </typewriter>
        </h1>
      </v-layout>
    </v-container>
    </div>  
</template>
<script>
export default {

}
</script>
<style>
 h1{
    color: #1976d2 !important;
 }
</style>



