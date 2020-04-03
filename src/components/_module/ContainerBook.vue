<template>
<div>
  <div class="row md-4">
    <div v-for="book in books" :key="book.id">
      <div class="col-md-4">
  <Card :book="book"/>
  </div>
  </div>
  </div>
</div>
</template>
<script>
import Card from './Card.vue';

export default {
  name: 'ContainerBook',
  components: {
    Card,
  },
  props: ['books'],
};
</script>
<style scoped>

</style>
