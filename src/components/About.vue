<template>
  <div class="about" id="about">
      <div class="container">
          <div class="row">
              <div class="col-12 text">
                  <h1><span class="heading">YOUR TRADING</span> RESOURCE CENTER</h1>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                  <img src="../assets/images/table.png" class="card__img" alt="">
                  <h2>Economic calender</h2>
                  <p>Stay up to date with all that is going on in the markets with our economic calendar.
                    Using the economic calendar as a trading tool is an integral way to pinpoint key trading opportunities, thereby increasing your profit potential.</p>
                   <div class="bottom pt-4">
                        <router-link to="/faqs" class="card__btn">TAKE A LOOK</router-link>
                   </div>
              </div>
               <div class="card__content">
                  <img src="../assets/images/book.png" class="card__img" alt="">
                  <h2>Trading Academy</h2>
                  <p>We take pride in making trading accessible for everyone.
                    This is why we created the Dynamic Investment Academy consisting of numerous video tutorials, eBooks and many other educational materials.</p>
                    <div class="bottom pt-4">
                        <router-link to="/signup" class="card__btn">ENROLL NOW</router-link>
                    </div>
              </div>
               <div class="card__content">
                  <img src="../assets/images/tv.png" class="card__img" alt="">
                  <h2>Webinars</h2>
                  <p>Start honing your trading skills with our FREE webinars given by trading professionals.
                    Designed with you in mind, our easy-to-follow webinars cover everything, spanning from an introduction to trading to developing the most effective trading strategies.</p>
                 <div class="bottom pb-5">
                        <router-link to="/glossary" class="card__btn">LEARN MORE</router-link>
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
.about{
    padding: 3rem 0;
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('../assets/images/section-banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .text{
        .heading{
            color: $secondary-color;
        }
        h1{
            font-weight: bold;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        grid-gap: 30px;
        margin-top: 2.5rem;
          .card__content{
                background: transparent;
                border-radius: 3px;
                padding: 1rem;
                  border: .5px solid #333;
                text-align: center;
                .card__img{
                    max-width:55px;
                    height: auto;
                    margin-top: 2rem;
                }
                h2{
                    font-weight: 400;
                    color: $secondary-color;
                    padding-top: 2rem;
                    line-height: 1.45;
                    font-size: 1.8rem;
                    padding-bottom: 1rem;
                }
                p{
                    opacity: .8;
                    padding-top: .4rem;
                    font-weight: 400;
                    line-height: 2;
                    color:#fff;
                    font-size: .9rem;
                    padding-bottom: 4rem;
                }
                .card__btn{
                    color: $secondary-color;
                    background: transparent;
                    padding: 1rem 2rem;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: bold;
                    text-decoration: none;
                    border-radius: 3px;
                    border: 1px solid $secondary-color;
                }
            }
    }
}
//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(30px);
        opacity: 1;
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .about{
        padding: 2rem 0 !important;
       .text{
           h1{
               font-size: 1.3rem;
               letter-spacing: 2px;
           }
       }
       .card__wrapper{
           .card__content{
               h2{
                   font-size: 1.5rem;
                   padding-top: .5rem !important;
               }
               p{
                   font-size: .8rem;
                   line-height: 1.9;
                   padding-bottom: .5rem !important;
               }
               .bottom{
                   padding-bottom: 1.5rem;
               }
           }
       }
    }
}
</style>