<template>
  <div class="row workingspace" href>
    <div class="col-lg-6">
      <img src="../../assets/image/covernya (2).png" alt="working" class="img-fluid">
    </div>
    <div class="col-lg-5">
      <h3>Read your <span>book </span>just from <span>home</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates nobis eligendi modi? Provident!</p>
      <router-link to="/" class="btn btn-primary tombol">Gallery</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailLanding',
};
</script>

<style scoped>
.workingspace{
    margin-top: 120px;
    text-align: center;
}
.workingspace img{
    border-radius: 20px;
    width: 600px;
}

.workingspace h3{
    font-size: 52px;
    font-weight: 200;
    text-transform: uppercase;
    margin-top: 30px;
}

.workingspace h3 span{
    font-weight: 500;
}

.workingspace p{
    font-size: 18px;
    color: #acacac;
    font-weight: 200;
    margin: 30px 0;
}

@media (min-width: 992px) {
  .workingspace{
    text-align: left;
  }
}
</style>
