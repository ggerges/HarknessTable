<template>
  <div>
    <h1>Harkness Table</h1>
    <br>
    <div class="overview">
      <label>Discussion Topic: </label><input type="text" v-model="topic"><br>
      <label>No. Students: </label><input type="text" v-model="numStudents">
    </div>
    <canvas ref="myCanvas" width="800" height="500"></canvas>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'HarknessTable',
  data () {
    return {
      topic: 'testing 123',
      numStudents: 4
    }
  },
  methods: {
    canvasImage: function () {
      var canvas = this.$refs.myCanvas
      var context = canvas.getContext('2d')

      var img = new Image()
      img.src = '../assets/starfruit.jpg'
      img.addEventListener('load', function () {
        context.drawImage(img, 0, 0)
      }, true)
    }
  },
  mounted: function () {
    this.canvasImage()
  }
}
</script>

<style type="text/css">

</style>
