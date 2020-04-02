// Get the modal
var modal = document.getElementById('modal-edit');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function successInfo() {
  Swal.fire({
    icon: 'success',
    html: 'Data <b>Dilan 1990</b> berhasil dihapus!',
    showConfirmButton: false,
    timer: 2000,
  });
}


function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

// Get the modal
var modal = document.getElementById('modal-add');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
