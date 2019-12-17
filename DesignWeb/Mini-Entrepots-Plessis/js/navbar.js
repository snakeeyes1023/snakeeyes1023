/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 700) {
            $('.navbar').addClass('solid-nav');
            $('.nav-link').attr('id','nav');
            $('.fixed-top').addClass('shadow');



        } else {
            $('.navbar').removeClass('solid-nav');
            $('.nav-link').attr('id'," ");
            $('.fixed-top').removeClass('shadow');


        }
    });
});
$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 400) {
            $('.card').addClass("animated fadeInDown");
        }
    });
});

$(function () {
    $('.example-popover').popover({
        container: 'body'
    })
});
$(function () {
    $('[data-toggle="popover"]').popover()
});

$( "#card1" ).click(function() {
    location.href = 'Sécurité.html';
});
$( "#card2" ).click(function() {
    location.href = 'tarif.html';
});
$( "#card3" ).click(function() {
    location.href = 'tarif.html';
});



