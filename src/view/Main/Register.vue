<template>
  <div class="login-container">
    <Header class="pict-container col-lg-7"/>
    <div class="form-container col-lg-5">
      <FormInput :title= 'title'/>
      <FormRegister/>
      <LoginButton class= 'login-button' :button1= 'button1' :button2= 'button2'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/_module/Header.vue';
import FormInput from '../../components/_module/FormInput.vue';
import FormRegister from '../../components/_module/FormRegister.vue';
import LoginButton from '../../components/_module/LoginButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    FormInput,
    FormRegister,
    LoginButton,
  },
  data() {
    return {
      title: 'Register',
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
    padding: 50px;
    min-height: 100vh;
    color: #424242;
}
.login-button{
  margin-top: 50px;
}
</style>
