<template>
  <div>
    <h1>Harkness Table</h1>
    <br>
    <div class="overview">
      <label>Discussion Topic: </label><input type="text" v-model="topic"><br>
      <label>No. Students: </label><input type="text" v-model="numStudents">
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">Students</p>
            <ul class="menu-list" v-for="post in posts" :key="post.id">
              <li><router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">{{post.name}}</router-link></li>
            </ul>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'AddStudent' }" class="">+ Add Student</router-link></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
    <button @click="testing(posts)">here</button>
    <!-- timer -->
    <section>
      <div id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
      </div>

      <div id="buttons">
        <!--     Start Timer -->
        <button
          id="start"
          class="button is-light is-normal"
          v-if="!timer"
          @click="startTimer">
            <img src="../assets/start.png" width="25" height="25">
        </button>
        <!--     Pause Timer -->
        <button
          id="stop"
          class="button is-light is-normal"
          v-if="timer"
          @click="stopTimer">
            <img src="../assets/pause.png" width="25" height="25">
        </button>
        <!--     Restart Timer -->
        <button
          id="reset"
          class="button is-light is-normal"
          v-if="resetButton"
          @click="resetTimer">
            <img src="../assets/restart.png" width="20" height="20">
        </button>
      </div>
    </section>
    <div class="ovalTable">
      <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400"  :x="350" :y="400">
        <img src="../assets/ovalTable.png">
      </vue-draggable-resizable>
    </div>

    <div class="studentSpot">
      <span v-for="post in posts" v-bind:key="post.id">
        <vue-draggable-resizable :resizable="false" :w="120" :h="120" :x="100" :y="100">
          <br>
          <p>{{post.name}}</p>
          <!--
          <section id="timer">
            <span id="minutes" >{{ student.minutes }}</span>
            <span id="middle">:</span>
            <span id="seconds">{{ student.seconds }}</span>
          </section>
          <section id="buttons"> -->
            <!--     Start Timer
            <button
              id="start"
              class="button is-light is-normal"
              v-if="!timer"
              @click="startTimer">
                <img src="../assets/start.png" width="25" height="25">
            </button> -->
            <!--     Pause Timer
            <button
              id="stop"
              class="button is-light is-normal"
              v-if="timer"
              @click="stopTimer">
                <img src="../assets/pause.png" width="25" height="25">
            </button> -->
            <!--     Restart Timer
            <button
              id="reset"
              class="button is-light is-normal"
              v-if="resetButton"
              @click="resetTimer">
                <img src="../assets/restart.png" width="20" height="20">
            </button>
          </section> -->
          <!-- <p>min: {{student.minutes}}</p>
          <button v-on:click="student.minutes += 1">Start</button>
          <button v-on:click="student.minutes += 1">End</button> -->
          <!-- <img src="../assets/starfruit.jpg"> -->
        </vue-draggable-resizable>
      </span>
    </div>
    <!-- <div>
      <span v-for="n in numStudents" v-bind:key="n.id">{{ n }} </span>
    </div> -->
    <br><br>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'HarknessTable',
  data () {
    return {
      timer: null,
      totalTime: 0,
      resetButton: false,
      posts: [],

      /* students: [
        {
          name: 'Help me'
        },
        {
          name: 'Lily Laevens'
        },
        {
          name: 'Chris Alexiev'
        }
      ], */
      topic: 'testing 123',
      numStudents: 3,
      x: 0,
      // x: this.xPos(this.x, this.numStudents),
      y: 0
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      const response = await PostsService.deletePost(id)
      this.posts = response.data.posts
      this.$router.push({name: 'HarknessTable'})
    },
    testing: function (posts) {
      for (var i = 0; i < this.posts.length; i++) {
        console.log(this.posts[i].name)
      }
    },
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000)
      this.resetButton = true
    },
    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = true
    },
    resetTimer: function () {
      this.totalTime = 0
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = false
    },
    padTime: function (time) {
      return (time < 10 ? '0' : '') + time
    },
    countdown: function () {
      this.totalTime++
    }
  },
  computed: {
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds: function () {
      const seconds = this.totalTime - (this.minutes * 60)
      return this.padTime(seconds)
    }
  }
  /* ,
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
  } */
}
</script>

<style type="text/css">
.overview label {
  color: #47DAE7;
}
.studentSpot div {
  height: 500px;
  width: 500px;
  border: 2px solid #47DAE7;
  position: center;
  line-height: 1;
}

.ovalTable div {
  margin-left: auto;
  margin-right: auto;
}
#timer {
  font-size: 20px;
  line-height: 1;
}
</style>
