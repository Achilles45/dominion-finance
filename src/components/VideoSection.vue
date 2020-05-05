<template>
  <div class="video__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                 <div class="ytp-cued-thumbnail-overlay" data-layer="4" style=""><div class="ytp-cued-thumbnail-overlay-image" style="background-image: url(&quot;https://i.ytimg.com/vi/f6RE-9IZZEI/sddefault.jpg&quot;);"></div><button class="ytp-large-play-button ytp-button" aria-label="Play"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></button></div>
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