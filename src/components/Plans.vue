<template>
  <div class="plans">
      <div class="container">
          <div class="row">
              <div class="col-12 text">
                  <h1>INVESTMENT PLANS</h1>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>BASIC</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $50</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">10% BONUS</span></p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Withdrawal process same day</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/5 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Daily Market Review</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>STANDARD</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $1000</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">50% BONUS</span></p>
                    <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Withdrawal process same day</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/5 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Daily Market Review</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>PREMIUM</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $2000</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">75% BONUS</span></p>
             <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Withdrawal process same day</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/5 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Daily Market Review</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>DELUEXE</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $3000</h6>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">CUSTOM MADE BONUS</span></p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Withdrawal process same day</p>
                       <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/5 Customer Support</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Daily Market Review</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">OPEN ACCOUNT</router-link>
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
.plans{
    padding: 3rem 0;
      background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('../assets/images/section-banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center;
    background-position: fixed;
    color: #fff;
    .text{
        h1{
            font-weight: bold;
        }
        hr{
            background: #fff;
            opacity: .4;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 25px;
        margin-top: 2rem;
        margin-bottom: 3rem;
         hr{
            background: #fff;
            opacity: .4;
        }
        .card__content{
            border: .5px solid #333;
            h6{
                color: #fff;
                text-transform: uppercase;
                font-size: .9rem;
                opacity: .8;
                font-weight: bold;
                border-bottom: 1px solid #333;
            }
            .heading{
                background: #313131;
                padding: .8rem;
               h4{
                    color: $secondary-color;
                    font-weight: bold;

               }
            }
            .card__details{
                padding: 1rem 2rem;
                .fa-check-square{
                    margin-right: 1.1rem;
                    color: $secondary-color;
                }
                p{
                    font-size: .8rem;
                    // opacity: .8;
                }
                .bonus{
                    color: $secondary-color;
                }
            }
            .bottom{
                padding-top: 5rem;
                padding-bottom: 3rem;
                .plans__btn{
                    background: $secondary-color;
                    font-weight: bolder;
                    padding: .8rem 2rem;
                    border-radius: 2px;
                    color: #000;
                    text-decoration: none;
                }
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h1{
            font-size: 1.3rem;
        }
    }
}
</style>