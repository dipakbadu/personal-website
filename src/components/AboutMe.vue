<template>
  <v-container grid-list-md text-xs-center>
  <v-layout  row class="mt-5" >
    <v-flex xs12 sm7 offset-sm3 class="mt-4">
      <v-card>
        <v-toolbar flat dark>
          <v-toolbar-title class="text--center">view More About me</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
   export default {
    data () {
      return {
        items: [
          {
            action: 'person',
            title: 'Name',
            items: [
              { title: 'Deepak Badu' }
            ]
          },
          {
            action: 'phone',
            title: 'Phone ',
            items: [
              { title: '9860179354' }
            ]
          },
          {
            action: 'email',
            title: 'Email',
            active: true,
            items: [
              { title: 'dips.badu@gmail.com' },
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'I am currently enrolled at KCMIT For BIM program' }
            ]
          },
          {
            action: 'web',
            title: 'Website',
            items: [
              { title: 'dipakbadu.com.np' }
            ]
          },
          {
            action: 'location_on',
            title: 'Permanent Address',
            items: [
              { title: 'Mahakali-4, Darchula' }
            ]
          },
          {
            action: 'location_on',
            title: 'Address',
            items: [
              { title: 'New Baneshwor, kathmandu' }
            ]
          },
        ]
      }
    }
  }
</script>