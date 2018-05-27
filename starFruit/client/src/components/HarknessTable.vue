<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <drag class="drag"
      :image="require('../assets/starfruit.jpeg')"
      :transfer-data="{ example: 'drag-image' }">
      drag to HERE
    </drag>
    <br><br>
    <drop class="drop" @drop="handleDrop">drop</drop>
    <br><br>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'HarknessTable',
  components: { Drag, Drop },
  methods: {
    handleDrop (data) {
      alert('Help me...')
    }
  }
}
</script>

<style type="text/css">
</style>
