<template>
  <div class="login-input submit-btn">
    <button type="submit" class="button btn-1">{{button1}}</button>
    <router-link to='/login' class="button btn-2">{{button2}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  props: ['button1', 'button2'],
};
</script>

<style scoped>

.submit-btn {
  margin-top: 20px;
  border: none;
}
.button {
    border: 1px solid #d0cccc;
    border-radius: 5px;
    color: #D0CCCC;
}

.btn-1 {
    padding: 10px 30px;
    background-color: black;
    color: #fff;
    border: 1px solid black;
    margin-right: 30px;
}

.btn-2 {
  padding: 10px 30px;

}
</style>
