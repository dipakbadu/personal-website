
<template>
  <v-app>
    <v-toolbar 
      dark color="primary"
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" >
        <v-icon>reorder</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Deepak</router-link>  
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left dark>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


      <v-navigation-drawer
        v-model="drawer"
        fixed
        absolute
        app
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                  <img src="./assets/deepak-badu1.jpg" alt="">
              </v-list-tile-avatar>

              <v-list-tile-content> 
                <v-list-tile-title>
                  <router-link to="/" tag="span" style="cursor: pointer">Deepak</router-link>  
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
    
        <v-list class="pt-0" dense>
        <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>


    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <main>
              <router-view></router-view>
            </main>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  
  </v-app>
</template>

<script>
 export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'person_pin', title: 'About Me',link: '/Aboutme' },
          { icon: 'book', title: 'Education', link: '/education' },
          { icon: 'work', title: 'portfolio', link:'/projects' },
          { icon: 'contact_phone', title: 'Contact Me', link: '/contact' }
        ],
        right: null
      }
    }
  }
</script>