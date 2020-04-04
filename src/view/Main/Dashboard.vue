<template>
  <div class="dashboard">
    <NavbarDashboard/>
  </div>
</template>

<script>
import NavbarDashboard from '../../components/_module/NavbarDashboard.vue';

export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
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
