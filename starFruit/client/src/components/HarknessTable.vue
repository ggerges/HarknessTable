<template>
  <div>
    <h1>Harkness Table</h1>
    <br>
    <div class="overview">
      <label>Discussion Topic: </label><input type="text" v-model="topic"><br>
      <label>No. Students: </label><input type="text" v-model="numStudents">
    </div>

    <div class="studentSpot">
      <span v-for="numStudent in numStudents">
        <vue-draggable-resizable :resizable="false" :w="100" :h="100" :x="100" :y="100">
          <p>Student 1</p>
        </vue-draggable-resizable>
      </span>
    </div>

    <div>
      <span v-for="n in numStudents">{{ n }} </span>
    </div>

    <div class="ovalTable">
      <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400"  :x="400" :y="400">
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
      topic: 'testing 123',
      numStudents: 4,
      counter: 4,
      width: 0, // testing
      height: 0,
      x: 1,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
  }
}
</script>

<style type="text/css">
.overview label {
  color: #47DAE7;
}
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
