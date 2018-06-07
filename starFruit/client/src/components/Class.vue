<template>
  <div>
    <h1>HZT4U: Philosophy</h1>
    <br><br>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p  class="menu-list"><router-link v-bind:to="{ name: 'NewHarknessTable' }">Start New Harkness</router-link></p>
            <p class="menu-label">Students</p>
            <ul class="menu-list" v-for="student in students" :key="student.id">
              <li><router-link v-bind:to="{ name: 'EditStudent', params: { id: student._id } }">{{student.name}}</router-link></li>
            </ul>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'AddStudent' }">+ Add Student</router-link></li>
            </ul>
          </aside>
        </div>
        <div class ="column is-9">
          <div v-if="students.length > 0" class="table-wrap">
            <div>
              <router-link v-bind:to="{ name: 'AddStudent' }" class="">+ Add Student</router-link>
            </div>
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
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.name }}</td>
                <td>{{ student.description }}</td>
                <td>{{ student.knowledgePoint }}</td>
                <td>{{ student.thinkingPoint }}</td>
                <td>{{ student.communicationPoint }}</td>
                <td>{{ student.applicationPoint }}</td>
                <td align="center">
                  <router-link v-bind:to="{ name: 'EditStudent', params: { id: student._id } }">Edit</router-link> |
                  <a href="#" @click="deletePost(student._id)">Delete</a>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            There are no students... Let's add one now <br /><br />
            <router-link v-bind:to="{ name: 'AddStudent' }" class="add_student_link">Add Student</router-link>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <!-- <section>
        <b-field position="is-centered">
            <b-input placeholder="Search..." type="search" icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-info">Search</button>
            </p>
        </b-field>
    </section> -->
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Class',
  data () {
    return {
      students: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.students = response.data.students
    },
    async deletePost (id) {
      const response = await PostsService.deletePost(id)
      this.students = response.data.students
      this.$router.push({name: 'Class'})
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

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
</style>
