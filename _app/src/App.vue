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
      canvasContent: '<circle cx="20" cy="30" r="80" fill="#a2cc11" /><circle cx="100" cy="100" r="50" />'
    }
  },

  methods: {
    loadSvg(event) {
      let svgElt = new DOMParser()
              .parseFromString(event.svg, "image/svg+xml"),
          svg = svgElt.documentElement.innerHTML;

      this.canvasContent = svg;
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