$(document).ready(function () {
  $('.site-header').each(function () {
    const stickHeader = () => {
      let stickyPos = parseInt($(this).css('top'));
      if ($(this).offset().top - $(window).scrollTop() <= stickyPos) {
        $(this).addClass('stuck');
      } else {
        $(this).removeClass('stuck');
      }
    }
    $(document).scroll(stickHeader);
    
    let menu = $(this).children('.menu');
    let breakpoint = menu.css('--breakpoint');
    const moveAddl = () => {
      matchMedia('(max-width: ' + breakpoint + ')').addEventListener("change", moveAddl, { once: true });
      if (window.matchMedia('(max-width: ' + breakpoint + ')').matches) {
        $(this).children('.site-header__addl').insertAfter($(this));
      }
      else {
        $(this).next('.site-header__addl').appendTo($(this));
      }
    }
    moveAddl();
  });  
});
