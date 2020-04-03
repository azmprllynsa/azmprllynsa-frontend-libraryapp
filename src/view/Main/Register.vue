<template>
  <div class="login-container">
    <Header class="pict-container"/>
    <div class="form-container">
      <FormInput :title= 'title'/>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Header from '../../components/_module/Header.vue';
import FormInput from '../../components/_module/FormInput.vue';

export default {
  name: 'App',
  components: {
    Header,
    FormInput,
  },
  data() {
    return {
      title: 'Register',
    };
  },

  mounted() {

  },
};
</script>

<style scope>
.login-container {
  display: flex;
}
.pict-container {
  width: 60%;
}
.form-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    min-height: 100vh;
    color: #424242;
}
</style>
