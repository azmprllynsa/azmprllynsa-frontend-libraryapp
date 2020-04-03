<template>
<div>
<router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  },
};
</script>

<style>
@font-face{
    font-family: 'AirbnbCereal App Black';
    src: url('../../assets/font/AirbnbCereal-Black.ttf');
}
@font-face{
    font-family: 'AirbnbCereal App Bold';
    src: url('../../assets/font/AirbnbCereal-Bold.ttf')
}
@font-face{
    font-family: 'AirbnbCereal App Book';
    src: url('../../assets/font/AirbnbCereal-Book.ttf')
}
@font-face{
    font-family: 'AirbnbCereal App Extrabold';
    src: url('../../assets/font/AirbnbCereal-ExtraBold.ttf')
}
@font-face{
    font-family: 'Airbnb App Light';
    src: url('../../assets/font/AirbnbCereal-Light.ttf')
}
@font-face{
    font-family: 'AirbnbCereal App Medium';
    src: url('../../assets/font/AirbnbCereal-Medium.ttf')
}
@font-face{
    font-family: 'Opensans';
    src: url('../../assets/font/OpenSans-Light.ttf');
}


*{
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}
</style>
