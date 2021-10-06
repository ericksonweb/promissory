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
});
