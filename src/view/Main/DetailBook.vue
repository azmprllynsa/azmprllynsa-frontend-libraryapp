<template>
  <div>
    <HeaderDetail />
    <Rectangle/>
    <BodyDetail/>
  </div>
</template>

<script>

import axios from 'axios';
import HeaderDetail from '../../components/_base/HeaderDetail.vue';
import Rectangle from '../../components/_module/Rectangle.vue';
import BodyDetail from '../../components/_base/BodyDetail.vue';

export default {
  name: 'DetailBook',
  components: {
    HeaderDetail,
    Rectangle,
    BodyDetail,
  },

  data() {
    return {
      bookValue: {},
    };
  },

  props: ['data'],
  mounted() {
    axios.get(`http://localhost:8000/api/v1/book/${this.$route.params.data}`);
  },
};
</script>

<style scoped>

</style>
