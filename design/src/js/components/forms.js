(function($){
  $(document).ready(function() {
    // Label behavior for Bootstrap Select elements
    $('.selectpicker').on('loaded.bs.select changed.bs.select', function(e, clickedIndex, isSelected, previousValue) {
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
      var $form = $(this);
      
      // Wrap checkbox groups.
      var groups = $form.find('input[type=checkbox][name], input[type=radio][name]').map(function() {
        var name = $(this).attr('name');
        if ($form.find('[name="' + name + '"]').length > 1) {
          return name;
        }
      }).get();
      groups = $.uniqueSort(groups);
      $.each(groups, function(index, value) {
        var form_group = '<div class="form__group row';
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
            var $name = element.attr('name');
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
            var $name = $(element).attr('name');
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
            var $name = $(element).attr('name');
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
})(jQuery);
