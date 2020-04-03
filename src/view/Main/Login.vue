<template>
  <div class="login-container">
    <Header class="pict-container"/>
    <div class="form-container">
      <FormInput :title= 'title'/>
      <FormLogin/>
      <Checkbox/>
      <LoginButton :button1= 'button1' :button2= 'button2'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/_module/Header.vue';
import FormInput from '../../components/_module/FormInput.vue';
import FormLogin from '../../components/_module/FormLogin.vue';
import Checkbox from '../../components/_module/Checkbox.vue';
import LoginButton from '../../components/_module/LoginButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    FormInput,
    FormLogin,
    Checkbox,
    LoginButton,
  },
  data() {
    return {
      title: 'Login',
      button1: 'Login',
      button2: 'Sign Up',
    };
  },

  mounted() {
    axios.get('http://api.tvmaze.com/search/shows?q=naruto')
      .then((res) => {
        this.books = res.data;
      });
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
}

@media (max-width: 576px) {
    .pict-container {
        display: none;
    }
    .form-container {
        width: 100%;
    }
}
</style>
