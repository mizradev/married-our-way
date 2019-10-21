<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-darken shadow navbar-fixed">
        <router-link class="navbar-brand" to="/">
          <img src="http://marriedourway.com/wp-content/uploads/2017/04/MOW-logo2-edited-white-1-768x285.png" class="logo" alt="">
        </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link> 
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/terms">Marriage Terms</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/faq">FAQ</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/faq">Contact us</router-link>
              </li>
              <li class="nav-item">
                   <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/signup">Register</router-link>
              </li>
              <!--<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  </div>
              </li>-->
              </ul>
          </div>
      </nav>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>


import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent
  }
}

$(()=>{
  $('.nav-link').click( function (e) {
    $(this).addClass('active');
  } );
});


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,500&display=swap');
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3, h4 {
  font-family: 'Open Sans', sans-serif;
}

#nav {
  padding: 30px;
  font-family: 'Open Sans', sans-serif;
}

.nav-iitem{
  font-family: 'Open Sans', sans-serif;
}

#nav a {
  font-weight: bold;
  font-family: 'Open Sans', sans-serif !important;
  text-transform: uppercase;
  color: #2c3e50;
}

#nav a.router-link-exact-active {

}

.logo{
  width:90px;
}


.bg-darken{
  background-color: #050401;
}

.bg-primary{
  background-color: #F25749 !important  ;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to{
  opacity:0;
}


</style>
