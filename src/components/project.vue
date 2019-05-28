<template>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text mt-2"
              v-for="project in projects"
              :key="project.title"
            >
              <v-card-title primary-title>
                <div>
                  <div class="headline" > {{project.title}} </div>
                  <span> {{project.description}} </span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
</template>
<script>
export default {
      data () {
        return {
          projects: [
            {title: 'Todo List',description:"Todo List developed using PHP and Bootstrap."},
            {title: 'Personal Website',description:"My personal website developed using VusJS and Vuetify"}
          ]
        }
  }
}
</script>
