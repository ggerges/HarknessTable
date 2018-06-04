<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <br>
    <div class="studentSpot">
      <vue-draggable-resizable :resizable="false" :w="100" :h="100" :x="100" :y="100">
        <p>Student 1</p>
      </vue-draggable-resizable>
    </div>

    <div class="ovalTable">
      <vue-draggable-resizable :draggable="false" :resizable="false" :w="500" :h="100"  :x="400" :y="300">
        <img src="../assets/ovalTable.png">
      </vue-draggable-resizable>
    </div>
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
}
</script>

<style type="text/css">
.studentSpot div {
  height: 500px;
  width: 500px;
  border: 1px solid red;
  position: relative;
}

.ovalTable div {
  margin-left: auto;
  margin-right: auto;
}
</style>
