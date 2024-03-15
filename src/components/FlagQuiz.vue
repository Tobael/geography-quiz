<script lang="ts">
import '../../node_modules/flag-icons/css/flag-icons.min.css'
import { SinglePlayer } from '@/services/singleplayer.service'

export default {
  data() {
    return {
      player: new SinglePlayer(),
      input: '',
    }
  },

  methods: {
    check(): void {
      if (this.player.validate(this.input)) {
        this.input = ''
      }
    },

    skip(): void {
      this.input = ''
      this.player.skip()
    },
  }
}
</script>

<template>
  <div class="flag-quiz">
    <h1>Guess the Flag</h1>
    <v-icon :icon="`fi fi-${player.current.code}`"></v-icon>
    <v-text-field hide-details="auto" v-model="input" label="Country" autofocus variant="outlined" @keyup="check"></v-text-field>
    <v-btn variant="outlined" @click="skip">skip</v-btn>
    <h2 class="score">{{ player.score }}</h2>
  </div>
</template>

<style scoped>
.flag-quiz {
  display: flex;
  flex-direction: column;
}

.flag-quiz > * {
  margin-top: .25rem;
  margin-bottom: .25rem;
}

.fi {
  width: 100%;
  height: 10rem;
}

.score {
  text-align: center;
}
</style>
