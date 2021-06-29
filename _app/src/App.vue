<template>
  <Canvas :content="canvasContent" />
  <Dialog v-show="showLoader" @svgSubmitted="loadSvg($event)" />
  <button v-show="!showLoader" @click="toggleDialog(true)">Show Loader</button>
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
      showLoader: true,
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
      this.toggleDialog(false);
    },

    toggleDialog(doShow) {
      this.showLoader = doShow;
    }
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100vh;
}

button {
  position: fixed;
  padding: 10px;
  background-color: olivedrab;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>