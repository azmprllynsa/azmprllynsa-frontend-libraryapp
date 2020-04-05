<template>
<header class="cover-img">
  <header class="navigation">
    <NavbarDetail/>
  </header>
</header>
</template>

<script>

import NavbarDetail from '../_module/NavbarDetail.vue';

export default {
  name: 'HeaderDetail',
  components: {
    NavbarDetail,
  },
};
</script>

<style scoped>
.cover-img{
  min-height: 454px;
  background-image: url('../../assets/image/covernya.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
