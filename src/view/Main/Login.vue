<template>
  <div class="login-container">
    <Header class="pict-container col-lg-7"/>
    <div class="form-container col-lg-5">
      <FormInput :title= 'title'/>
      <form @submit="login">
        <div class="login-input">
          <label for="email" class='login-label'>Email Address</label>
          <input type="email" id="email" placeholder="rebecca@gmail.com"
          v-model="email">
        </div>
        <div class="login-input">
          <label for="password" class="login-label">Password</label>
          <input type="password" id="password" placeholder="****************"
            v-model="password">
        </div>
        <Checkbox/>
      <LoginButton class= 'login-button' :button1= 'button1' :button2= 'button2'/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/_base/Header.vue';
import FormInput from '../../components/_base/FormInput.vue';
// import FormLogin from '../../components/_module/FormLogin.vue';
import Checkbox from '../../components/_module/Checkbox.vue';
import LoginButton from '../../components/_module/LoginButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    FormInput,
    // FormLogin,
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

  methods: {
    localData() {
      const parsed = JSON.stringify({ isLogin: true, id: this.userId, token: this.token });
      localStorage.setItem('items', parsed);
      console.log(parsed);
    },
    login(e) {
      e.preventDefault();
      axios.post('http://localhost:8000/api/v1/user/login', {
        email: this.email,
        password: this.password,
      }).then((res) => {
        this.userId = res.data.data.id;
        this.token = res.data.data.token;
        this.$router.push('/dashboard');
        this.$swal.fire({
          icon: 'success',
          html: 'Login Success!',
          showConfirmButton: false,
          timer: 3000,
        });
        this.localData();
      })
        .catch(() => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
}

.form-container {
    display: flex;
    flex-direction: column;
}

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

.form-input {
    box-shadow: 0 5px 10px #d0cccc;
    color: #D0CCCC;
    top: 400px;
}

/* .login-input {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    padding-right: 200px;
} */

#email,
#password
{
  box-sizing: border-box;
  width: 100%;
  border: none;
  display: block;
  font-size: 20px;
}
</style>
