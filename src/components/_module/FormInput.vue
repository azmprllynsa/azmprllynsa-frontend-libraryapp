<template>
<div>
  <Logo/>
  <Intro :title='title'/>
  <FooterTnc class="tnc"/>
</div>


</template>
<script>

import Logo from './Logo.vue';
import Intro from './Intro.vue';
import FooterTnc from './FooterTnc.vue';


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
