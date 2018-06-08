<template>
  <!-- 1) homePage .vue page -->
  <div>
    <h1>HOME PAGE</h1>
    <hr>
    <br><br>
    <div class="container">
      <div class="columns">
        <!-- left column -->
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">My Classes</p>
            <ul class="menu-list">
              <br>
              <!-- link to set HZT4U Class -->
              <li><router-link v-bind:to="{ name: 'Class' }" class="">HZT4U</router-link></li>
              <br>
              <!-- should set link to set add a new Class -->
              <br>
              <li class="">Add Class</li>
            </ul>
          </aside>
        </div>
        <!-- center and left column -->
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
          <!-- class tiles -->
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <router-link v-bind:to="{ name: 'Class' }" class="">HZT4U</router-link>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box"><p class="">Add Class</p></article>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br><br><br>
      <!-- Link to moqup -->
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
  position: center;
  display: block;
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
hr {
  display: block;
  border-top: 1px solid #D9D9D9;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
