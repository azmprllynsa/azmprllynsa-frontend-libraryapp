<template>
<div>
  <NavbarLanding/>
  <HeaderLanding/>
  <PanelLanding/>
  <DetailLanding/>
  <testimonial-landing/>
  <footer-landing/>
</div>
</template>

<script>
import HeaderLanding from '../../components/_module/HeaderLanding.vue';
import NavbarLanding from '../../components/_module/NavbarLanding.vue';
import PanelLanding from '../../components/_module/PanelLanding.vue';
import DetailLanding from '../../components/_module/DetailLanding.vue';
import TestimonialLanding from '../../components/_module/TestimonialLanding.vue';
import FooterLanding from '../../components/_module/FooterLanding.vue';

export default {
  name: 'App',
  components: {
    HeaderLanding,
    NavbarLanding,
    PanelLanding,
    DetailLanding,
    TestimonialLanding,
    FooterLanding,
  },
};
</script>

<style>

</style>
