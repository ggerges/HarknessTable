<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <img src="../assets/starfruit.jpeg">
    <drag class="drag"
      :image="require('../assets/starfruit.jpeg')"
      :transfer-data="{ example: 'drag-image' }">
      drag
    </drag>
    <drop class="drop" @drop="handleDrop">drop</drop>
    <br><br>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';
export default {
  name: 'HarknessTable',
  components: { Drag, Drop },
  methods: {
    handleDrop(data) {
      alert('You dropped with data: ${JSON.stringify(data)}')
    }
  }
}
</script>

<style type="text/css">
</style>
