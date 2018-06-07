<template>
  <div>
    <h1>HOME PAGE</h1>
    <!-- START NAV -->
    <!-- <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="admin.html">
              Home
            </a>
            <a class="navbar-item" href="admin.html">
              Orders
            </a>
            <a class="navbar-item" href="admin.html">
              Payments
            </a>
            <a class="navbar-item" href="admin.html">
              Exceptions
            </a>
          </div>
        </div>
      </div>
    </nav> -->
    <br><br>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">My Classes</p>
            <ul class="menu-list">
              <li><router-link v-bind:to="{ name: 'Class' }" class="">ENG3U</router-link></li>
              <br>
              <li><router-link v-bind:to="{ name: 'Class' }" class="">HZT4U</router-link></li>
              <br>
              <li><router-link v-bind:to="{ name: 'NewAccount' }" class="">Add Class</router-link></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="intro">
                <h1 class="title">Hello.</h1>
                <h2 class="subtitle">I hope you are having a great day!</h2>
                <p class="subtitle">Click on the menu sidebar on the left or the tiles below to choose a class.</p>
              </div>
            </div>
          </section>
          <br><br>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <router-link v-bind:to="{ name: 'Class' }" class="">ENG3U</router-link>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <router-link v-bind:to="{ name: 'Class' }" class="">HZT4U</router-link>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <router-link v-bind:to="{ name: 'NewAccount' }" class="">Add Class</router-link>
                </article>
              </div>
            </div>
          </section>
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
.info-tiles div {
  font-size: 20px;
  text-align: center;
}
h1 {
  text-align: center;
}
.title, .subtitle {
  text-align: left;
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
