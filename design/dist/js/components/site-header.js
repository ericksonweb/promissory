!function(){"use strict";var $;($=jQuery)(document).ready((function(){$(".site-header").each((function(){$(document).scroll((()=>{let t=parseInt($(this).css("top"));$(this).offset().top-$(this).parent().scrollTop()<=t?$(this).addClass("stuck"):$(this).removeClass("stuck")}));let t=$(this).children(".menu").css("--breakpoint");const e=()=>{matchMedia("(max-width: "+t+")").addEventListener("change",e,{once:!0}),window.matchMedia("(max-width: "+t+")").matches?$(this).children(".site-header__addl").insertAfter($(this)):$(this).next(".site-header__addl").appendTo($(this))};e()}))}))}();