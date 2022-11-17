(function($){
  $(document).ready(function () {
    $('.site-header').each(function () {
      $.fn.scrollParent = function() {
        let position = $(this).css("position");
        let excludeStaticParent = position === "absolute";
        let scrollParent = $(this).parents().filter(function() {
          let parent = $(this);
          if (excludeStaticParent && parent.css("position") === "static" ) {
            return false;
          }
          return (/(auto|scroll)/).test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
        }).eq(0);
        
        return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || window ) : scrollParent;
      }
      
      const stickHeader = () => {
        let stickyPos = parseInt($(this).css('top'));
        if ($(this).position().top - $(this).scrollParent().scrollTop() <= stickyPos) {
          $(this).addClass('stuck');
        } else {
          $(this).removeClass('stuck');
        }
      }
      
      $(scrollParent).scroll(stickHeader);
      
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
})(jQuery);
