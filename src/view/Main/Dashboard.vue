<template>
<div>
  <div class="dashboard">
    <NavbarDashboard/>
  </div>
  <carousel class="carousel-book"/>
  <p class="list-book">List Book</p>
  <Card/>
  <br>
  <br>
  </div>

</template>

<script>
import axios from 'axios';
import NavbarDashboard from '../../components/_module/NavbarDashboard.vue';
import Card from '../../components/_module/Card.vue';
import Carousel from '../../components/_module/Carousel.vue';

export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
    Card,
    Carousel,
  },
  data() {
    return {
      books: [],
    };
  },

  mounted() {
    axios.get('http://localhost:8000/api/v1/book/')
      .then((res) => {
        this.books = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.carousel-book{
  z-index: -2;
}

.list-book{
  margin-left: 50px;
  margin-top: 50px;
  font-size: 40px;
  font-weight: bold;
}
</style>
