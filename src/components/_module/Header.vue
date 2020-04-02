<template>
<div class="pict-container">
  <h1>Book is a window <br> to the world</h1>
  <p>Photo by Mark Pan4ratte on Unsplash</p>
</div>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style scoped>
.pict-container{
    width: 60%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3),
     rgba(0, 0, 0, 0.3)), url("../../assets/image/bigpict.jpg");
    background-size: cover;
    height: 1024px;
    background-position: center center;
    min-height: 100vh;
}
.pict-container h1{
    position: absolute;
    width: 808px;
    height: 318px;
    left: 56px;
    top: 88px;
    font-size: 64px;
    line-height: 83px;
    color: #F9F9F9;
    z-index: 1;
}

.pict-container p{
    position: absolute;
    width: 378px;
    height: 30px;
    left: 29px;
    top: 977px;
    font-family: Opensans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #F9F9F9;
    z-index: 1;
}
</style>
