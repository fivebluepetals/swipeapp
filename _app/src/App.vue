<template>
  <Canvas />
</template>

<script>
import Canvas from "./workspace/Canvas.vue"

export default {
  components: {
    Canvas
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
}
</style>