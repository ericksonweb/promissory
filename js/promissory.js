!function(){"use strict";var $;($=jQuery)(document).ready((function(){$(".selectpicker").on("changed.bs.select",(function(e,t,s,n){$(this).val().length>0?$(this).parent().next("label").addClass("label--eyebrow").removeClass("label--placeholder"):0==$(this).parent().find(".filter-option-inner-inner").text().length&&$(this).parent().next("label").addClass("label--placeholder").removeClass("label--eyebrow")})),$("form.needs-validation").each((function(){var e=$(this),t=e.find("input[type=checkbox][name], input[type=radio][name]").map((function(){var t=$(this).attr("name");if(e.find('[name="'+t+'"]').length>1)return t})).get();t=$.uniqueSort(t),$.each(t,(function(t,s){var n='<div class="form__group row';e.find('[name="'+s+'"]:required').length>0&&(n+=" has-required"),n+='" />',$('[name="'+s+'"]').parent(".form__field").wrapAll(n)})),e.validate({debug:!0,rules:{},errorClass:"is-invalid",errorElement:"div",errorPlacement:function(t,s){if(t.addClass("invalid-feedback"),"checkbox"===s.attr("type")||"radio"===s.attr("type")){var n=s.attr("name");e.find('[name="'+n+'"]').length>1?t.insertBefore($('[name="'+n+'"]:first').parent(".form__field")):t.appendTo(s.closest(".form__field"))}else t.appendTo(s.closest(".form__field"))},highlight:function(t,s){if("checkbox"===$(t).attr("type")||"radio"===$(t).attr("type")){var n=$(t).attr("name");e.find('[name="'+n+'"]').length>1&&($('[name="'+n+'"]').closest(".form__group").addClass("has-invalid"),$('[name="'+n+'"]').closest("fieldset.is-required").addClass("has-invalid"))}else $(t).is(".selectpicker")&&$(t).closest(".dropdown").addClass("has-invalid");$(t).addClass(s)},unhighlight:function(t,s){if("checkbox"===$(t).attr("type")||"radio"===$(t).attr("type")){var n=$(t).attr("name");e.find('[name="'+n+'"]').length>1&&($('[name="'+n+'"]').closest(".form__group").removeClass("has-invalid"),$('[name="'+n+'"]').closest("fieldset.is-required").removeClass("has-invalid"))}else $(t).is(".selectpicker")&&$(t).closest(".dropdown").removeClass("has-invalid");$(t).removeClass(s)},ignoreTitle:!0}),e.find(".selectpicker").on("changed.bs.select",(function(e,t,s,n){$(this).valid()&&$(this).closest(".dropdown").removeClass("has-invalid")}))}))})),function($){$(document).ready((function(){let e=document.querySelector(".menu");if(e){let t=getComputedStyle(e).getPropertyValue("--breakpoint");const s=()=>{$("body").removeClass("noscroll"),matchMedia("(max-width: "+t+")").addEventListener("change",s,{once:!0}),window.matchMedia("(max-width: "+t+")").matches&&$(".collapse").each((function(){$(this).collapse("hide")}))};s();let n=e.querySelector(".menu__content");n.addEventListener("show.bs.collapse",(function(e){$(this).is(e.target)&&$("body").addClass("noscroll")})),n.addEventListener("hide.bs.collapse",(function(e){$(this).is(e.target)&&$("body").removeClass("noscroll")}))}}))}(jQuery),function($){$(document).ready((function(){$(".site-header").each((function(){$.fn.scrollParent=function(){let e=$(this).css("position"),t="absolute"===e,s=$(this).parents().filter((function(){let e=$(this);return(!t||"static"!==e.css("position"))&&/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==e&&s.length?s:$(this[0].ownerDocument||window)};$(this).scrollParent().scroll((()=>{let e=parseInt($(this).css("top"));$(this).position().top-$(this).scrollParent().scrollTop()<=e?$(this).addClass("stuck"):$(this).removeClass("stuck")}));let e=$(this).children(".menu").css("--breakpoint");const t=()=>{matchMedia("(max-width: "+e+")").addEventListener("change",t,{once:!0}),window.matchMedia("(max-width: "+e+")").matches?$(this).children(".site-header__addl").insertAfter($(this)):$(this).next(".site-header__addl").appendTo($(this))};t()}))}))}(jQuery)}();