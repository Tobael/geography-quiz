<script lang="ts">
import '../../node_modules/flag-icons/css/flag-icons.min.css'
import * as countries from '@/assets/countries.json'

export default {
  data() {
    return {
      current: this.randomCountry(),
      score: 0,
      input: '',
    }
  },

  methods: {
    randomCountry() {
      const keys = Object.keys(countries)
      const random = (keys.length * Math.random()) << 0
      const countryCode = keys[random]
      const countryNames = countries[countryCode]
      return {
        code: countryCode.toLowerCase(),
        names: countryNames.map(c => c.toLowerCase()),
      }
    },

    check() {
      if (this.current.names.includes(this.input.toLowerCase())) {
        this.score++
        this.input = ''
        this.current = this.randomCountry()
      }
    }
  }
}
</script>

<template>
  <div class="flag-quiz">
    <h1>Guess the Flag</h1>
    <hr>
    <div class="flag">
      <v-icon :icon="`fi fi-${current.code}`"></v-icon>
    </div>
    <div class="input">
      <v-text-field v-model="input" label="Country" autofocus variant="outlined" @keyup="check"></v-text-field>
    </div>
    <hr>
    <div class="score">
      {{ score }}
    </div>
  </div>
</template>

<style scoped>
.flag-quiz {
  display: flex;
  flex-direction: column;
}

.flag .fi {
  width: 100%;
  height: 10rem;
}

.score {
  width: 100%;
}
</style>
