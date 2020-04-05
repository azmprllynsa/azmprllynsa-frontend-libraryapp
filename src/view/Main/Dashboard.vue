<template>
<div>
  <div class="dashboard">
    <NavbarDashboard/>
  </div>
  <ContainerBook/>
  <Card/>
  <br>
  <br>
  </div>

</template>

<script>
import NavbarDashboard from '../../components/_module/NavbarDashboard.vue';
import ContainerBook from '../../components/_module/ContainerBook.vue';
import Card from '../../components/_module/Card.vue';

export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
    ContainerBook,
    Card,
  },
};
</script>

<style scoped>

  .book{
    padding: 50px 80px;
    font-size: 30px;
  }
  .list-book{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    display: flex;
  }
  .list-book h1{
    display: block;
  }
</style>
