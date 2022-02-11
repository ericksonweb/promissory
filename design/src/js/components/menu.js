$(document).ready(function () {
  let menu = document.querySelector('.menu');
  if (menu) {
    let breakpoint = getComputedStyle(menu).getPropertyValue('--breakpoint');
    
    const resetMenu = () => {
      $('body').removeClass('noscroll');
      matchMedia('(max-width: ' + breakpoint + ')').addEventListener("change", resetMenu, { once: true });
      if (window.matchMedia('(max-width: ' + breakpoint + ')').matches) {
        $('.collapse').each(function () {
          $(this).collapse('hide');
        });
      }
    }
    resetMenu();
    
    let mainMenuContent = menu.querySelector('.menu__content');
    mainMenuContent.addEventListener('show.bs.collapse', function (event) {
      if ($(this).is(event.target)) {
        $('body').addClass('noscroll');
      }
    });
    mainMenuContent.addEventListener('hide.bs.collapse', function (event) {
      if ($(this).is(event.target)) {
        $('body').removeClass('noscroll');
      }
    });
  }
});
