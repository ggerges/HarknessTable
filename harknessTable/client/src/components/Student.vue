<template>
  <div class="hello">
    <h1>Student</h1>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="">Start New Harkness</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Class',
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
