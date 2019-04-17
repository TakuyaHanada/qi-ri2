<template>
  <v-btn
    v-if="this.$route.path === '/'"
    absolute
    dark
    fab
    fixed
    bottom
    right
    color="pink mb-5"
    v-on:click="toRoute('/new')"
  >
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
import router from '../router'

export default {
  methods: {
    toRoute: (path) => {
      router.push(path)
    }
  }
}
</script>
