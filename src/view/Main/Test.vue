<template>
  <Input/>
</template>

<script>
import Input from '../../components/_module/Input.vue';

export default {
  name: 'Test',
  components: {
    Input,
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
