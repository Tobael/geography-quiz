<script lang="ts">
import FlagQuiz from './FlagQuiz.vue';

export default {
  data() {
    return {
      gametype: '',
    }
  },

  methods: {
    singleplayer(): void {
      this.gametype = 'singleplayer'
    },

    multiplayer(): void {
      this.gametype = 'multiplayer'
    }
  },
}
</script>

<template>
  <div v-if="!gametype">
    <v-btn @click="singleplayer" variant="outlined">singleplayer</v-btn>
    <!-- <v-btn @click="multiplayer" variant="outlined">multiplayer</v-btn> -->
  </div>
  <div v-if="gametype">
    <div>{{gametype}}</div>
    <FlagQuiz />
  </div>
</template>

<style scoped>
</style>
