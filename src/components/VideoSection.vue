<template>
  <div class="video__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                 <video src="../assets/images/video.mp4" controls class="img-fluid"></video>
              </div>
              <div class="col-md-6 text">
                  <h2>ABOUT <span class="span">DYNAMIC INVESTMENT</span></h2>
                  <p>Having proper information at your fingertips is crucial when it comes to making the very best trading decisions. Dynamic Investment comprehensive daily market reviews are a perfect resource for successful trading. <br><br> Dynamic Investment - Bitcoin Investment, Bitcoin Trading, Gold Investment, EFTs & Digital OPtions Trading. <br>Dynamic Investment is your leading cryptocurrency investment and trading platform that offer Bitcoin trading options, provides 24/7 customer support, high level of security, and stable deposits and withdrawals.</p>
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
        h2{
            text-transform: uppercase;
            font-weight: bolder;
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