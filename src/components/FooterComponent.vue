<template>
  <section class="footer bg-primary p-4 text-white fixed">
      <div class="container">
        <div class="row">
          <!-- <div class="col-sm-12 col-md-4 text-justify">
              <h5>Married Our Way</h5>
              <p>Lorelit. Soluptates, fuga reiciendis inventore reprehenderit consequatur, dolores iusto dolorem. Temporibus atque minus aspernatur blanditiis provident, quam iste?</p>
          </div>
          <div class="col-sm-12 col-md-8">
              <h5>Social network</h5>
          </div> -->
          <div class="col-sm-12">
              <h5>Copyright 2019</h5>
          </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    background-position: fixed;
  }
</style>
