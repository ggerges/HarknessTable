<template>
  <div class="hello">
    <h1>HOME PAGE</h1>
    <br><br>

    <!-- START NAV -->
    <nav class="navbar is-white">
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
    </nav>
    <br><br>
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
        <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">CGC1D</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">ENG4U</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">HZT4U</p>
                            </article>
                        </div>
                    </div>
        </section>
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
  padding-left: 50px;
  padding-right: 50px;
  font-size: 40px;
}

.container div {
  text-align: left;
  padding-left: 100px;
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
