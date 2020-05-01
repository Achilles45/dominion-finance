<template>
  <div class="about" id="about">
      <div class="container">
          <div class="row">
              <div class="col-md-4 heading">
                  <h2>Why<br />Dominion Investment</h2>
                  <p>Dominion Investment Co. is your forex management company of choice that helps you make more money trading the biggest financial market in the world (the forex market). It is managed by a seasoned group of traders that has a track record of delivering value.</p>
                  <router-link to="/signup" class="about__link">Get started here <i class="fa fa-long-arrow-alt-right"></i></router-link>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7">
                <div class="card__wrapper">
                    <div class="card__content">
                        <div class="content">
                           <img src="../assets/images/chart.svg" class="img-fluid icons" alt="">
                           <h5>Forex Trading</h5>
                           <p>Our strategy allows us to trade and pay our investors good returns weekly. Terms and conditions apply.</p>
                          </div>
                    </div>
                    <div class="card__content">
                       <div class="content">
                           <img src="../assets/images/book.svg" class="img-fluid icons" alt="">
                           <h5>Forex Training</h5>
                           <p>You can learn to trade the financial market from the comfort of your home following our structured guide.</p>
                          </div>
                    </div>
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
    background: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .heading{
        padding-top: 2rem;
        h2{
            font-weight: 900;
            color: #fff;
            padding-bottom: 1.5rem;
            font-size: 2.5rem;
        }
        p{
            color: #fff;
            line-height: 1.8;
            font-size: .95rem;
            font-weight: 400;
            opacity: .7;
        }
        .about__link{
            text-transform: normal;
            font-weight: 400;
            color: $secondary-color;
            border-bottom: 1px dashed $secondary-color;
            font-size: 1.1rem;
            text-decoration: none;
            padding: .4rem 0;
        }
        .fa-long-arrow-alt-right{
            animation-name: animate;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 30px;
        margin-top: 5rem;
          .card__content{
                background: transparent;
                border-radius: 4px;
                padding: 2rem;
                border: 1px solid #ccc;
                position: relative;
                .icons{
                    max-width:55px;
                    height: auto;
                }
                h5{
                    font-weight: bold;
                    color: $secondary-color;
                    padding-top: .8rem;
                    line-height: 1.45;
                    font-size: 1.2rem;
                    // opacity: .9;
                }
                p{
                    // opacity: .8;
                    padding-top: .4rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color:#fff;
                    font-size: .93rem;
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
        .heading{
            h2{
                font-size: 1.9rem;
            }
            p{
                opacity: .8 !important;
            }
        }
        .card__wrapper{
            margin-top: 3rem !important;
        }
    }
}
</style>