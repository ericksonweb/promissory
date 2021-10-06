document.addEventListener("DOMContentLoaded", function(event) { 
  $('.selectpicker').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    if ($(this).val().length > 0) {
      $(this).parent().next('label').addClass('label--eyebrow').removeClass('label--placeholder');
    }
    else {
      if ($(this).parent().find('.filter-option-inner-inner').text().length == 0) {
        $(this).parent().next('label').addClass('label--placeholder').removeClass('label--eyebrow');
      }
    }
  });
  
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated');
          select_validation(form);
        }, false)
      })
  })()
});

function select_validation(form) {
  if ($(form).hasClass('was-validated')) {
    $(form).find(".selectpicker").each(function (i, el) {
      if ($(el).is(":invalid")) {
        $(el).closest(".form__field").find(".invalid-feedback").addClass("d-block")
      }
      else {
        $(el).closest(".form__field").find(".invalid-feedback").removeClass("d-block");
      }
    });
  }
  $(form).find(".selectpicker").on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    select_validation(form);
  });
}
