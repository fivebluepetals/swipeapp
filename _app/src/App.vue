<template>
  <Canvas :content="canvasContent" />
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
      init: true,
      canvasContent: ''
    }
  },

  methods: {
    loadSvg(event) {
      // strip out SVG content and display it in the canvas
      let svgElt = new DOMParser()
              .parseFromString(event.svg, "image/svg+xml"),
          svg = svgElt.documentElement.innerHTML;

      this.canvasContent = svg;
      console.log(this.canvasContent);
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