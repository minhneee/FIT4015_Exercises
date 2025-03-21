$(document).ready(function() {
    $('.thumbnail').click(function() {
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        $('.img-fluid').attr('src', $(this).data('src'));
    });
});