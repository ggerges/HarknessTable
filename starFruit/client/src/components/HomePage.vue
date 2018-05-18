<template>
  <div class="hello">
    <h1>HOME PAGE</h1>
    <div class="container">
        <div class="columns">
            <div class="column is-3">
                <aside class="menu">
                    <p class="menu-label">My Classes</p>
                    <ul class="menu-list">
                        <li><router-link v-bind:to="{ name: 'NewAccount' }" class="">ENG3U</router-link></li>
                        <br>
                        <li><router-link v-bind:to="{ name: 'NewAccount' }" class="">HZT4U</router-link></li>
                        <br>
                        <li><router-link v-bind:to="{ name: 'Class' }" class="">Add Class</router-link></li>
                    </ul>
                </aside>
            </div>
          </div>
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
.container div {
  text-align: left;
  padding-left: 100px;
}
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
