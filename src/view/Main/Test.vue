<template>
<header class="coverimg" v-bind:coverimg="book.image">
  <header class="navigation">
    <NavbarDetail/>
  </header>
</header>
</template>

<script>

// import NavbarDetail from '../_module/NavbarDetail.vue';

export default {
  name: 'HeaderDetail',
  components: {
    // NavbarDetail,
  },
  props: ['book'],

  mounted() {
    const cover = document.querySelector('.coverimg');
    cover.style.backgroungImage = `url('${this.book.image}')`;
  }
  ,
};
</script>

<style scoped>
.coverimg{
  min-height: 454px;
  background-image: url('../../assets/image/covernya.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
