<template>
        <v-flex xs12>
          <v-card
              color="black"
              dark
              flat
              tile
            >
              <v-window v-model="onboarding">
                <v-window-item
                  v-for="n in aboutme"
                  :key="`card-${n}`"
                >
                  <v-card
                    color="transparent"
                    height="200"
                  >
                    <v-layout
                      align-center
                      justify-center
                      fill-height
                      tag="v-card-text"
                    >
                      {{ n.text }}
                    </v-layout>
                  </v-card>
                </v-window-item>
              </v-window>

              <v-card-actions class="justify-space-between">
                <v-btn
                  flat
                  @click="prev"
                >
                  <v-icon>fast_rewind</v-icon>
                </v-btn>
                <v-item-group
                  v-model="onboarding"
                  class="text-xs-center"
                  mandatory
                >
                  <v-item
                    v-for="n in aboutme"
                    :key="`btn-${n}`"
                  >
                    <v-btn
                      slot-scope="{ active, toggle }"
                      :input-value="active"
                      icon
                      @click="toggle"
                    >
                      <v-icon>stop</v-icon>
                    </v-btn>
                  </v-item>
                </v-item-group>
                <v-btn
                  flat
                  @click="next"
                >
                  <v-icon>fast_forward</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
</template>
<script>
  export default {
    data: () => ({
      aboutme: [
          {  text: 'Hello!! I am Dipak Raj Badu from Darchula.' },
          {  text: 'Currently studying Bachelor of Information Management in KCMIT, Old Baneswor'},
          {  text: 'I am interested in Web Development' }
      ],
      onboarding: 0
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
</script>
