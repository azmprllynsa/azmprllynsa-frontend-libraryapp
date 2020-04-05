<template>
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
        <form>
            <div class="modal-body">
                <label>Url Image</label>
                <input type="text"  name="url-img">
            </div>
            <div class="modal-body">
                <label>Title</label>
                <input type="text" name="title">
            </div>
            <div class="modal-body">
                <label>Description</label>
                <textarea name="description" rows="5" ></textarea>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn edit-btn" data-dismiss="modal">
          Save</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scope>
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
    padding: 12px 170px;
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
    /* font-style: Airbnb Cereal App; */
    color: white;
    font-size: 17px;
}

</style>
