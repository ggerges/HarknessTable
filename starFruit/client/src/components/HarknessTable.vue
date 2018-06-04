<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <br>
    <div class="studentSpot">
      <vue-draggable-resizable :w="100" :h="100" :resizable="false" :x="100" :y="100">
        <p>Testing drag</p>
      </vue-draggable-resizable>
    </div>
    <br><br><br><br>
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
}
</script>

<style type="text/css">
.studentSpot div {
  height: 500px;
  width: 500px;
  border: 1px solid red;
  position: relative;
}
</style>
