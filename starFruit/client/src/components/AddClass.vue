<template>
  <div>
    <h1>Class</h1>
    <div class="container is-fullhd">
      <div class="notification">
        This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint. (testing stuff)
      </div>
    </div>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="button is-info is-outlined">Start New Harkness</router-link>
    </div>
    <h2>My Classes</h2>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="button is-info is-outlined">Add Class</router-link>
    </div>
    <div>
      <router-link v-bind:to="{ name: 'Student' }" class="button is-info is-outlined">Go to Student</router-link>
    </div>
    <section>
        <b-field position="is-centered">
            <b-input placeholder="Search..." type="search" icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-info">Search</button>
            </p>
        </b-field>
    </section>
    </div>
</template>

<script>
export default {
  name: 'AddClass',
  data () {
    return {
      msg: 'Welcome to Your Harkness Table App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style type="text/css">
h1 {
  font-size: 52px;
  text-align: center;
}
</style>
