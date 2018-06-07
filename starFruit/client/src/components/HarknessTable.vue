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
              <li><router-link v-bind:to="{ name: 'HarknessEditStudent', params: { id: post._id } }">{{post.name}}</router-link></li>
            </ul>
            <button @click="testing(posts)">console testing</button>
          </aside>
        </div>
        <div class ="column is-9">
          <!-- Put in an explanation paragraph -->
          <!-- oval table -->
          <div class="ovalTable">
              <vue-draggable-resizable :draggable="false" :resizable="false" :w="600" :h="400" :x="360" :y="100">
                <img src="../assets/ovalTable.png">
              </vue-draggable-resizable>
          </div>
          <!-- student spots -->
          <div class="studentSpot">
            <span v-for="post in posts" v-bind:key="post.id">
              <vue-draggable-resizable :resizable="false" :w="120" :h="120" :x="300" :y="50">
                <br>
                <p>{{ post.name }}</p>
                <section>
                  <button v:bind="post" @click="post.knowledgePoint++">+ K</button>
                  <span v-if="post.knowledgePoint !== null">{{ post.knowledgePoint }}</span>
                  <span v-else>0</span>
                  <button v:bind="post" @click="post.knowledgePoint--">- K</button>
                </section>
                <section>
                  <button v:bind="post" @click="post.thinkingPoint++">+ K</button>
                  <span v-if="post.thinkingPoint !== null">{{ post.thinkingPoint }}</span>
                 <span v-else>0</span>
                  <button v:bind="post" @click="post.thinkingPoint--">- K</button>
                </section>
                <section>
                  <button v:bind="post" @click="post.communicationPoint++">+ K</button>
                  <span v-if="post.communicationPoint !== null">{{ post.communicationPoint }}</span>
                  <span v-else>0</span>
                  <button v:bind="post" @click="post.communicationPoint--">- K</button>
                </section>
                <section>
                  <button v:bind="post" @click="post.applicationPoint++">+ K</button>
                  <span v-if="post.applicationPoint !== null">{{ post.applicationPoint }}</span>
                  <span v-else>0</span>
                  <button v:bind="post" @click="post.applicationPoint--">- K</button>
                </section>
              </vue-draggable-resizable>
            </span>
          </div>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <!-- Update Table -->
          <h3>Review</h3>
          <section>
            <div v-if="posts.length > 0" class="table-wrap">
              <table>
                <tr>
                  <td>Student Name</td>
                  <td>K</td>
                  <td>T</td>
                  <td>C</td>
                  <td>A</td>
                </tr>
                <tr v-for="post in posts" :key="post.id">
                  <td>{{ post.name }}</td>
                  <td v-if="post.knowledgePoint !== null" v-bind:to="post.knowledgePoint">{{ post.knowledgePoint }}</td><td v-else>0</td>
                  <td v-if="post.thinkingPoint !== null">{{ post.thinkingPoint }}</td><td v-else>0</td>
                  <td v-if="post.communicationPoint !== null">{{ post.communicationPoint }}</td><td v-else>0</td>
                  <td v-if="post.communicationPoint !== null">{{ post.applicationPoint }}</td><td v-else>0</td>
                </tr>
              </table>
            </div>
          </section>
          <br><br>
          <p>Please update the students' KTCA marks in the table below using this review</p>
          <br>
          <section>
            <div v-if="posts.length > 0" class="table-wrap">
              <table>
                <tr>
                  <td>Student Name</td>
                  <td width="300">Description Notes</td>
                  <td align="center">Action</td>
                </tr>
                <tr v-for="post in posts" :key="post.id">
                  <td>{{ post.name }}</td>
                  <td>{{ post.description }}</td>
                  <td align="center">
                    <router-link v-bind:to="{ name: 'HarknessEditStudent', params: { id: post._id } }">Edit</router-link> |
                    <a href="#" @click="deletePost(post._id)">Delete</a>
                  </td>
                </tr>
              </table>
            </div>
            <div v-else>
              There are no students... Let's add one now <br /><br />
              <router-link v-bind:to="{ name: 'HarknessAddStudent' }" class="add_post_link">Add Student</router-link>
            </div>
          </section>
          <br><br><br>
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
      name: '',
      description: '',
      knowledgePoint: '',
      thinkingPoint: '',
      communicationPoint: '',
      applicationPoint: '',
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
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.description = response.data.description
      this.knowledgePoint = response.data.knowledgePoint
      this.thinkingPoint = response.data.thinkingPoint
      this.communicationPoint = response.data.communicationPoint
      this.applicationPoint = response.data.applicationPoint
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        name: this.name,
        description: this.description,
        knowledgePoint: (this.knowledgePoint++),
        thinkingPoint: this.thinkingPoint,
        communicationPoint: this.communicationPoint,
        applicationPoint: this.applicationPoint
      })
      this.$router.push({ name: 'HarknessTable' })
    },
    testing: function (posts) {
      for (var i = 0; i < this.posts.length; i++) {
        console.log(this.posts[i].name + ', K: ' + this.posts[i].knowledgePoint)
      }
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
