<template>
  <section class="sidebar">
    <!-- Toggle Button -->
    <div class="menu-button">
      <button class="sidebar-button" v-on:click="sidebarHide">
        <img src="../../assets/image/menu.png" alt="toggle-menu" />
      </button>
    </div>
    <!-- Toggle Button -->
    <!-- User Profile -->
    <div class="profile">
      <img
        src="../../assets/image/45584233_524138308054985_5877540939093210292_n.png"
        alt="  "
      />
      <h4>Niki Zefanya</h4>
    </div>
    <!-- User Profile -->
    <!-- Sidebar Menu -->
    <div class="sidebar-menu">
      <p>Explore</p>
      <p>History</p>
      <!-- <Modal class="modal-add" title='Add Data'/> -->
  <p type="button" data-toggle="modal"
    data-target="#exampleModal" data-whatever="@getbootstrap">Add Book*</p>
      <p @click="logout">Logout</p>
    </div>

    <!-- Modal -->
    <div>
<div class="modal fade modal-add" id="exampleModal" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">Add Data</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit="addData">
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
  </section>
</template>

<script>
// import Modal from './Modal.vue';
import axios from 'axios';

export default {
  name: 'Sidebar',
  components: {
    // Modal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    this.items = JSON.parse(localStorage.getItem('items'));
    console.log(this.items);
    if (this.items) {
      this.token = this.items.token;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('items');
      this.$router.push('/login');
    },
    sidebarHide() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('show-sidebar');
      console.log('Sidebar');
    },
    addData() {
      console.log('disini');
      axios.post('http://localhost:8000/api/v1/book/admin', {
        image: this.image,
        title: this.title,
        description: this.description,
      }).then((res) => {
        console.log(res.data);
        this.$router.push('/dashboard');
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

 .modal-backdrop{
  z-index: inherit;
}
  .sidebar-button{
    border: none;
    cursor: pointer;
  }
 .sidebar {
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    min-height: 900px;
    height: 100vh;
    background: #ffffff;
    text-align: center;
    padding: 50px;
    position: absolute;
     transition: 1s;
    /* z-index: 0; */
    margin-left: -300px;
    box-shadow: none;
  }

.show-sidebar {
    margin-left: 0px;
    box-shadow: 3px 2px 20px #999999;
    transition: 1s;
  }

  .sidebar .menu-button {
    text-align: right;
    position: absolute;
    top: 20px;
    left: 240px;
  }

  .menu-button button {
    background: none;
  }

  .sidebar .profile {
    margin: 10px 0 50px;
  }

  .profile img {
    width: 150px;
    height: 150px;
  }

  .profile h4 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 1em;
  }

  .sidebar .sidebar-menu {
    text-align: left;
    margin-top: 20px;
  }

  .sidebar-menu > p {
    cursor: pointer;
    color: #000000;
    font-size: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
  }

  .sidebar-menu > p:hover {
    color: #424242;
    transition: 300ms;
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

.edit-btn{
    background: #FBCC38;
    font-style: Airbnb Cereal App;
    color: white;
    font-size: 17px;
}

.modal-footer{
  /* position: relative; */
  margin-top: 130px;
}
</style>
