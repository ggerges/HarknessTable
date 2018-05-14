<template>
  <div class="hello">
    <h1>HOME PAGE</h1>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="">Start New Harkness</router-link>
    </div>
    <h2>My Classes</h2>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="">Class Name</router-link>
    </div>
    <div>
      <router-link v-bind:to="{ name: 'Class' }" class="">Add Class</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
