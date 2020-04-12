<template>
<div>
  <NavbarLanding/>
  <HeaderLanding/>
  <PanelLanding/>
  <!-- <DetailLanding/> -->
  <div class="book-list">
    <h1>List Book</h1>
    <Card/>
  </div>

  <testimonial-landing/>
  <footer-landing/>
</div>
</template>

<script>
import HeaderLanding from '../../components/_module/HeaderLanding.vue';
import NavbarLanding from '../../components/_module/NavbarLanding.vue';
import PanelLanding from '../../components/_module/PanelLanding.vue';
// import DetailLanding from '../../components/_module/DetailLanding.vue';
import TestimonialLanding from '../../components/_module/TestimonialLanding.vue';
import FooterLanding from '../../components/_module/FooterLanding.vue';
import Card from '../../components/_module/Card.vue';

export default {
  name: 'App',
  components: {
    HeaderLanding,
    NavbarLanding,
    PanelLanding,
    // DetailLanding,
    Card,
    TestimonialLanding,
    FooterLanding,
  },
};
</script>

<style scoped>
.book-list h1 {
  margin-top: 50px;
  margin-left: 30px !important;
}
</style>
