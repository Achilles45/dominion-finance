<template>
  <div class="topbar">
      <div class="container">
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-6">
              <form action="" class="d-flex jsutify-content-between">
                <input type="text" class="form-control d-none d-lg-block" placeholder="Enter email address" v-model="email">
                <input type="password" class="form-control d-none d-lg-block" placeholder="Enter password" v-model="password">
                <a href="/signup" class="topbar__btn-2 d-xs-block mr-2">REGISTER</a>
                <a href="/signin" class="topbar__btn">LOGIN</a>
              </form>
              <p class="singup__text d-none d-lg-block">New member? <router-link to="/signup">Sign Up</router-link></p>
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
.topbar{
    background: #000000 !important;
    color: #fff;
    padding: .7rem 0;
    font-size: .9rem;
    // opacity: .85;
    form{
      input{
        height: 2rem;
        border-radius: 0px;
        margin: 0px .4rem;
        box-shadow: none;
        &::placeholder{
          font-size: .75rem;
        }
      }
      a{
        background: $secondary-color;
        height: 2rem;
        border-radius: 0px;
        border: none;
        width: 100%;
        text-align: center;
        color: #000;
        padding-top: .35rem;
        font-size: .8rem;
      }
      .topbar__btn-2{
        background: transparent;
        height: 2rem;
        border-radius: 0px;
        border: 1px solid $secondary-color;
        width: 100%;
        text-align: center;
        color: $secondary-color;
        padding-top: .35rem;
        font-size: .8rem;
      }
    }
    .singup__text{
      padding-top: .6rem;
      text-align: right;
      font-size: .8rem;
      a,  .topbar__btn-2{
        color: $secondary-color;
        font-weight: bold;
      }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
  form{
    margin-left: 10rem;
    a{
      width: 80% !important;
    }
  }
}
</style>