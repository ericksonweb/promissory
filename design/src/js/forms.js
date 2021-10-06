$(document).ready(function() {
  // Label behavior for Bootstrap Select elements
  $('.selectpicker').on('changed.bs.select', function(e, clickedIndex, isSelected, previousValue) {
    if ($(this).val().length > 0) {
      $(this).parent().next('label').addClass('label--eyebrow').removeClass('label--placeholder');
    }
    else {
      if ($(this).parent().find('.filter-option-inner-inner').text().length == 0) {
        $(this).parent().next('label').addClass('label--placeholder').removeClass('label--eyebrow');
      }
    }
  });
  
  // jQuery Validation for forms.
  $('form.needs-validation').each(function() {
    $form = $(this);
    
    // Wrap checkbox groups.
    var groups = $form.find('input[type=checkbox][name], input[type=radio][name]').map(function() {
      var name = $(this).attr('name');
      if ($form.find('[name="' + name + '"]').length > 1) {
        return name;
      }
    }).get();
    groups = $.uniqueSort(groups);
    $.each(groups, function(index, value) {
      console.log(value);
      var form_group = '<div class="form__group';
      if ($form.find('[name="' + value + '"]:required').length > 0) {
        form_group += ' has-required';
      }
      form_group += '" />';
      $('[name="' + value + '"]').parent('.form__field').wrapAll(form_group);
    });
    
    $form.validate({
      debug: true,
      rules: {
      },
      errorClass: 'is-invalid',
      errorElement: 'div',
      errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        // For checkbox and radio groups
        if (element.attr('type') === 'checkbox' || element.attr('type') === 'radio') {
          $name = element.attr('name');
          if ($form.find('[name="' + $name + '"]').length > 1) {
            error.insertBefore($('[name="' + $name + '"]:first').parent('.form__field'));
          }
          else {
            error.appendTo(element.closest('.form__field'));
          }
        }
        //Default
        else {
          error.appendTo(element.closest('.form__field'));
        }
      },
      highlight: function(element, errorClass) {
        // For checkbox and radio groups
        if ($(element).attr('type') === 'checkbox' || $(element).attr('type') === 'radio') {
          $name = $(element).attr('name');
          if ($form.find('[name="' + $name + '"]').length > 1) {
            $('[name="' + $name + '"]').closest('.form__group').addClass('has-invalid');
            $('[name="' + $name + '"]').closest('fieldset.is-required').addClass('has-invalid');
          }
        }
        // Bootstrap Select 'mark-required'
        else if ($(element).is('.selectpicker')) {
          $(element).closest('.dropdown').addClass('has-invalid');
        }
        $(element).addClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
        // For checkbox and radio groups
        if ($(element).attr('type') === 'checkbox' || $(element).attr('type') === 'radio') {
          $name = $(element).attr('name');
          if ($form.find('[name="' + $name + '"]').length > 1) {
            $('[name="' + $name + '"]').closest('.form__group').removeClass('has-invalid');
            $('[name="' + $name + '"]').closest('fieldset.is-required').removeClass('has-invalid');
          }
        }
        // Bootstrap Select 'mark-required'
        else if ($(element).is('.selectpicker')) {
          $(element).closest('.dropdown').removeClass('has-invalid');
        }
        $(element).removeClass(errorClass);
      },
      ignoreTitle: true
    });
    
    // Re-validate when changing Bootstrap Select elements.
    $form.find(".selectpicker").on('changed.bs.select', function(e, clickedIndex, isSelected, previousValue) {
      if ($(this).valid()) {
        $(this).closest('.dropdown').removeClass('has-invalid');
      }
    });
    
  });
});

/*
document.addEventListener("DOMContentLoaded", function(event) {
  // Label behavior for Bootstrap Select elements
  $('.selectpicker').on('changed.bs.select', function(e, clickedIndex, isSelected, previousValue) {
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
  (function() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function(form) {
        
        // Behavior for checkbox groups
        $(form).find('input[type=checkbox][name]').each(function() {
          var name = $(this).attr('name');
          if ($(form).find('input[type=checkbox][name="' + name + '"]:required').length > 1) {
            // This is part of a required group of named checkboxes.
            console.log("Group: " + name);
            
            $(form).find('input[type=checkbox][name="' + name + '"]').each(function() {
              $(this).click(function() {
                $(form).find('input[type=checkbox][name="' + name + '"]').each(function() {
                  if (!$(this).is(':checked')) {
                    $(this).removeAttr('required');
                  }
                  else {
                    $(this).attr('required', '');
                  }
                });
              });
            });
          }
        });
  
        
        form.addEventListener('submit', function(event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          checkbox_validation(form);
          select_validation(form);
          fieldset_validation(form);
          form.classList.add('was-validated');
        }, false)
      })
  })()
});

// Form validation for named checkbox groups
function checkbox_validation(form) {
  $(form).find('input[type=checkbox][name]').each(function() {
    $name = $(this).attr('name');
    if ($(form).find('input[type=checkbox][name="' + $name + '"]:required').length > 1) {
      // This is part of a required group of named checkboxes.
      console.log("Group: " + $name);
      
      $(form).find('input[type=checkbox][name="' + $name + '"]').each(function() {
        $(this).click(function() {
          checkbox_validation(form);
        });
      });
      
      /*
      if ($(form).find('input[type=checkbox][name="' + $name + '"]:checked').length > 0) {
        // At least one checkbox is checked.
        console.log("valid");
      }
      else {
        // No checkboxes are checked.
        console.log("not valid");
      }
    }
    else {

    }
  });
}


// Form validation for required fieldset elements
function fieldset_validation(form) {
  var invalid = true;
  $(form).find("fieldset.is-required").each(function() {
    $(this).find(":required").each(function() {
      if (!$(this).is(":invalid")) {
        invalid = false;
      }
      if ($(this).attr('type') == 'checkbox') {
        $(this).click(function() {
          $(this).off("change");
          fieldset_validation(form);
        });
      }
      else {
        $(this).change(function() {
          $(this).off("change");
          fieldset_validation(form);
        });
      }
    });
    if (invalid == true) {
      $(this).addClass("invalid");
    }
    else {
      $(this).removeClass("invalid");
    }
  });
}
*/
