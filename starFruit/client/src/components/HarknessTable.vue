<template>
  <div>
    <h1>Harkness Table Discussion</h1>
    <br><br>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p  class="menu-list"><router-link v-bind:to="{ name: 'Class' }">Return to Class</router-link></p>
            <p class="menu-label">Students</p>
            <ul class="menu-list" v-for="post in posts" :key="post.id">
              <li><router-link v-bind:to="{ name: 'EditStudent', params: { id: post._id } }">{{post.name}}</router-link></li>
            </ul>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'AddStudent' }" class="">+ Add Student</router-link></li>
            </ul>
          </aside>
        </div>
        <div class ="column is-9">
          <!-- oval table -->
          <div class="ovalTable">
              <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400"  :x="360" :y="100">
                <img src="../assets/ovalTable.png">
              </vue-draggable-resizable>
          </div>
          <!-- student spots -->
          <div class="studentSpot">
            <span v-for="post in posts" v-bind:key="post.id">
              <vue-draggable-resizable :resizable="false" :w="120" :h="120" :x="300" :y="50">
                <br>
                <p>{{post.name}}</p>
              </vue-draggable-resizable>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'HarknessTable',
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
      this.$router.push({name: 'HarknessTable'})
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
.ovalTable div {
  margin-left: auto;
  margin-right: auto;
}
.studentSpot div {
  height: 500px;
  width: 500px;
  border: 2px solid #47DAE7;
  position: center;
  line-height: 1;
}
</style>
