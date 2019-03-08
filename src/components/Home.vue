<template>
    <v-app >
       <v-layout row wrap class="mt-4">
          <v-flex class="mt-4">
              <v-img                  
                  :src="require('../assets/deepak.jpg')"
                   alt="Deepak Badu" 
                    aspect-ratio="1.3">
              </v-img>
            </v-flex>
       </v-layout>
                <v-content class="hidden-md-and-up">
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                  <v-avatar size="250" class="ml-4">
                      <img 
                  :src="require('../assets/deepak.jpg')"
                   alt="Deepak Badu"   
                      >
                    </v-avatar>

                  <v-list two-line>
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="indigo">phone</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>
                            <a
                                href="tel:+9779860179354"
                            >
                                9860179354
                            </a>
                            </v-list-tile-title>
                        <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-icon>chat</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="indigo">phone</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>
                            <a href="tel:+9779818529545">
                                9818529545
                            </a>
                            </v-list-tile-title>
                        <v-list-tile-sub-title>mobile</v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-icon>chat</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="indigo">mail</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>        
                          <a
                            href="mailto:dips.badu@gmail.com?Subject=Contact me"
                            >
                            dips.badu@gmail.com 
                         </a>
                         </v-list-tile-title>
                        <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="indigo">location_on</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>New Baneshwor</v-list-tile-title>
                        <v-list-tile-sub-title>Kathmandu, Nepal</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
        </v-content>
  </v-app>
</template>
<script>
export default {
}
</script>
<style>
    a{
        text-decoration: none;
        color:black;
    }
</style>

