<template>
  <footer class="footer">
      <div class="container">
         <div class="row">
             <div class="col-md-5">
                 <div class="row">
                     <div class="col-md-4">
                         <h6>About Us</h6>
                         <p><router-link to="/">Home</router-link></p>
                         <p><router-link to="/glossary">Glossary</router-link></p>
                         <p><router-link to="/faqs">FAQ</router-link></p>
                        <p><router-link to="/contact">Contact Us</router-link></p>
                     </div>
                      <div class="col-md-4">
                         <h6>Start trading</h6>
                         <p><router-link to="/signup">Open account</router-link></p>
                        <p><router-link to="/how-to-trade">Tradings</router-link></p>
                       <p><router-link to="/signup">Account types</router-link></p>
                     </div>
                      <div class="col-md-4">
                         <h6>Legal</h6>
                        <p><router-link to="/">Terms & Conditions</router-link></p>
                         <p><router-link to="/">Privacy Policy</router-link></p>
                         <p><router-link to="/faqs">FAQs</router-link></p>
                     </div>
                 </div>
             </div>
             <div class="col-md-2"></div>
             <div class="col-md-2 text-center contact">
                 <h6>Head Office: 2609 W. Orangethrope Ave, Fullerton, CA 90621.</h6>
                 <h6 span class="span">Terms of Use <br> Privacy Policy</h6>
                 <img src="../assets/images/shield.png" class="img-fluid" alt="">
             </div>
             <div class="col-md-3">
                 <form action="">
                     <input type="text" class="form-control" placeholder="*Full Name">
                     <input type="email" class="form-control" placeholder="*Email Address">
                     <input type="text" class="form-control" placeholder="*Subject">
                     <textarea name="" id="" cols="20" rows="5" class="form-control">
                         Send a mail to dynamicinvestment7@gmail.com
                     </textarea>
                     <button type="submit" class="form__btn">SEND</button>
                 </form>
             </div>
         </div>
         <div class="row pt-3">
             <div class="col-12 text-center">
                 <small>CFDs trading involves significant risk. We strongly advise that you read our Terms & Conditions. Although the risk when trading CFDs is fixed for each individual trade, the trades are live and it is possible to lose an initial investment, particularly if a trader chooses to place his entire investment to a single live trade. It is highly recommended that traders choose a proper money management strategy which limits the total consecutive trades or total outstanding investment.</small>
             </div>
         </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.footer{
    background: #0D0D0D;
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 5rem 0;
    h6{
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    p{
        line-height: 1 !important;
        a{
            color: #fff;
            text-decoration: none;
            font-size: .85rem;
            opacity: .8;
        }
    }
    .contact{
        border-left: 1px solid #333;
        h6{
            font-size: .9rem;
        }
        .span{
            color: $secondary-color;
        }
    }
    form{
        input{
            margin-bottom: 1rem;
            height: 2.5rem;
            border-radius: 0px;
            box-shadow: none;
            &::placeholder{
                font-size: .8rem;
            }
        }
        textarea{
            border-radius: 0px;
            box-shadow: none;
           font-size: .9rem;
           margin-bottom: 1rem;
        }
        .form__btn{
            background: $secondary-color;
            width: 100%;
            border:none;
            padding: .6rem 1rem;
            font-weight: bold;
            font-size: .9rem;
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    form{
        flex-direction: column;
        input{
            flex: 1;
            padding: 1rem 1rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
        .form__btn{
            margin-left: 0 !important;
            padding: 1rem !important;
        }
    }
    .footer__bottom{
          text-align: justify !important;
        small{
        font-size: .9rem;
    }
    }
}
</style>