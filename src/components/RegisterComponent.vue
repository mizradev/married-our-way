<template>
  <div>
      <form class="">
          <div class="form-group">
              <h4>SIGNUP</h4>
          </div>
        <div class="form-group row">
            <!-- <label for="exampleInputEmail1">Email address</label> -->
            <div class="col-sm-12 col-md-6">
              <input type="text" class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name">
            </div>
            <div class="col-sm-12 col-md-6">
              <input type="text" class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name">
            </div>
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group row">
            <!-- <label for="exampleInputEmail1">Email address</label> -->
            <div class="col-sm-12 col-md-6">
              <select class="custom-select" id="inputGroupSelect02">
                <option selected disabled>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div class="col-sm-12 col-md-6">
              <input type="date" class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Birthday">
            </div>
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <!-- <label for="exampleInputPassword1">Password</label> -->
            <input type="email" class="form-control shadow-sm" id="exampleInputPassword1" placeholder="Email">
        </div>
        <div class="form-group">
            <!-- <label for="exampleInputPassword1">Password</label> -->
            <input type="password" class="form-control shadow-sm" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group d-flex justify-content-between">
            <span>Do you have account?  <router-link to="/login">Login</router-link></span>
            <button type="submit" class="btn btn-primary shadow-sm">SIGNUP</button>
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
  form input, select{
    height: 49px;
    background: rgba(196, 196, 196, 0.35);
    border-radius: 49px;
    border: none;
    cursor: pointer;
    
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
