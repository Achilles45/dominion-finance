<template>
  <div class="topbar d-none d-lg-block">
      <div class="container">
        <div class="row">
            <div class="col-md-5">
                 <i class="fa fa-phone"></i>&nbsp;&nbsp; +2348103515205, &nbsp; +2349060245065 &nbsp;  (Mon - Fri, 9am to 4pm)
            </div>
            <div class="col-md-3">
                 <i class="fa fa-envelope"></i>&nbsp;&nbsp; uratrainingfx@gmail.com
            </div>
            <div class="col-md-4">
                <i class="fa fa-cubes"></i>&nbsp;&nbsp; Terms and conditions applies to all plans
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
    background: $primary-color;
    color: #fff;
    padding: .7rem 0;
    font-size: .9rem;
    opacity: .85;
    .fa-envelope, .fa-phone, .fa-cubes{
      color: $secondary-color;
    }
}
</style>