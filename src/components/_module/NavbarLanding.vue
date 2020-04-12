<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link to='/' class="navbar-brand">Library</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to='/' class="nav-item nav-link active">Home <span class="sr-only">
            (current)</span></router-link>
          <router-link to='/dashboard' class="nav-item nav-link">Categories</router-link>
          <router-link to='/' class="nav-item nav-link">Years</router-link>
          <router-link to='/' class="nav-item nav-link">About</router-link>
          <router-link to='/login' class="nav-item btn btn-primary tombol">
            Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar{
    position: relative;
    z-index: 1;
}

.navbar-brand{
    font-family: Airbnb Cereal App;
    font-size: 32px;
}

.tombol{
    text-transform: uppercase;
    border-radius: 40px;
}

@media (min-width: 992px) {

    .navbar-brand, .nav-link{
        color: #fff !important;
        text-shadow: 1px 1px 1px rgba(0, 0,0,.7);
    }

    .nav-link{
        text-transform: uppercase;
        margin-right: 30px;
    }

    .nav-link:hover::after{
        content: '';
        display: block;
        border-bottom: 3px solid #0B63dC;
        width: 50%;
        margin: auto;
        margin-bottom: -8px;
        padding-bottom: 5px;
    }
}
</style>
