<template>
<div class="card" style="width: 18rem;">
  <img src=" " class="card-img-top" alt="Picture">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on
      the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: ['book'],
};
</script>
<style scoped>
.card{
  margin-top: 500px;
  margin-left: 50px;
}
</style>
