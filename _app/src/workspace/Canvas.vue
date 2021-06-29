<template>
  <div id="canvas-container">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
        id="main-canvas"
        v-html="content"
    >
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="control-overlay"
    >
      <pattern id="Pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="0" cy="0" r="1" fill="#aaa" />
      </pattern>
      <rect fill="url(#Pattern)" width="100%" height="100%"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      svgContent: this.content
    };
  }
}
</script>

<style>
#canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#main-canvas {
  background-color: #eee;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

#control-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
