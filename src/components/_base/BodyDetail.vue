<template>
<div>
  <section class="detailbook">
    <a href="#">Novel</a>
    <div class="detailhead">
      <div class="title-book">
        <h1>{{book.title}}</h1>
        <h5>{{book.released_date}}</h5>
      </div>
      <h3>Available</h3>
    </div>
    <p>{{book.description}}</p>
    <button type="submit" class="btn-borrow" >Borrow</button>
  </section>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'BodyDetail',

  data() {
    return {
      book: [],
    };
  },

  mounted() {
    axios.get(`http://localhost:8000/api/v1/book/${this.$route.params.data}`)
      .then((res) => {
        // console.log(res.data.data);
        this.book = res.data.data;
        // this.book = {
        //   title: 'test',
        // };
      })
      .catch((err) => {
        // console.log(this.$route.params);
        console.log(err);
      });
  },
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
    font-size: 40px;
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
