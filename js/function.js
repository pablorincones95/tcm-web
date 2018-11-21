

$('#formulario').submit(function() {
  var url = 'vendor/phpmailer/enviar.php';
  $.ajax({
    type: 'POST',
    url: url,
    data: $('#formulario').serialize(),
    success: function(success) {
      if (success) {
        $('.alert').removeClass('alert-o')
        $('.alert').addClass('alert-d');
        document.getElementById("formulario").reset();
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
  return false;
});