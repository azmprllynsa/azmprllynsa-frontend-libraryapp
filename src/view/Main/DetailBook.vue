<template>
  <div>
    <HeaderDetail/>
    <Rectangle/>
    <detail-body/>
  </div>
</template>

<script>

import HeaderDetail from '../../components/_base/HeaderDetail.vue';
import Rectangle from '../../components/_module/Rectangle.vue';
import DetailBody from '../../components/_module/DetailBody.vue';

export default {
  name: 'DetailBook',
  components: {
    HeaderDetail,
    Rectangle,
    DetailBody,
  },
};
</script>

<style scope>

</style>
