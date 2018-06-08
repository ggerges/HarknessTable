<template>
<!-- testing .vue page, not necessary -->
  <div class="login">
     <div class="wrapper">
    <form class="form-signin">
      <div class = "logo">
      <img src = "../assets/starfruit.jpg">
      </div>
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <label class="checkbox">
      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" v-on:click.native ="greet" >Login</button>
    </form>
  </div>

  <!--  <h1>LOGIN</h1>
    <br>
    <div id = "greyBox"></div>
   <div id = "items">
    <div>
      <router-link v-bind:to="{ name: 'Review' }" class="">Test table.</router-link>
    </div>
    <br>
    <input type="text" placeholder="Enter Email" name="email">
    <br>
    <br>
    <input type="text" name = "password" placeholder="Enter Password">
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
-->
</div>
</template>

<script>
export default{
}

</script>
<!-- script type "text/javascript" src="client/jquery/jquery.js"></script>-->
<!-- Add "scoped" attribute to limit CSS to this component only (scoped for child css) -->
<style scoped>
  body {
  background: #eee !important;
}
.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);

  .form-signin-heading,
  .checkbox {
    margin-bottom: 30px;
  }

  .checkbox {
    font-weight: normal;
  }

  .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    @include box-sizing(border-box);

    &:focus {
      z-index: 2;
    }
  }

  input[type="text"] {
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  input[type="password"] {
    margin-bottom: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

</style>
