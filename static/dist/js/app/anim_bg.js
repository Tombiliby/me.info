$(".bgAnimZone").find(".shape").css({top:-$(".bgAnimZone").find(".shape1").height()/2+$(window).height()/2});var animBG=function(){var a=180*$(window).scrollTop()/($(document).height()-$(window).height()),b=70,c=b-a,d=1e3*$(window).scrollTop()/($(document).height()-$(window).height()),e=0,f=e+d;$(".bgAnimZone").find(".shape1").css({transform:"rotate("+c+"deg) translateX("+f+"px)"})};animBG();var animBG2=function(){var a=190*$(window).scrollTop()/($(document).height()-$(window).height()),b=40,c=b-a,d=2e3*$(window).scrollTop()/($(document).height()-$(window).height()),e=0,f=e+d;$(".bgAnimZone").find(".shape2").css({transform:"rotate("+c+"deg) translateX("+f+"px)"})};animBG2(),$(window,"body","html").scroll(function(){animBG(),animBG2()});