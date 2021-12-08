$(document).ready(function() {
  let menu = document.querySelector('#site-header .menu');
  let breakpoint = getComputedStyle(menu).getPropertyValue('--breakpoint');
  
  const moveContact = () => {
    matchMedia('(max-width: ' + breakpoint + ')').addEventListener("change", moveContact, { once: true });
    if (window.matchMedia('(max-width: ' + breakpoint + ')').matches) {
      $('#site-header .site-header__contact').insertAfter('#site-header');
    }
    else {
      $('#site-header + .site-header__contact').appendTo('#site-header');
    }
  }
  
  moveContact();
  
  let stickyHeader = parseInt($("#site-header").css('top'));
  console.log(stickyHeader);
  $(window).scroll(function() {
    console.log((0 - $(window).scrollTop()));

    if ((0 - $(window).scrollTop()) < stickyHeader) {
      $('#site-header').addClass('stuck');
    } else {
      $('#site-header').removeClass('stuck');
    }
  });
});
