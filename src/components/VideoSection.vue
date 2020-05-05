<template>
  <div class="video__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                 <video src="../assets/images/video.mp4" controls class="img-fluid"></video>
              </div>
              <div class="col-md-6 text">
                  <h1>Daily <span class="span">Market Review</span></h1>
                  <p>Having proper information at your fingertips is crucial when it comes to making the very best trading decisions. FX Finance Up’s comprehensive daily market reviews are a perfect resource for successful trading. <br><br> Our reviews will help you have ideas on the key developments that are occurring on a day-to-day basis so you can make the most informed decisions. As the markets are constantly on the move, be sure to read our daily market review at the start of every trading day so you know what to be aware of when you are trading.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.video__wrapper{
    padding: 4rem 0;
    background:url('../assets/images/section-banner2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .text{
        h1{
            text-transform: uppercase;
        }
        .span{
            color: $secondary-color
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h1{
            font-size: 1.5rem;
            padding-top: 2rem;
        }
        p{
            font-size: .9rem;
            opacity: .8;
            line-height: 2;
            padding-top: 1rem;
        }
    }
}
</style>