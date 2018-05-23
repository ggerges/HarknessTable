<template>
  <div class="hello">
    <h1>REVIEW</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <table>
          <tr>
            <td>Title</td>
            <td width="550">Description</td>
            <td width="100" align="center">Action</td>
          </tr>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td align="center">
              <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
              <a href="#" @click="deletePost(post._id)">Delete</a>
            </td>
          </tr>
        </table>
      <div>
        <router-link v-bind:to="{ name: 'NewAccount' }" class="">Create an account.</router-link>
      </div>
    </div>
    <div v-else>
      There are no students... Let's add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Student</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Harkness Table App'
    }
  }
}
</script>
<!-- script type "text/javascript" src="client/jquery/jquery.js"></script>-->

<!-- Add "scoped" attribute to limit CSS to this component only (scoped for child css) -->
<style scoped>
h1{
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
