<template>
  <div class="contact">
      <Topbar />
      <Navbar />
      <div class="contact__wrapper">
          <div class="container">
            <div class="text text-right">
            <h1>Contact Us</h1>
            <p>Do you have any difficulties using the platform, talk to us now!</p>
        </div>
        </div>
      </div>
      <div class="contact__details">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <div class="info__wrapper d-flex align-items-center">
                        <div class="icon__wrapper">
                                <p><i class="fa fa-envelope"></i></p>
                        </div>
                        <p class="pl-3">hello@dominioninvestment.com</p>
                    </div>
                  </div>
                   <div class="col-md-4">
                      <div class="info__wrapper d-flex align-items-center">
                        <div class="icon__wrapper">
                            <p><i class="fa fa-phone"></i></p>
                        </div>
                        <p class="pl-3">08103525344</p>
                    </div>
                  </div>
                   <div class="col-md-4">
                      <div class="info__wrapper d-flex align-items-center">
                     <div class="icon__wrapper">
                            <p><i class="fa fa-cubes"></i></p>
                     </div>
                        <p class="pl-2">115 Lairg Road, NEWCHURCH, UK</p>
                    </div>
                  </div>
              </div>
              <div class="row heading">
                  <div class="col-md-2"></div>
                  <div class="col-md-8 text-center">
                      <h1>Contact Us</h1>
                      <h6>Feel free to call us for enquiries or for any form of information and or complaints. Fill the form below and our support team will reach out to you shortly</h6>
                      <div class="col-md-2"></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                       <form action="">
                          <div class="row">
                              <div class="col-md-5">
                                  <div class="form-group">
                                      <label for="">First Name</label>
                                      <input type="text" class="form-control" placeholder="John">
                                  </div>
                                   <div class="form-group">
                                        <label for="">Last Name</label>
                                      <input type="text" class="form-control" placeholder="Smith">
                                  </div>
                                   <div class="form-group">
                                        <label for="">Email Address</label>
                                      <input type="email" class="form-control" placeholder="example@gmail.com">
                                  </div>
                              </div>
                              <div class="col-md-7">
                                   <label for="">Your Message</label>
                                  <textarea name="" id="" cols="20" rows="6" class="form-control">
                                  </textarea><br><br>
                                  <button type="submit" class="message__btn">Send Message</button>
                              </div>
                          </div>
                      </form>
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
.contact__wrapper{
    background: linear-gradient(rgba(4,9,30,.8), rgba(4,9,30,.8)), url('../assets/images/banner4.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 7rem 0;
  .text{
    h1{
      font-weight: 900;
    }
    p{
      // font-size: .9rem;
      opacity: .8;
    }
  }
}
.contact__details{
    padding: 5rem 0;
    background: #F5F5F5;
    .info__wrapper{
        box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
        background: #fff;
        .icon__wrapper{
            background: $secondary-color;
            color: #fff;
            padding: 1.5rem;
        }
    }
    .heading{
        padding: 3rem 0;
        h1{
            font-weight: 900;
            padding-bottom: .5rem;
        }
        h6{
            line-height: 1.8;
        }
    }
    form{
        background: #fff;
        padding: 2rem;
        border-radius: 3px;
        label{
            font-weight: bold;
            color: #627081;
            font-size: .8rem;
        }
        input{
            height: 3.5rem;
            // margin-bottom: 2rem;
            box-shadow: none;
            color: #627081;
            &::placeholder{
                color: #627081;
                font-weight: 400;
            }
        }
        .message__btn{
            background: $secondary-color;
            color: #fff;
            border:none;
            border-radius: 20px;
            // width: 100%;
            padding: 1rem 2rem;
        }
    }
}
//MEDIA QUERIES
  @media only screen and (max-width: 600px){
    .contact__wrapper{
      padding: 4rem 0;
      p{
        font-size: .9rem;
      }
    }
    .contact__wrappert{
      .heading {
        h1{
          font-size: 1.8rem;
        }
        p{
          font-size: 1rem;
          color: #627081;
        }
      }
    }
  }
</style>