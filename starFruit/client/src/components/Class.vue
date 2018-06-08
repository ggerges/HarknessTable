<template>
  <!-- 2) classroom .vue page -->
  <div>
    <!-- classroom -->
    <h1>HZT4U: Philosophy</h1>
    <hr>
    <br><br>
    <div class="container">
      <div class="columns">
        <!-- left column -->
        <div class="column is-3">
          <aside class="menu">
            <!-- link to return to Home Page -->
            <ul>
              <li><router-link v-bind:to="{ name: 'HomePage' }" class="">Home Page</router-link></li>
            </ul>
            <!-- link to start a new harkness table page -->
            <p  class="menu-list"><router-link v-bind:to="{ name: 'HarknessTable' }">Start New Harkness Table</router-link></p>
            <br>
            <p class="menu-label">Students</p>
            <ul class="menu-list" v-for="post in posts" :key="post.id">
              <li><router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">{{post.name}}</router-link></li>
            </ul>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'AddStudent' }" class="">+ Add Student</router-link></li>
            </ul>
          </aside>
        </div>
        <!-- right and center column -->
        <div class ="column is-9">
          <!-- classroom introductory message -->
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="intro">
                <h1 class="title">Welcome to your classroom.</h1>
                <br>
                <h2 class="subtitle">Your student list is on the left column (click on names to edit student info). A more detailed list with the most <b>recent</b> student description and KTCA marks are shown in the center table. You can click on <b>+ Add Student</b> to add a new student, <b>Edit</b> to edit student info, and <b>Delete</b> to delete the student from your classroom list.</h2>
                <p class="subtitle">This is a place for you to store the student info of your most recent harkness table discussion. <br><br>You can click on <b>Home Page</b> to go back to the home page or <b>Start New Harkness Table</b> to begin a new discussion.</p>
              </div>
            </div>
          </section>
          <br><br>
          <!-- if there are students in database -->
          <div v-if="posts.length > 0" class="table-wrap">
            <div>
              <!-- add a student -->
              <router-link v-bind:to="{ name: 'AddStudent' }" class="">+ Add Student</router-link>
            </div>
            <!-- table with student data -->
            <table>
              <tr>
                <td>Student Name</td>
                <td width="300">Description Notes</td>
                <td>K</td>
                <td>T</td>
                <td>C</td>
                <td>A</td>
                <td align="center">Action</td>
              </tr>
              <!-- student info -->
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.name }}</td>
                <td>{{ post.description }}</td>
                <td>{{ post.knowledgePoint }}</td>
                <td>{{ post.thinkingPoint }}</td>
                <td>{{ post.communicationPoint }}</td>
                <td>{{ post.applicationPoint }}</td>
                <!-- action: edit or delete student -->
                <td align="center">
                  <router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">Edit</router-link> |
                  <a href="#" @click="deletePost(post._id)">Delete</a>
                </td>
              </tr>
            </table>
          </div>
          <!-- if there are no students in database -->
          <div v-else>
            There are no students... Let's add one now <br /><br />
            <router-link v-bind:to="{ name: 'AddStudent' }" class="add_student_link">Add Student</router-link>
          </div>
        </div>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Class',
  data () {
    return {
      posts: []
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
      this.$router.push({name: 'Class'})
    }
  }
}

</script>

<!-- style -->
<style type="text/css">
h1 {
  font-size: 40px;
  text-align: center;
}
.hero-body div {
  text-align: left;
}
table {
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_student_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.title, .subtitle {
  text-align: left;
}
hr {
  display: block;
  border-top: 1px solid #D9D9D9;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
