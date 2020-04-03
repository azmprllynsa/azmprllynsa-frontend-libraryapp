<template>
  <div class="login-container">
    <Header class="pict-container col-lg-7"/>
    <div class="form-container col-lg-5">
      <FormInput :title= 'title'/>
      <FormLogin/>
      <Checkbox/>
      <LoginButton class= 'login-button' :button1= 'button1' :button2= 'button2'/>
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
/* .login-container {
  display: flex;
}

.form-container {
    display: flex;
    flex-direction: column;
} */

.login-button{
  margin-top: 50px;
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
