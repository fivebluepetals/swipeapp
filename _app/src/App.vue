<template>
  <Canvas />
  <Dialog v-show="init" @svgSubmitted="loadSvg($event)" />
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
      ],
      init: true
    }
  },

  methods: {
    loadSvg(event) {
      this.init = false;
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