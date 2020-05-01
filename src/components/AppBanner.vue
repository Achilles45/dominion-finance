<template>
  <div class="banner">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>Create a free account in a minute</h3>
                  <p>The onboarding process is very simple and completely paperless and can be completed in a minute</p>
                  <router-link to="/signup" class="signup__btn">Create free Account   <i class="fas fa-long-arrow-alt-right 7x"></i></router-link>
              </div>
              <div class="col-md-3"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.banner{
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.92) 100%), url('../assets/images/meeting.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    // background-attachment: fixed;
    padding: 7rem 0;
    color: #fff;
    h3{
        text-transform: capitalize;
        font-weight: bolder;
        text-shadow: 0.02em 0.02em 0.03em #fff;
        padding-bottom: 1rem;
    }
    p{
        opacity: .8;
        padding-bottom: 2rem;
    }
    .signup__btn{
        background: #fff;
        text-decoration: none;
        padding: 1rem 3rem;
        color:$primary-color;
        font-weight: bold;
        border-radius: 4px;
    }
     .fa-long-arrow-alt-right{
        animation-name: animate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
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
</style>