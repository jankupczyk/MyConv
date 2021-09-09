function openmodal() {
  Swal.fire({
    title: '<strong>MyConv | Contact us</strong>',
    backdrop: `rgba(0, 0, 0, 1);`,
    imageUrl: 'public/assets/logo/MyConv_logo.png',
    imageWidth: 186,
    imageHeight: 64,
    imageAlt: 'MyConv logo',
    html:
      '<form action="src/php/form_data_req.php" class="modal-form" method="POST">' +
      '<label for="name">Name:</label>' +
      '<input type="text" name="name" class="modal-input-name" required><br>' +
      '<label for="email">E-mail:</label>' +
      '<input type="email" name="email" class="modal-input-email" required><br>' +
      '<label for="problem">Description:</label>' +
      '<textarea name="problem" id="" cols="15" rows="5" class="" class="modal-input-text"></textarea><br>' +
      '<button class="modal-submit-btn">Submit</button>' +
      '</form>',
    focusConfirm: false,
  })
}