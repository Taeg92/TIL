$('#close-btn').on('click', function() {
    $('#popup').fadeOut(1000);
});

$('#popup-trigger').on('click', function() {
    $('#popup').fadeIn(1000);
});

$(document).on('keydown', function(e) {
    if (e.which == `27`) {
        $('#popup').fadeOut(1000);
    }
});