<template>
  <div class="about overflow-hidden">
    <div class="row" >
        <div class="col-md-6 img-left">
            
        </div>
        <div class="col-sm-12 col-md-6 d-flex p-4 justify-content-center align-items-center">
          <RegisterComponent/>
        </div>
    </div>
  </div>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent.vue'
export default {
    components:{
        RegisterComponent
    }

}
</script>


<style>
  .img-left{
    width: 100%;
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1447940334172-44e027c1f71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-position: 50% 95%;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>