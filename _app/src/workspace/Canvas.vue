<template>
  <div id="canvas-container">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="control-overlay"
    >
      <pattern id="Pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="0" cy="0" r="1" fill="#aaa" />
      </pattern>
      <rect fill="url(#Pattern)" width="100%" height="100%"/>
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
        id="main-canvas"
        v-html="content"
        @click="click"
    >
    </svg>
  </div>
</template>

<script>
class SelectMode {
  constructor(canvas) {
    this.canvas = canvas;
  }

  click(event) {
    // set select the top-most group and set that as
    // the selected
    let groupNode = this.canvas.findGroupFor(event.target);
    this.canvas.focus(groupNode? groupNode : event.target);
  }

  //
  drag(event) {

  }

  //
  doubleClick(event) {

  }

}

export default {
  props: ["content"],
  data() {
    return {
      svgContent: this.content,
      currentMode: new SelectMode(this),
      focusNode: null
    };
  },

  methods: {
    click(event) {
      // the current mode: call click on the current mode
      this.currentMode.click(event);
    },

    /**
     * Finds the highest level group that contains a given
     * SVG Element
     *
     * @param svgElement - some SVG element
     *
     * @returns {*|null} the containing g element or null if the
     *   the element does not belong to a group
     */
    findGroupFor(svgElement) {
      let svg = this.canvas();
      while(svgElement !== svg && svgElement !== this.$el) {
        if (svgElement.parentNode === svg) {
          return svgElement.tagName === "g"? svgElement : null
        }

        svgElement = svgElement.parentNode;
      }

      return null;
    },

    focus(selectedNode) {
      let svg = this.canvas();
      this.focusNode = selectedNode === svg ? null : selectedNode;

      // TODO: trigger the focus event
      this.onFocus({});
    },

    canvas() {
      return this.$el.querySelector("#main-canvas");
    },

    onFocus(event) {
      // handle the case when the select is none
      if (!this.focusNode) {
        // clear out any rectangles
        return;
      }

      // draw a rectangle around the selected element
      let svg = this.canvas(),
          rect = document.createElementNS("http://www.w3.org/2000/svg","rect"),
          bbox = this.focusNode.getBBox();

      rect.setAttribute("x", bbox.x);
      rect.setAttribute("y", bbox.y);
      rect.setAttribute("width", bbox.width);
      rect.setAttribute("height", bbox.height);
      rect.setAttribute("class", "selection-box");
      svg.appendChild(rect);
    }
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

#main-canvas .selection-box {
  fill: none;
  stroke-width: 1;
  stroke: rgb(0 0 0/10%);
}

#control-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
