<template>
  <g class="lever">
    <circle class="control-point" r="4" cx="100" cy="100" data-control-point="1" />
    <circle class="control-point" r="4" cx="200" cy="200" data-control-point="2" />
    <line v-bind:x1="controlPoint1.x"
          v-bind:y1="controlPoint1.y"
          v-bind:x2="controlPoint2.x"
          v-bind:y2="controlPoint2.y" />
  </g>
</template>

<script>
import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function toSVGCoord(x, y, svg) {
  let domPt = new DOMPointReadOnly(x, y)
      .matrixTransform(svg.getScreenCTM().inverse());

  return [domPt.x, domPt.y];
}

function buildPressHandler(ctrlPtIndex, svg, _this, downState) {
  let ctrlPt = ctrlPtIndex === "1" ? _this.controlPoint1 : _this.controlPoint2;

  return (evt) => {
    downState.mouse = toSVGCoord(evt.pageX, evt.pageY, svg);
    downState.coords = [ctrlPt.x, ctrlPt.y];
  }
}

function buildDragHandler(ctrlPtIndex, svg, _this, downState) {
  let modifiedPt = ctrlPtIndex === "1"? _this.controlPoint1 : _this.controlPoint2;

  return (evt) => {
    let newMouseCoord = toSVGCoord(evt.pageX, evt.pageY, svg);
    modifiedPt.x = downState.coords[0] + newMouseCoord[0] - downState.mouse[0];
    modifiedPt.y = downState.coords[1] + newMouseCoord[1] - downState.mouse[1];
  }
}

export default {
  data() {
    return {
      controlPoint1: {
        x: 100,
        y: 100,
      },

      controlPoint2: {
        x: 200,
        y: 200,
      }
    }
  },

  mounted() {
    let downState = {},
        controlPoints = this.$el.querySelectorAll("circle"),
        svg = document.querySelector("svg");

    controlPoints.forEach((ctrlPt) => {
      let index = ctrlPt.getAttribute("data-control-point");
      Draggable.create(ctrlPt, {
        type: "x,y",
        onPress: buildPressHandler(index, svg, this, downState),
        onDrag: buildDragHandler(index, svg, this, downState)
      });
    });
  },

  methods: {
  }
}
</script>

<style scoped>
circle {
  fill: #808080;
}

line {
  stroke-width: 2px;
  stroke: #808080;
}
</style>