<template>
  <div class="contact">
      <Topbar />
      <Navbar />
        <div class="contact__wrapper">
          <div class="container">
           <div class="row">
             <div class="col-md-2 text-center text">
               <h3>Message <br>Us</h3>
             </div>
             <div class="col-md-5">
               <form action="">
                 <div class="form-group">
                   <input type="text" class="form-control" placeholder="*First Name">
                 </div>
                  <div class="form-group">
                   <input type="text" class="form-control" placeholder="*Last Name">
                 </div>
                  <div class="form-group">
                   <input type="tel" class="form-control" placeholder="*Phone Number">
                 </div>
                  <div class="form-group">
                   <input type="email" class="form-control" placeholder="*Email Address">
                 </div>
                  <div class="form-group">
                   <input type="text" class="form-control" placeholder="*Subject">
                 </div>
                 <div class="form-group">
                   <textarea name="" id="" cols="10" rows="7" class="form-control"></textarea>
                 </div>
                 <button type="submit" class="form__btn">SEND</button>
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
    background:linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('../assets/images/section-banner5.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 3rem 0;
  .text{
    h3{
      font-weight: bold;
      color: $secondary-color;
    }
  }
  form{
    input{
      height: 3rem;
      box-shadow: none;
      border-radius: 0px;
      margin-bottom: .4rem;
    }
    .form__btn{
       background: $secondary-color;
        width: 100%;
        border:none;
        padding: .7rem 1rem;
        font-weight: bold;
        font-size: .95rem;
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