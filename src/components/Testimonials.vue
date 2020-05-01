<template>
  <div class="testimonial">
    <div class="container">
      <div class="row">
          <div class="col-12">
              <h1>See what are investors are saying</h1>
              <p>Customer satisfaction is at the core of our operations</p>
          </div>
        <div class="col-12">
          <div class="testimonial__wrapper text-center">
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review.png" class="review" alt="" />
            <p>
              I can only wish i meet this company ealier in my journey to financial freedom. They always deliver even beyound my expectations. I'm so happy. Thank you!
            </p>
          </div>
        </div>
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review2.png" class="review" alt="" />
            <p>
              I now do what i love to do with my family and friends as i'm no longer worried where my next income would come from. This company has helped me so much.
            </p>
          </div>
        </div>
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review3.png" class="review" alt="" />
            <p>
              This your dream investment company. They are reliable everyday and anytime. Try them out today and thank me later.
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.testimonial {
    background: linear-gradient(rgba(0,0,0,.92), rgba(0,0,0,.92)), url('../assets/images/meeting2.jpeg');
    padding: 3rem 0;
    color: #fff;
    background-attachment: fixed;
    background-position: center;
  h1{
    font-weight: bold;
    color:$secondary-color;
    padding-top: .5rem;
    opacity: .9;
  }
  .card{
    font-size: .8rem;
    button{
      font-size: .8rem;
    }
  }
  .heading {
    small {
      font-weight: bold;
      color: #052c7d;
    }
    h1 {
      font-weight: bold;
      padding-top: 0.5rem;
      font-size: 2.4rem;
      color: #272727;
    }
  }
  .testimonial__wrapper {
    margin-top: 3rem;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    align-items: center;
    ::-webkit-scrollbar {
      height: 1px; /* height of horizontal scrollbar ← You're missing this */
      width: 1px; /* width of vertical scrollbar */
      color: red;
      display: none !important;
    }
    .testimonial__card {
      display: inline-block;
      margin: 0 0.3rem;
      min-width: 550px;
      padding: 3rem;
      position: relative;
      .icon {
        position: absolute;
        left: 20px;
        top: 20px;
        max-width: 25px;
        height: auto;
      }
      .review {
        border-radius: 50px;
        max-width: 70px;
        height: auto;
      }
      p {
        padding-top: 1rem;
        font-size: 0.9rem;
        color: #fff;
      }
    }
  }
}
</style>
