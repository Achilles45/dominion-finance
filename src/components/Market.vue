<template>
  <div class="intro" id="features">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h2>FEATURES THAT MAKES US STANDOUT</h2>
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <img src="../assets/images/growt.svg" class="card__icon" alt="">
                  <h4>Growth Opportunities</h4>
                  <p>We provide you access to investments and  high growth opportunies that are exclusively out of reach for most people, ranging from agricultural trade, cryptocurrencies to real estate and others.</p>
              </div>
               <div class="card__content">
                  <img src="../assets/images/safe.svg" class="card__icon" alt="">
                  <h4>Safe & Secured</h4>
                  <p>All our systems are built with bank grade security to make sure all transactions on any of our platforms are safe for our users. We and our fund partners maintain quality security systems.</p>
              </div>
               <div class="card__content">
                  <img src="../assets/images/support.svg" class="card__icon" alt="">
                  <h4>24/7 Support</h4>
                  <p>We have a top notch customer support and satisfaction department that respond to all your queries in realtime. If you ever feel stuck, use the live chat widget below.</p>
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
.intro{
    background: linear-gradient(rgba(0,0,0,.92), rgba(0,0,0,.92)), url('../assets/images/meeting2.jpeg');
    padding: 3rem 0;
    color: #fff;
    background-attachment: fixed;
    background-position: center;
    h2{
        color: $secondary-color;
        font-size: 2rem;
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        padding-top: 1.5rem;
        .card__content{
            text-align: center;
            background: transparent;
            border-radius: 4px;
            padding: 1.5rem 2rem;
            .card__icon{
                max-width: 50px;
                height: auto;
            }
            h4{
                padding-top: 1.3rem;
                padding-bottom: 1rem;
                font-weight: bold;
                color: $secondary-color;
                font-size:1.3rem;
                opacity: .85;
            }
            p{
                color: #fff;
                font-size: .93rem;
                line-height: 1.8;
                opacity: .7
            }
        }
    }
}
</style>