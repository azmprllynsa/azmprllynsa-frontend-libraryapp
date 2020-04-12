<template>
  <div class="form-input">
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
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
};
</script>

<style scoped>
.form-input {
    box-shadow: 0 5px 10px #d0cccc;
    color: #D0CCCC;
    top: 400px;
}

.login-input {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    padding-right: 200px;
}

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
