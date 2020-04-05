<template>
  <footer class="tnc">
    <span>By signing up, you agree to Book’s</span>
    <br>
    <router-link to='/'>Terms and Conditions</router-link> <span>&</span>
    <router-link to='/'>
      Privacy Policy
      </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterTnc',
};
</script>

<style scope>
.tnc {
    font-size: 17px;
    top: 870px;
    line-height: 22px;
    color: #D0CCCC;
    position: absolute;
}

.tnc a {
    color: #000;
}
</style>
