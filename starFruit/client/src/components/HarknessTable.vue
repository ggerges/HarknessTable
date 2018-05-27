<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <img src="../assets/starfruit.jpeg">
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'HarknessTable',
  data () {
    return {
      msg: 'Welcome to Your Harkness Table App'
    }
  }

  /* methods: {
    drag () {
      function allowDrop (ev) {
        ev.preventDefault()
      }

      function drag (ev) {
        ev.dataTransfer.setData('text', ev.target.id)
      }

      function drop (ev) {
        ev.preventDefault()
        var data = ev.dataTransfer.getData('text')
        ev.target.appendChild(document.getElementById(data))
      }
    }
  } */
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
</style>
