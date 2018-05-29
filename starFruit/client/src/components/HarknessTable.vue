<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <br>
    <div v-drag-and-drop:options="options">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ul>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
    </div>
    <!--<canvas ref="myCanvas" width="800" height="500"></canvas>-->
    <!--
    <drag class="drag"
      :image="require('../assets/starfruit.jpeg')"
      :transfer-data="{ example: 'drag-image' }">
      drag from HERE
    </drag>
    <br><br>
    <drop class="drop" @drop="handleDrop">drop to here</drop>
    <br><br>
    -->
    <br><br><br><br>
  </div>
</template>

<script>/*
export default {
  data: {
    options: {
      // dropzoneSelector: 'ul',
      // draggableSelector: 'li',
      // excludeOlderBrowsers: true,
      // showDropzoneAreas: true,
      // multipleDropzonesItemsDraggingEnabled: true,
      // onDrop(event) {},
      // onDragstart(event) {
      //   event.stop();
      // },
      // onDragend(event) {
      //   event.stop();
      // }
    }
  }
}

import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'HarknessTable',
  components: { Drag, Drop },
  methods: {
    handleDrop (data) {
      alert('Help me...')
    }
  }
} */
</script>

<style type="text/css">
canvas {
  border-style: solid;
}
</style>
