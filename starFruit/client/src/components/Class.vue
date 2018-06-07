<template>
  <div>
    <h1>HZT4U: Philosophy</h1>
    <br><br>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p  class="menu-list"><router-link v-bind:to="{ name: 'NewHarknessTable' }" class="">Start New Harkness</router-link></p>
            <p class="menu-label">Students</p>
            <ul class="menu-list" v-for="post in posts" :key="post.id">
              <li><router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">{{post.title}}</router-link></li>
            </ul>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'AddStudent' }">+ Add Student</router-link></li>
            </ul>
          </aside>
        </div>
        <div class ="column is-9">
          <div v-if="posts.length > 0" class="table-wrap">
            <div>
              <router-link v-bind:to="{ name: 'AddStudent' }">+ Add Student</router-link>
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
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>{{ post.knowledgePoint }}</td>
                <td>{{ post.thinkingPoint }}</td>
                <td>{{ post.communicationPoint }}</td>
                <td>{{ post.applicationPoint }}</td>
                <td align="center">
                  <router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">Edit</router-link> |
                  <a href="#" @click="deletePost(post._id)">Delete</a>
                </td>
              </tr>
            </table>
          </div>
          <div v-else>
            There are no students... Let's add one now <br /><br />
            <router-link v-bind:to="{ name: 'AddStudent' }" class="add_post_link">Add Student</router-link>
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
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
