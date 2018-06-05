<template>
  <div>
    <h1>Harkness Table</h1>
    <br>
    <div class="overview">
      <label>Discussion Topic: </label><input type="text" v-model="topic"><br>
      <label>No. Students: </label><input type="text" v-model="numStudents">
    </div>
    <div class="ovalTable">
      <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400"  :x="400" :y="400">
        <img src="../assets/ovalTable.png">
      </vue-draggable-resizable>
    </div>

    <div class="studentSpot">
      <span v-for="numStudent in numStudents" v-bind:key="numStudent.id">
        <vue-draggable-resizable :resizable="false" :w="100" :h="100" :x=x :y="100">
          <p>Student {{numStudent}}</p>
          <!-- <img src="../assets/starfruit.jpg"> -->
        </vue-draggable-resizable>
      </span>
    </div>
    <div>
      <span v-for="n in numStudents" v-bind:key="n.id">{{ n }} </span>
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
      x: this.xPos(this.x, this.numStudents),
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    xPos: function (x, numStudents) { // this doesn't work....
      var i
      this.x = 100
      for (i = 0; i < numStudents; i++) {
        this.x += 10
      }
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
