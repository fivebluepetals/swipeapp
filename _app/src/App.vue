<template>
  <svg id="app"
       xmlns="http://www.w3.org/2000/svg">
    <Lever />
  </svg>
</template>

<script>
import Lever from "./controls/Lever.vue"

export default {
  components: {
    Lever
  },

  data() {
    return {
      groups: [
        {},
      ]
    }
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
</style>