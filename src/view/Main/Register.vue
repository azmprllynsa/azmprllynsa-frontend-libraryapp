<template>
  <div class="login-container">
    <Header class="pict-container col-lg-7"/>
    <div class="form-container col-lg-5">
      <FormInput :title= 'title'/>
      <!-- <FormRegister/> -->
      <form @submit="register">
          <div class="form-input">
            <div class="register-input">
              <label for="username" class="register-label">Username</label>
              <input type="text" id="username" placeholder="Rebecca" v-model="username">
            </div>
            <div class="register-input">
              <label for="fullname" class="register-label">Full Name</label>
              <input type="text" id="fullname" placeholder="Rebecca Poetri Rizky"
              v-model="fullname">
            </div>
            <div class="register-input">
              <label for="email" class='register-label'>Email Address</label>
              <input type="email" id="email" placeholder="rebecca@gmail.com"
              v-model="email" required>
            </div>
            <div class="register-input">
              <label for="password" class="register-label">Password</label>
              <input type="password" id="password" placeholder="****************"
              v-model="password" required>
            </div>
          </div>
          <LoginButton class= 'login-button' :button1= 'button1' :button2= 'button2'/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/_base/Header.vue';
import FormInput from '../../components/_base/FormInput.vue';
// import FormRegister from '../../components/_module/FormRegister.vue';
import LoginButton from '../../components/_module/LoginButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    FormInput,
    // FormRegister,
    LoginButton,
  },
  data() {
    return {
      title: 'Register',
      button1: 'Sign Up',
      button2: 'Login',
    };
  },

  methods: {
    register(e) {
      console.log('disini');
      e.preventDefault();
      axios.post('http://localhost:8000/api/v1/user/register', {
        username: this.username,
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      }).then((res) => {
        console.log(res.data);
        this.$router.push('/login');
      })
        .catch(() => {
          // eslint-disable-next-line no-alert
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
      this.username = '';
      this.fullname = '';
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

.form-input {
    box-shadow: 0 5px 10px #d0cccc;
    color: #D0CCCC;
    top: 400px;
}

.register-input {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    padding-right: 200px;
}

#email,
#password,
#username,
#fullname
{
  box-sizing: border-box;
  width: 100%;
  border: none;
  display: block;
  font-size: 20px;
}
</style>
