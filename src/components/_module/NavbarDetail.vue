<template>
  <div class='navbar'>
    <div class="back">
      <router-link to="/dashboard">
        <img src="../../assets/image/back.jpg" alt="Back">
      </router-link>
    </div>
    <div class='detail'>
      <button type="button" data-toggle="modal"
      data-target="#exampleModal" data-whatever="@getbootstrap">Edit</button>
      <Modal title='Edit Data'/>
      <button v-on:click="successInfo">Delete</button>
    </div>
  </div>
</template>

<script>

import Modal from './Modal.vue';

export default {
  name: 'NavbarDetail',
  components: {
    Modal,
  },

  methods: {
    successInfo() {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.value) {
          this.$swal.fire(
            'Success!',
            'This Book Has Been Deleted',
            'success',
          );
        }
      });
    },
  },
};
</script>

<style scoped>
.modal-backdrop{
  z-index: inherit;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.back{
    background-color: #ffffff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px;
}

.back img{
    padding:18px 19px;
}

.detail {
  display: flex;
  margin-top: -50px;
}

.detail button {
  padding: 0 10px;
  background: none;
  border: none;
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  float: right;
}
</style>
