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
          <router-link to='/' class="nav-item nav-link">Categories</router-link>
          <router-link to='/' class="nav-item nav-link">Years</router-link>
          <router-link to='/' class="nav-item nav-link" href="#">About</router-link>
          <router-link to='/' class="nav-item btn btn-primary tombol" href="/login">
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

<style scope>
.navbar{
    position: relative;
    z-index: 1;
}

.navbar-brand{
    font-family: Viga;
    font-size: 32px;
}

.tombol{
    text-transform: uppercase;
    border-radius: 40px;
}
</style>
