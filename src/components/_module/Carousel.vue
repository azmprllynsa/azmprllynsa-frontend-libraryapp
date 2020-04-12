<template>
        <section class="carousel">
            <div class="carousel-btn">
                <button class="prev-btn">&#60;</button>
                <button class="next-btn">&#62;</button>
            </div>
            <div class="main-content">
              <div class="carousel-group">
                  <div class="carousel-slide">
                      <div class="book-list book-list-1">
                          <div class="overlay-slider">
                              <h4>Dilan 1990</h4>
                              <p>Pidi Baiq</p>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-slide slide-2">
                      <div class="book-list book-list-2">
                          <div class="overlay-slider">
                              <h4>Ubur-Ubur Lembur</h4>
                              <p>Raditya Dika</p>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-slide">
                      <div class="book-list book-list-3">
                          <div class="overlay-slider">
                              <h4>Laskar Pelangi</h4>
                              <p>Andrea Hirata</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

        </section>
</template>

<script>
export default {
  name: 'Carousel',
};
</script>

<style scoped>
.carousel{
    padding-top: 30px;
}

.carousel-btn{
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    margin: 90px 0 50px 80px;
}
.carousel .prev-btn, .carousel .next-btn{
    font-size: 30px;
    border : none;
    outline: none;
    background-color: #fff;
    padding: 4px 17px;
    color: #000;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
}

.next-btn{
    margin-left: 1080px;
}

.slide-2{
    transform: scale(1.17);
    margin: 0 20px;
}

.book-list-1{
    background-image: url('../../assets/image/covernya (2).png');
    background-size: cover;

}

.book-list-2{
    background-image: url('../../assets/image/d96eff85-ae75-4f56-bdfc-dd7a055e7400 (1).png');
    background-size: cover;
}

.book-list-3{
    background-image: url('../../assets/image/laskar (1).png');
    background-size: cover;
}

.carousel-group {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-slide {
    padding: 30px 0;
    white-space: nowrap;

}

.book-list {
    cursor: pointer;
    position: relative;
    margin: 0 10px;
    font-size: 20px;
    width: 400px;
    height: 200px;
    border-radius: 20px;
}

.overlay-slider {
    position: absolute;
    height: 50%;
    width: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    color: #ffffff;
    border-radius: 0px 0 20px 20px;
    z-index: 0;
}

.overlay-slider h4, .overlay-slider p{
    padding-left: 30px;
}

.overlay-slider h4{
    font-size: 25px;
    margin-top: 20px;
}

.overlay-slider p{
    font-size: 20px;
}

</style>
