<template>
  <div class="plans">
      <div class="container">
          <div class="row">
              <div class="col-12 text">
                  <h1>INVESTMENT PLANS</h1>
                  <p>Our investment plans are priced so everyone can participate</p>
                  <hr>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>BASIC</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $500</h6>
                  <hr>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">10% BONUS</span></p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Market Review</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">Choose Plan</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>STANDARD</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $1000</h6>
                  <hr>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">10% BONUS</span></p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Market Review</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">Choose Plan</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>PREMIUM</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $2000</h6>
                  <hr>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">10% BONUS</span></p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Market Review</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">Choose Plan</router-link>
                  </div>
              </div>
              <div class="card__content">
                  <div class="heading text-center">
                      <h4>DELUEXE</h4>
                  </div>
                  <h6 class="text-center pt-4 pb-4">Minimum Deposit: $3000</h6>
                  <hr>
                  <div class="card__details">
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; <span class="bonus">10% BONUS</span></p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Easy Withdrawal</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; Market Review</p>
                      <p><i class="fa fa-check-square"></i>&nbsp;&nbsp; 24/7 Customer Support</p>
                  </div>
                  <div class="bottom text-center">
                      <router-link to="/signup" class="plans__btn">Choose Plan</router-link>
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
    background: #000;
    padding: 3rem 0;
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
        margin-top: 2.5rem;
         hr{
            background: #fff;
            opacity: .4;
        }
        .card__content{
            border-radius: 3px;
            border: 1px solid #ccc;
            .heading{
                background: #313131;
                padding: .8rem;
                border-radius: 3px;
               h4{
                    color: $secondary-color;
                    font-weight: bold;

               }
            }
            .card__details{
                padding: 1rem 2rem;
                .fa-check-square{
                    margin-right: 1.4rem;
                    color: $secondary-color;
                }
                p{
                    font-size: .9rem;
                    opacity: .8;
                }
            }
            .bottom{
                padding-top: 5rem;
                padding-bottom: 3rem;
                .plans__btn{
                    background: $secondary-color;
                    font-weight: bold;
                    padding: .8rem 2rem;
                    border-radius: 2px;
                    color: #000;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>