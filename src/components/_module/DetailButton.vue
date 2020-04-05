<template>
  <div class='detail'>
    <button type="button" data-toggle="modal"
    data-target="#exampleModal" data-whatever="@getbootstrap">Edit</button>
    <Modal/>
    <button v-on:click="successInfo">Delete</button>
  </div>

</template>

<script>

import Modal from './Modal.vue';

export default {
  name: 'DeleteButton',
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
.detail{
  display: flex;
}

.detail button {
  padding: 0 10px;
  background: none;
  border: none;
  font-size: 16px;
  /* color: #ffffff; */
  cursor: pointer;
  outline: none;
  float: right;
}
</style>
