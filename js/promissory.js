!function(){"use strict";$(document).ready((function(){$(".selectpicker").on("changed.bs.select",(function(e,t,a,n){$(this).val().length>0?$(this).parent().next("label").addClass("label--eyebrow").removeClass("label--placeholder"):0==$(this).parent().find(".filter-option-inner-inner").text().length&&$(this).parent().next("label").addClass("label--placeholder").removeClass("label--eyebrow")})),$("form.needs-validation").each((function(){$form=$(this);var e=$form.find("input[type=checkbox][name], input[type=radio][name]").map((function(){var e=$(this).attr("name");if($form.find('[name="'+e+'"]').length>1)return e})).get();e=$.uniqueSort(e),$.each(e,(function(e,t){console.log(t);var a='<div class="form__group';$form.find('[name="'+t+'"]:required').length>0&&(a+=" has-required"),a+='" />',$('[name="'+t+'"]').parent(".form__field").wrapAll(a)})),$form.validate({debug:!0,rules:{},errorClass:"is-invalid",errorElement:"div",errorPlacement:function(e,t){e.addClass("invalid-feedback"),"checkbox"===t.attr("type")||"radio"===t.attr("type")?($name=t.attr("name"),$form.find('[name="'+$name+'"]').length>1?e.insertBefore($('[name="'+$name+'"]:first').parent(".form__field")):e.appendTo(t.closest(".form__field"))):e.appendTo(t.closest(".form__field"))},highlight:function(e,t){"checkbox"===$(e).attr("type")||"radio"===$(e).attr("type")?($name=$(e).attr("name"),$form.find('[name="'+$name+'"]').length>1&&($('[name="'+$name+'"]').closest(".form__group").addClass("has-invalid"),$('[name="'+$name+'"]').closest("fieldset.is-required").addClass("has-invalid"))):$(e).is(".selectpicker")&&$(e).closest(".dropdown").addClass("has-invalid"),$(e).addClass(t)},unhighlight:function(e,t){"checkbox"===$(e).attr("type")||"radio"===$(e).attr("type")?($name=$(e).attr("name"),$form.find('[name="'+$name+'"]').length>1&&($('[name="'+$name+'"]').closest(".form__group").removeClass("has-invalid"),$('[name="'+$name+'"]').closest("fieldset.is-required").removeClass("has-invalid"))):$(e).is(".selectpicker")&&$(e).closest(".dropdown").removeClass("has-invalid"),$(e).removeClass(t)},ignoreTitle:!0}),$form.find(".selectpicker").on("changed.bs.select",(function(e,t,a,n){$(this).valid()&&$(this).closest(".dropdown").removeClass("has-invalid")}))}))})),$(document).ready((function(){let e=document.querySelector(".menu");if(e){let t=getComputedStyle(e).getPropertyValue("--breakpoint");const a=()=>{$("body").removeClass("noscroll"),matchMedia("(max-width: "+t+")").addEventListener("change",a,{once:!0}),window.matchMedia("(max-width: "+t+")").matches&&$(".collapse").each((function(){$(this).collapse("hide")}))};a();let n=e.querySelector(".menu__content");n.addEventListener("show.bs.collapse",(function(e){$(this).is(e.target)&&$("body").addClass("noscroll")})),n.addEventListener("hide.bs.collapse",(function(e){$(this).is(e.target)&&$("body").removeClass("noscroll")}))}})),$(document).ready((function(){$(".site-header").each((function(){$(document).scroll((()=>{let e=parseInt($(this).css("top"));$(this).offset().top-$(window).scrollTop()<=e?$(this).addClass("stuck"):$(this).removeClass("stuck")}));let e=$(this).children(".menu").css("--breakpoint");const t=()=>{matchMedia("(max-width: "+e+")").addEventListener("change",t,{once:!0}),window.matchMedia("(max-width: "+e+")").matches?$(this).children(".site-header__addl").insertAfter($(this)):$(this).next(".site-header__addl").appendTo($(this))};t()}))}))}();