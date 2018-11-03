$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.slide-prev').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev')
    });
    $('.slide-next').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next')
    });
    //this is for navigation using a new tab
    $('.share-btn').click(function (e) {
        var win = window.open('http://google.com', '_blank');
        win.focus();
    });
});