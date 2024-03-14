<script lang="ts">
import '../../node_modules/flag-icons/css/flag-icons.min.css'
import { CountryService } from '@/services/country.service'

export default {
  data() {
    return {
      current: CountryService.random(),
      score: 0,
      input: '',
    }
  },

  methods: {
    check() {
      if (CountryService.validate(this.input, this.current.names)) {
        this.score++
        this.input = ''
        this.current = CountryService.random()
      }
    },

    skip() {
      this.input = ''
      this.current = CountryService.random()
    },
  }
}
</script>

<template>
  <div class="flag-quiz">
    <h1>Guess the Flag</h1>
    <v-icon :icon="`fi fi-${current.code}`"></v-icon>
    <v-text-field hide-details="auto" v-model="input" label="Country" autofocus variant="outlined" @keyup="check"></v-text-field>
    <v-btn variant="outlined" @click="skip">skip</v-btn>
    <h2 class="score">{{ score }}</h2>
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
