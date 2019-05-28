<template>
  <v-timeline align-top>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
       >
      <v-card
        :color="item.color"
        dark
        >
        <v-card-title class="title"> {{item.title}} </v-card-title>
          <v-card-text class="white text--primary">
            <p> {{item.description}} </p>
            <v-btn
              :color="item.color"
              class="mx-0"
              outline
              >
              <a :href="'//' + item.link" target="_blank">  {{item.buttom}} </a> 
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'SLC',
          link: 'facebook.com/pages/category/School/Shree-Mahendra-Model-Higher-Secondary-School-Darchula-518491968178301/',
          buttom: 'visit',
          color: 'red lighten-2',
          icon: 'school',
          description: 'Completed School Level Education. From Mahendra Model HSS khalanga Darchula '
        },
        {
          link: 'facebook.com/www.triton.edu.np/',
          buttom: 'visit',
          title: 'National Education Board',
          description: ' completed +2 level  form triton Internatonal College tinkune, Kathmandu',
          color: 'purple darken-1',
          icon: 'school'
        },
        {
          buttom: 'visit',
          link: 'kcmit.edu.np',
          title: 'Tribhuvan University',
          description: 'I am currently enrolled at KCMIT. for BIM Program ',
          color: 'green lighten-1',
          icon: 'school'
        },
      ]
    })
  }
</script>
