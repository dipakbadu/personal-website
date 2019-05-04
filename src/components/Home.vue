<template>
   <div>
      <v-img
         :src="require('../assets/cover.jpg')"
         aspect-ratio="2.75" alt="deepak Badu"
      >
      </v-img>
        <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
         <v-flex xs12 sm7 offset-sm3  class="mt-5">
                <v-card-text >
                  <typewriter
                     :speed="200"
                     :repeat='Infinity'
                     :erase-delay='250'
                     :interval="300"
                     :words='["Hello Its Me Deepak Badu","Web Devloper!"]'>
                  </typewriter>
                 </v-card-text>
        </v-flex>
     </v-layout>
  </v-container>
   </div>
</template>
<script>
export default {

}
</script>
<style>
 typewriter{
    color: red;
    background-color: red;
    text-emphasis-color: red;

 }
</style>



