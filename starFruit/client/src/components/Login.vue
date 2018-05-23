<template>
  <div class="hello">
    <h1>LOGIN</h1>
    <br>
    <h2>For table testing purposes:</h2>
    <br>
   <div>
      <router-link v-bind:to="{ name: 'Review' }" class="">Test table.</router-link>
    </div>
    <br>
    <h2>Email Text Box</h2>
    <h2>Password Text Box</h2>
    <br>
    <h2>Submit Button</h2>
    <p>New to Harkness?</p>
    <div>
      <router-link v-bind:to="{ name: 'NewAccount' }" class="">Create an account.</router-link>
    </div>
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
<!-- script type "text/javascript" src="client/jquery/jquery.js"></script>-->

<!-- Add "scoped" attribute to limit CSS to this component only (scoped for child css) -->
<style scoped>
h1{
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
