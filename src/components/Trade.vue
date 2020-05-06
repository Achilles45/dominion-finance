<template>
  <div class="trade">
      <div class="container">
          <div class="row">
              <div class="col-md-6 text">
                  <h1>TRADE <span class="span">ON THE GO</span></h1>
                  <h3 class="span">Trade anytime, anywhere with Dynamic Investment mobile trading!</h3>
                  <p>Dynamic Trading ensures that you never miss out on a trading opportunity with a fully functional mobile site that has all of the features of the desktop so you can easily trade currencies, commodities, stocks and indices, wherever you are, whenever you desire. Just simply type dynamicinvestment.net into the web browser of your iPhone, Android or tablet device, log into your Dynamic Investment Up account and start trading immediately.</p>
              </div>
              <div class="col-md-6">
                  <img src="../assets/images/phone.png" class="img-fluid" alt="">
              </div>
          </div>
          <div class="row text">
              <div class="col-12 pt-4">
                  <h3>Four steps to <span class="span">start trading</span></h3>
              </div>
              <div class="row">
                  <div class="col-md-3">
                      <img src="../assets/images/step1.png" class="step__img" alt="">
                      <h6 class="span">Open account</h6>
                      <h5>New User Registration</h5>
                  </div>
                   <div class="col-md-3">
                      <img src="../assets/images/step2.png" class="step__img" alt="">
                      <h5>Select the underlying asset and contract expiration time</h5>
                  </div>
                   <div class="col-md-3">
                      <img src="../assets/images/step3.png" class="step__img" alt="">
                      <h5>Determine whether the price of an asset is above or below the current price by expiry time</h5>
                  </div>
                   <div class="col-md-3">
                      <img src="../assets/images/step4.png" class="step__img" alt="">
                      <h5>Select the investment amount for the purchased option and open an order</h5>
                  </div>
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
.trade{
    padding: 2rem 0;
    background:url('../assets/images/section-banner5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .text{
        h1{
            font-weight: bold;
        }
        .span{
            color: $secondary-color;
        }
        p{
            padding-top: 1rem;
        }
    }
    .step__img{
        max-width: 100px;
        padding-bottom: .7rem;
        padding-top: 1rem;
    }
    h5{
        font-size: 1rem;
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h1{
            font-size: 1.8rem;
            padding-bottom: .4rem;
        }
        h3{
            font-size: 1.2rem;
        }
        p{
            line-height: 2;
            opacity: .9;
            font-size: .85rem;
        }
    }
}
</style>