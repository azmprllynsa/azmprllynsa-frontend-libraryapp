<template>
  <section class="detailbook">
    <a href="#">Novel</a>
    <div class="detailhead">
      <div class="title-book">
        <h1>DILAN 1990</h1>
        <h5>30 Juni 2019</h5>
      </div>
      <h3>Available</h3>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus,
      cursus egestas dui pulvinar. Proin sit amet accumsan lectus.
      Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget.
      Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus,
      vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur.
      Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui,
      tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh,
      ac eleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut,
      accumsan facilisis lacus. Nullam at elementum nibh, ac gravida felis.
      In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis.
      Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet
      euismod quis nec massa.
    </p>
    <button type="submit" class="btn-borrow" >Borrow</button>
  </section>
</template>

<script>
export default {
  name: 'BodyDetail',
};
</script>
<style scoped>
.detailbook{
    display: flex;
    flex-direction: column;
    max-width: 850px;
    margin-top:20px;
    margin-left: 50px;
    font-family: Airbnb Cereal App;
}
.detailbook a{
    background-color: #FBCC38;
    color: white;
    border: none;
    width: 80px;
    height: 30px;
    padding-top: 4px;
    text-align: center;
    border-radius: 16px;
}
.detailhead{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title-book{
    display: flex;
    flex-direction: column;
}

.title-book h1{
    font-size: 50px;
    line-height: 65px;
    width: 287px;
    height: 65px;
}

.title-book h5{
    font-size: 20px;
}

.detailhead h3{
    font-size: 30px;
    color: #99D815;
    margin-top:-30px;
}

.detailbook p{
    font-size: 20px;
    line-height: 26px;
    margin-top: 44px;
    width: 824px;
    height: 342px;
}

.btn-borrow{
    position: absolute;
    width: 240px;
    height: 74px;
    left: 1050px;
    top: 840px;
    background: #FBCC38;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-style: Airbnb Cereal App;
    color: white;
    font-size: 30px;
    line-height: 39px;
    cursor: pointer;
}
</style>
