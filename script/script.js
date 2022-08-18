function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}


$(function() {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
});

$(function() {
 let header = $('.header');
 let hederHeight = header.height(); // висота шапки (h)
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    $('body').css({
       'paddingTop': hederHeight+'px' // відступ = висота шапки
    });
   } else {
    header.removeClass('header_fixed');
    $('body').css({
     'paddingTop': 0 // видалити відступ (не працює, в css кожному розділу присвоїти однаковий клас і прописати padding:h i margin:-h)
    })
   }
 });
});


