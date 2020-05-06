<template>
  <div class="trading">
      <Topbar />
      <Navbar />
      <div class="wrapper">
          <div class="container">
              <div class="row">
                  <div class="col-md-7 text">
                      <h1>How to trade</h1>
                      <p>Trading is quite simple and does not require any previous experience or financial know-how.
                        At Dynamic Investment Company, you are assigned a personal account manager who will teach you how to properly analyze and understand the financial markets. Additionally, we give you access to a library stocked with tutorial videos that explain everything you need to know along with e-Books that you can download and refer to.</p><br>
                        <h4 class="span">You can easily trade in 4 simple steps</h4>
                        <h6 class="span">Step 1</h6>
                        <p>Choose which asset you want to trade on: Stocks, Currencies, Indices or Commodities.</p><br>
                         <h6 class="span">Step 2</h6>
                         <p>Enter the expiry time and the specific amount you want to trade.</p><br>
                         <h6 class="span">Step 3</h6>
                         <p>Select Call if you believe the asset’s price will rise above the current level. If you believe it will fall below the current level then select Put.</p><br>
                        <h6 class="span">Step 4</h6>
                        <p>Approve the trade and wait for your option to expire</p><br><br><br>
                        <router-link to="/signup" class="step__btn">START NOW</router-link>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
components:{
    Topbar,
    Navbar,
    Footer
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.wrapper{
    background:linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('../assets/images/section-banner5.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    padding: 3rem 0;
    .text{
        h1{
            text-transform: uppercase;
            font-weight: bold;
            padding-bottom: 1rem;
        }
        p{
            font-size: .92rem;
            line-height: 1.7;
            opacity: .9;
        }
        .span{
            color: $secondary-color;
        }
        h6{
            font-weight: bold;
        }
        .step__btn{
            font-weight: 400;
            color: $secondary-color;
            border: 1px solid $secondary-color;
            padding: 1.2rem 3.5rem;
            margin-top: 2rem;
            background: #000;
            text-decoration: none;
        }
    }
}
</style>