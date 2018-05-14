<template>
  <div class="hello">
    <h1>Hi!</h1>
    <h2>Create New Account</h2>
    <h2>Email Text Box</h2>
    <h2>Password Text Box</h2>
    <br>
    <div>
      <router-link v-bind:to="{ name: 'HomePage' }" class="">Submit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAccount',
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
