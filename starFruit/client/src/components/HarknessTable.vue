<template>
  <div>
    <h1>Harkness Table</h1>
    <br>
    <div class="overview">
      <label>Discussion Topic: </label><input type="text" v-model="topic"><br>
      <label>No. Students: </label><input type="text" v-model="numStudents">
    </div>
    <!-- <button v-on:click="counter += 1">Add 1</button> -->
    <p>The button above has been clicked {{ counter }} times.</p>
    <div class="ovalTable">
      <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400"  :x="350" :y="400">
        <img src="../assets/ovalTable.png">
      </vue-draggable-resizable>
    </div>

    <div class="studentSpot">
      <span v-for="student in students" v-bind:key="student.id">
        <vue-draggable-resizable :resizable="false" :w="100" :h="100" :x="100" :y="100">
          <p>{{student.name}}</p>
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
  name: 'studentComponent',
  data () {
    return {
      students: [
        {
          name: 'Samantha Chim',
          minutes: 0
        },
        {
          name: 'Lily Laevens',
          minutes: 2
        },
        {
          name: 'Chris Alexiev',
          minutes: 10
        }
      ],
      topic: 'testing 123',
      numStudents: 3,
      counter: 0,
      x: this.xPos(this.x, this.numStudents),
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) { // for reference only
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
  position: center;
}

.ovalTable div {
  margin-left: auto;
  margin-right: auto;
}
</style>
