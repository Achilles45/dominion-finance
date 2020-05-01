<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner2.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h2 class="animated bounceIn">Make secured and high yield <span class="text-color">investments</span></h2>
            <p>Join over 250 people who make safe investments and trust our experienced fund managers to deliver consistence results every week.</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner1.jpg" alt="Second slide" />
          <div class="carousel-caption">
            <h2 class="animated slideInDown animate3d">Learn to trade the biggest <span class="text-color">financial market</span></h2>
            <p
              class="animated slideInRight animate3d"
            >We have world class training strategies that allows you to go from beginner to pro trader in few weeks.</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">Get Started<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner3.jpg" alt="Third slide" />
          <div class="carousel-caption">
            <h2
              class="animated slideInDown animate3d"
            >Access our world class <span class="text-color">customer support</span></h2>
            <p
              class="animated slideInDown animate3d"
            >The customer success team is always ready to respond to all your queries in real time should you have any problem using our services.</p>
            <router-link to="/contact" class="carousel-btn animated zoomIn animate3d">Get Started<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
  }
  .carousel-img {
    width: auto;
    height: 82vh;
    display: block !important;
    width: 100vw;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 25%;
    transform: translateX(-50%, -50%);
    width: 50%;
    text-align: left;
    color:#fff;
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      padding-bottom: 1rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.02em 0.02em 0.03em #fff;
      line-height: 1.3;
    }
    .text-color{
      color: $secondary-color;
      text-shadow: 0.02em 0.02em 0.03em $secondary-color;
    }
    p {
      letter-spacing: 1px;
      font-size: 1rem;
      padding-bottom: 2rem;
      opacity: 0.5;
    }
    .fa-long-arrow-alt-right{
      margin-left: 1rem;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .carousel-btn {
      color: $secondary-color;
      background: transparent;
      padding: 1.2rem 4rem;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 3px;
      border: 1px solid $secondary-color;
      text-transform: uppercase;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 960px) {
  .carousel__wrapper {
    .carousel-overlay{
      background: rgba(0, 0, 0, 0.9) !important;
    }
    .carousel-img {
      width: auto;
      height: 100vh;
      max-height: 600px;
      display: block;
    }
    .carousel-caption {
      position: absolute;
      top: 17% !important;
      width: 70%;
      transform: translateX(-50%, -50%);
      // text-align: left;
      h2 {
        font-size: 1.2rem !important;
        padding-bottom: 2rem;
        line-height: 1.5 !important;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 2rem;
        opacity: .8 !important;
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
</style>