<template>
    <div>
        <section class="p-5 banner-subTitle d-flex justify-content-center align-items-center">
            <h3>{{ title }}</h3>
        </section>
    </div>
</template>    

<script>
export default {
  name: 'BannerComponent',
  props: {
    title: String
  }
}
</script> 

<style >
    .banner-subTitle{
        background-image : url('https://images.unsplash.com/photo-1475721042966-f829c9b42aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
        background-position: 50% 60%;
        background-repeat : no-repeat;
        background-size: cover;
        background-color: rgba(0, 0, 0,.5);
        background-blend-mode: darken;
        height: 200px;
    }
    h3{
        color: white;
        text-shadow: black 0 0 7px;
        font-size:3em;
        font-weight: bold;
    }
</style>