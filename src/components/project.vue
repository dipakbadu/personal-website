<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row class="mt-4" >
        <v-flex xs12 sm7 offset-sm3 class="mt-4">
         <v-card v-for="project in projects"
          :key="project.id"
          class="mt-5"
          >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline"> {{project.name}} </div>
            technology Used:
            <span class="grey--text">{{ project.technologies }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
            <h4> View More</h4>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
              {{project.description}}
           </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
  export default {
  data (){
      return {
          show: false,
           projects: [
               {
                name: 'Todo List',
                technologies: 'Bootstrap PHP',
                description: 'Saangai is a concept, concept of bringing ' +
                              'families and friends together, approach of knowing ' +
                            'likeminded people in ' +
                            'an easier way, playing travelling and investing together.',
               },
               {
                   name: 'Personal-site',
                   technologies: 'Vue Js',
                   description: ' personal webite'
               }
           ]
        }
     }
  }
</script>
