<template>
  <div class="">
    <div class="video-container ">
      <img class="animated fadeIn delay-2s" src="../assets/logo-white.png" alt="">
      <video width="100%" class="" controls  autoplay loop poster="../assets/screenshot/app.gif">
        <source src="../assets/videos/video.mp4" type="video/mp4"  >
      </video>
    </div>
    <section class="">
      <article class="banner-text text-white overflow-hidden">
        <div class="row ">
          <div class="col-sm-12 col-md-6 p-4 d-flex justify-content-center demo-container mb-5">
            <img src="../assets/iphonex.png" alt="iphone" class="iphone animated fadeLeft delay-5s">
            <img src="../assets/screenshot/app.gif" alt="app-gif" class="app animated fadeLeft delay-5s">
          </div>
          <div class="col-sm-12 col-md-6 bg-primary d-flex align-items-center p-4">
            <h4 class="text-center text-italic">
          Welcome to the worlds first app dedicated to giving couples the ability to get married with only the promise of commitment, under terms that the couple chooses, and tools to support their relationship. This is the way marriage should be. This is Married Our Way. 
        </h4>
          </div>
        </div>
      </article>
    </section>
    <section class="overflow-hidden">
      <div class="row">
        <div class="col-sm-12 col-md-6 p-0" >
          <img style="width:100%; height: auto" src="http://marriedourway.com/wp-content/uploads/bb-plugin/cache/qtq80-yYFCLQ-landscape.jpeg" alt="">
        </div>
        <div class="col-sm-12 col-md-6 d-flex align-items-center">
          <article class="p-3">
            <h4>HighLights</h4>
            <p>Married Our Way is an easy and convenient way to get marriage with only the promise of commitment.
Couples will now have control of the terms in their marriage. Carry the title of being Married without the burdens of the State issued License.
Couples can use the tools available on the Married Our Way app to have a more flourishing and successful marriage.</p>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 d-flex align-items-center">
          <article class="p-3">
            <h4>HighLights</h4>
            <p>Married Our Way is an easy and convenient way to get marriage with only the promise of commitment.
Couples will now have control of the terms in their marriage. Carry the title of being Married without the burdens of the State issued License.
Couples can use the tools available on the Married Our Way app to have a more flourishing and successful marriage.</p>
          </article>
        </div>
        <div class="col-sm-12 col-md-6 p-0">
          <img style="width:100%" src="http://marriedourway.com/wp-content/uploads/bb-plugin/cache/qtq80-FOQ2Aq-landscape.jpeg" alt="">
        </div>
        
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'home',
  components: {
    FooterComponent
  }
}
</script>


<style scope>

  .banner{
    width:100%;
    height: 500px;
    background-image: url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .demo-container{
    position:relative;
    height: 600px;
  }
  .demo-container .iphone{
    position: absolute;
    z-index: 1;
    width: 278px;
  }
  .demo-container .app{
    position: absolute;
    z-index: 0;
    width:16em;
    height: 530px;
    top:6.5%;
    border-radius: 1em;
  }
  .video-container{
    overflow: hidden;
    background-color: rgba(1,1,1,.5);
    position: relative;
    height: 650px;
  }
  .video-container video{
    min-width:100%;
    min-height:100%;
    position: absolute;
    z-index:-1;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .video-container img{
    position: absolute;
    top: 25%;
    left: 25%;

  }

</style>
