<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/_module/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    addBookmaster(newBook) {
      this.books = [...this.books, newBook];
    },
  },
  data() {
    return {
      books: [
      ],
      container: null,
    };
  },
  mounted() {
    axios.get('http://api.tvmaze.com/search/shows?q=naruto')
      .then((res) => {
        this.books = res.data;
      });
  },
};
</script>

<style>

</style>
