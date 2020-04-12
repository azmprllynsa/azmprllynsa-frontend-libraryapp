<template>
  <div class="cards-list">
    <div class="cards-body" v-for='book in books.data' :key='book.data'>
      <router-link class="detail-link" :to="'detail/' + book.id">
      <img :src="book.image" alt="tes">
      <h2>{{ book.title }}</h2>
      <p>{{ book.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Card',

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

.cards-list{
  font-family: Airbnb Cereal App;
  box-sizing: border-box;
  /* width: 1350px; */
  height: 100%;
  display: flex;
  margin-top: -30px;
  justify-content: start;
  flex-wrap: wrap;
  /* overflow: hidden; */
}

.cards-body{
  width: 280px;
  height: 280px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, .25);
  margin-left: 25px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, .25);
  margin-right: 30px;
  margin-top: 40px;
  overflow: hidden;
}

.detail-link {
  text-decoration: none;
  color: black;
}

.cards-body img{
  width: 280px;
  height: 150px;
  box-sizing: border-box;
}

.cards-body h2{
  text-align: center;
  margin-bottom: 15px;
  width: 250px;
  height: 45px;
  /* overflow: hidden; */
  margin-top: 5px;
  margin-left: 10px;
  font-size: 18px;
}

.cards-body p{
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: -20px;
  padding: 5px;
}
</style>
