<template>
  <div class="form-input">
    <div class="register-input">
      <label for="username" class="register-label">Username</label>
      <input type="text" id="username" placeholder="Rebecca">
    </div>
    <div class="register-input">
      <label for="fullname" class="register-label">Full Name</label>
      <input type="text" id="fullname" placeholder="Rebecca Poetri Rizky">
    </div>
    <div class="register-input">
      <label for="email" class='register-label'>Email Address</label>
      <input type="email" id="email" placeholder="rebecca@gmail.com">
    </div>
    <div class="register-input">
      <label for="password" class="register-label">Password</label>
      <input type="password" id="password" placeholder="****************">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormRegister',
};
</script>
<style scoped>
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
