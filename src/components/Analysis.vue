<template>
  <div class="analysis">
      <div class="container">
          <div class="row">
              <div class="col-md-6 text">
                  <h2>REAL TIME <span class="span">RECOMMENDATIONS</span> & ANALYSIS</h2>
                  <p>Trading is exciting and there is a lot of economic data from around the world to look at in order to help you invest effectively. Here we will provide expert technical analysis on currency pairs, stocks, futures, commodities and indices on all of the financial markets worldwide.<br /><br />With our expert analyst recommendations, you’ll be able to understand where to place your trades and what assets will be the most profitable for you. We have all the Moving Averages and Indicators you will need, without you having to read through complex Wall Street information to understand what investments are likely to give you the best returns. </p>
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
.analysis{
    padding: 2rem 0;
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('../assets/images/section-banner3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .text{
        h2{
            font-weight: bold;
        }
        .span{
            color: $secondary-color;
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h2{
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
        p{
            font-size: .85rem;
            opacity: .9;
            line-height: 2;
        }
    }
}
</style>