<template>
  <Canvas />
  <Dialog />
</template>

<script>
import Canvas from "./workspace/Canvas.vue";
import Dialog from "./loader/Dialog.vue";

export default {
  components: {
    Canvas,
    Dialog
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