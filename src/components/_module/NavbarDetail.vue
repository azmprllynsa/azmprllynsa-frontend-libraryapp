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
      <div>
<div class="modal fade modal-add" id="exampleModal" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">Edit Data</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit="editData">
            <div class="modal-body">
                <label>Url Image</label>
                <input type="text"  name="url-img" v-model="image">
            </div>
            <div class="modal-body">
                <label>Title</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="modal-body">
                <label>Description</label>
                <textarea name="description" rows="5" v-model="description"></textarea>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn edit-btn">
                Save</button>
            </div>
        </form>
      </div>
      </div>
    </div>
  </div>
</div>
      <button @click="successInfo">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import Modal from './Modal.vue';

export default {
  name: 'NavbarDetail',
  components: {
    // Modal,
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
      })
        .then((result) => {
          if (result.value) {
            axios
              .delete(`http://localhost:8000/api/v1/book/admin/${this.$route.params.data}`)
              .then((res) => {
                console.log(res);
                this.$swal.fire({
                  icon: 'success',
                  html: 'Book has been deleted!',
                  showConfirmButton: false,
                  timer: 3000,
                });
                this.$router.push('/dashboard');
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    },

    editData() {
      console.log('disini');
      axios.patch(`http://localhost:8000/api/v1/book/admin/${this.$route.params.data}`, {
        image: this.image,
        title: this.title,
        description: this.description,
      }).then((res) => {
        console.log(res.data);
        this.$router.push('/detail/:data');
      })
        .catch(() => {
        // eslint-disable-next-line no-alert
          alert('register failed');
        });
      this.image = '';
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<style scoped>

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

 .modal-header h2 {
    font-size: 25px;
    margin-left: 10px;
}

.close {
    color: red;
    font-size: 40px;
}
.close:hover,
.close:focus {
    color: #000;
    cursor: pointer;
}

.modal-body input,.modal-body textarea{
    width: 70%;
    padding: 10px;
    display: flex;
    float: right;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: Airbnb Cereal App;
}

textarea{
    resize: none;
}

.modal-body label {
   font-size: 15px;
    font-weight: bold;
}

.modal-footer button{
    background: #FBCC38;
    font-style: Airbnb Cereal App;
    color: white;
    font-size: 17px;
    padding: 5;
}

.modal-footer{
  /* position: absolute; */
  margin-top: 130px;
}
</style>
