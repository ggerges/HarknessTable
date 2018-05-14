<template>
  <div class="hello">
    <h1>LOGIN</h1>
    <h2>Email Text Box</h2>
    <h2>Password Text Box</h2>
    <br>
    <h2>Submit Button</h2>
    <p>Link to moqup:</p>
    <ul>
      <li>
        <a
          href="https://app.moqups.com/cmei@bayviewglen.ca/RXNwMvqPpa/view/page/a245a1a13"
          target="_blank"
        >
          Go to Moqup
        </a>
      </li>
    </ul>
    <br><br>
    <div>
      <router-link v-bind:to="{ name: 'NewPost' }" class="">(testing) Add Student</router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Testing',
  data () {
    return {
      msg: 'Welcome to Your Harkness Table App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
