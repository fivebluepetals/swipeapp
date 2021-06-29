<template>
  <div id="load-dialog">
    <h1>
      start
    </h1>
    <label>Copy/paste code inside <pre>svg</pre>-tag:</label>
    <textarea id="#svg-code" />
    <div class="button-bar">
      <button @click="load">animate!</button>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
  data() {
    return {}
  },

  methods: {
    load() {
      let textArea = this.$el.querySelector("textarea"),
          sanitized = DOMPurify.sanitize(textArea.value,
              {USE_PROFILES: {mathMl: true, svg: true, svgFilters: true}});

      this.$emit("svgSubmitted", {
        svg: sanitized
      });
    }
  }
}
</script>

<style scoped>
#load-dialog {
  position: fixed;
  width: 60vw;
  height: 30vh;
  min-width: 600px;
  min-height: 400px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  border: 1px solid #ddd;

  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #ddd;

  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}

#load-dialog label {
  display: block;
}

#load-dialog label pre {
  display: inline;
}

#load-dialog textarea {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
}

#load-dialog .button-bar {
  text-align: right;
}

#load-dialog div button {
  display: inline;
  padding: 10px;
  background-color: olivedrab;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
