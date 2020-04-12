<template>
    <div class="row justify-content-center">
      <div class="col-10 option-panel">
        <div class="row">
          <div class="col-lg">
            <img src="../../assets/image/employee.png" alt="Employee" class="float-left">
            <h4>24 Hours</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="../../assets/image/hires.png" alt="Hires" class="float-left">
            <h4>High-Res</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="../../assets/image/security.png" alt="security" class="float-left">
            <h4>Security</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PanelLanding',
};

</script>

<style scoped>
.option-panel {
    box-shadow: 0 3px 20px rgba(0,0,0,5);
    border-radius: 12px;
    margin-top: -125px;
    background-color: #fff;
    padding: 30px;
}

.option-panel img{
    height: 80px;
    width: 80px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.option-panel h4{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
}

.option-panel p{
    font-size: 14px;
    color: #acacac;
    margin-top: -5px;
    font-weight: 200;
}
</style>
