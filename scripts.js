$(document).ready(function(){
    $('.close').on('click', function() {
        $('.new-year-header').slideUp(500);
    })

    $('.dropdown').hover(
    function() {
        $('.dropdown-nav').show();
    }, 
    function() {
        $('.dropdown-nav').hide();
    })

});