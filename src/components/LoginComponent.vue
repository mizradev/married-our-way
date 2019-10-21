<template>
  <div class="row">
      <form class="col-sm-12">
          <div class="form-group">
              <h4>SIGN IN</h4>
          </div>
        <div class="form-group">
            <!-- <label for="exampleInputEmail1">Email address</label> -->
            <input type="email" class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <!-- <label for="exampleInputPassword1">Password</label> -->
            <input type="password" class="form-control shadow-sm" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group row">
            <div class="col-sm-12 col-md-6 ">
                <span class="form-text text-muted d-flex">Do you not account?  <router-link to="/">Register</router-link></span>
            </div>
            <div class="col-sm-12 col-md-6">
                <button type="submit" class="btn btn-primary shadow-sm ">LOGIN</button>
            </div>
        </div>
        </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

  form input{
    height: 49px;
    background: rgba(196, 196, 196, 0.35);
    border-radius: 49px;
    border: none;
  }

  form input:focus{
      background: rgba(196, 196, 196, 0.35);
  }

  button{
    width: 162.77px;
    height: 37.46px;  
    border-radius: 49px;
    margin:0;
  }


  h4{
    color: #F25749;
    font-size: 2em;
    font-weight: bold;
  }
</style>
