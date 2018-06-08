<template>
<!-- testing .vue page, not necessary -->
  <div class="hello">
    <h1>Hi!</h1>
    <h2>Create New Account</h2>
    <section>
        <b-field label="First Name">
            <b-input placeholder="Your first Name"></b-input>
        </b-field>
        <b-field label="Last Name">
            <b-input placeholder="Your last name"></b-input>
        </b-field>
        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                placeholder="Your email"
                maxlength="30">
            </b-input>
        </b-field>
        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input placeholder="Your password" type="password" maxlength="30"></b-input>
        </b-field>
    </section>
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
