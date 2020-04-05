<template>
<div>
  <Logo/>
  <Intro :title='title'/>
  <FooterTnc class="tnc"/>
</div>


</template>
<script>

import Logo from '../_module/Logo.vue';
import Intro from '../_module/Intro.vue';
import FooterTnc from '../_module/FooterTnc.vue';


export default {
  name: 'FormInput',
  components: {
    Logo,
    Intro,
    FooterTnc,
  },
  props: ['title'],
};
</script>
<style scoped>
/* .tnc {
  position: absolute;
  top: 950px;
} */

</style>
