<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">We share<span> knowledge </span>
      <br> and <span> great </span> idea</h1>
      <router-link to='/register' class="btn btn-primary tombol">Sign Up</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderLanding',
};
</script>

<style scoped>
.tombol{
    text-transform: uppercase;
    border-radius: 40px;
}

.jumbotron{
    background-image: url('../../assets/image/190188-OXLQRO-735.jpg');
    background-size: cover;
    height: 540px;
    text-align: center;
    position: relative;
}

.jumbotron .container{
    z-index: 1;
    position: relative;
}

.jumbotron::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
    position: absolute;
    bottom: 0;
}

.jumbotron .display-4{
    color: #fff;
    margin-bottom: 30px;
    margin-top: 150px;
    text-shadow: 1px 1px 1px rgba(0, 0,0,.5);
    font-size: 40px;
    font-weight: 200;
}

 .jumbotron .display-4 span{
    font-weight: 500;

}

@media (min-width: 992px){
  .jumbotron{
    margin-top: -75px;
    height: 640px;
    }

  .jumbotron .display-4{
    font-size: 62px;
  }
}

</style>
