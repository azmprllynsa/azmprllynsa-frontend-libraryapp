<template>
  <section class="testimonial">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta ullam nobis molestiae neque.</h5>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-6 justify-content-center d-flex">
        <figure class="figure">
          <img src="../../assets/image/45584233_524138308054985_5877540939093210292_n.png"
            class="figure-img img-fluid rounded-circle" alt="testi1">
        </figure>
        <figure class="figure">
          <img src="../../assets/image/45584233_524138308054985_5877540939093210292_n.png"
            class="figure-img img-fluid rounded-circle utama" alt="testi2">
          <figcaption class="figure-caption">
            <h5>Niki Zefanya</h5>
            <p>Designer</p>
          </figcaption>
        </figure>
        <figure class="figure">
          <img src="../../assets/image/45584233_524138308054985_5877540939093210292_n.png"
            class="figure-img img-fluid rounded-circle" alt="testi3">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialLanding',
};
</script>

<style scope>
.testimonial{
    margin-top: 100px;
}
.testimonial h5{
    text-align: center;
    font-weight: 200;
    font-style: italic;
    font-size: 28px;
}

.testimonial figure{
    text-align: center;
}

.testimonial figure img{
    height: 60px;
    margin: 20px 15px 10px;
    opacity: .3;
}

.testimonial figure img.utama{
    height: 90px;
    opacity: 1;
    margin-top: 5px;
}


.testimonial figure h5{
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    color: #1c2c5d;
}

.testimonial figure p{
    font-size: 12px;
    color: #acacac;
    margin-top: -5px;
}

@media (min-width: 992px) {
    .testimonial h5{
        font-size: 32px;
    }
}
</style>
