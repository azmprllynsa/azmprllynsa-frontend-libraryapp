<template>
  <div class="db-header">
    <div class="navbar">
      <Sidebar/>
      <div class="column is-1 toggle-menu" v-on:click="sidebarShow">
        <img src="../../assets/image/menu.png" alt="toggle-menu" class="hamburger">
      </div>
      <div class="navbar-dropdown">
        <div class="btn-group">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
            All Categories
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Thriller</a>
            <a class="dropdown-item" href="#">Sci-Fi</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Other...</a>
          </div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
            All Times
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">2020</a>
            <a class="dropdown-item" href="#">2019</a>
            <a class="dropdown-item" href="#">2018</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Older...</a>
          </div>
        </div>
      </div>
      <div class="nav-search">
        <i class="fas fa-search"></i>
        <input type="search" name="search" placeholder="search book">
      </div>
      <router-link to="/" class="nav-logo">
        <img src="../../assets/image/bookshelf (1).png" alt="">
        <h3>Library</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'NavbarDashboard',
  components: {
    Sidebar,
  },
  methods: {
    sidebarShow() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('show-sidebar');
    },
  },
};
</script>

<style scoped>
.db-header{
    display: flex;
    z-index: 3;
    font-family: Airbnb Cereal App;
}
.navbar{
    display: flex;
    position: fixed;
    width: 100%;
    background: #fff;
    height: 70px;
    box-shadow: 0 3px 20px #999999;
}

.hamburger{
    cursor: pointer;
    margin: 15px 40px;
    }

.navbar-dropdown {
  display: none;
}
.navbar-content{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.dropdown-content{
    display: none;
    background: #fff;
    position: absolute;
    min-width: 160px;
    z-index: 1;
}

.nav-search {
  display: none;
    position: relative;
    height: 35px;
    border: 1px solid #CACACA;
    color: #CACACA;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 5px;
    margin-left: -100px;
}

.nav-search i{
    text-decoration: none;
    color: #CACACA;
    padding-left: 20px;
}

.nav-search input{
    outline: none;
    border: none;
    padding-right: 80px;
    margin-left: 5px;
}

.nav-search input::placeholder{
    color: #CACACA;
}

.nav-logo{
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
}

.nav-logo img{
    height: 50px;
}

@media only screen and (min-width: 992px) {
    .navbar-dropdown{
        display: block;
        margin-left: -200px;
    }
    .nav-search{
        display: block;
    }

    .nav-logo{
       margin-right: 70px;
    }
}
</style>
