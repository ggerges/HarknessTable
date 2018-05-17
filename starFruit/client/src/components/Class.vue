<template>
  <div class="hello">
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
        <div class="block">
            <b-switch v-model="openOnFocus">
                Open dropdown on focus
            </b-switch>
            <b-switch v-model="keepFirst">
                Keep-first <small>(will always have first option pre-selected)</small>
            </b-switch>
        </div>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
    </section>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
