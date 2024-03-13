<script lang="ts">
import '../../node_modules/flag-icons/css/flag-icons.min.css'
import * as countryService from '@/services/country.service'

export default {
  data() {
    return {
      current: countryService.random(),
      score: 0,
      input: '',
    }
  },

  methods: {
    check() {
      if (this.current.names.includes(this.input.toLowerCase())) {
        this.score++
        this.input = ''
        this.current = countryService.random()
      }
    }
  }
}
</script>

<template>
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
</template>

<style scoped>
.flag .fi {
  width: 100%;
  height: 10rem;
}

.score {
  width: 100%;
  text-align: center;
}

div {
  margin-top: 0.5rem;
}
</style>
