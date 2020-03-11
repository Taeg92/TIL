$(window).on('scroll', scrollHandler);

function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var documentBottom = $(document).height();
    console.log(windowBottom)
    $('.playlist').each(function() {
        var playlistHalf = $(this).position().top + $(this).outerHeight()/2;
        if (playlistHalf < windowBottom) {
            $(this).animate({'opacity': '1'}, 1500);
        }
    });
    if (windowBottom == documentBottom) {
        $('.to-top-btn').fadeIn(500);
    } else {
        $('.to-top-btn').fadeOut(500);
    }
}

$('.to-top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
})

// 처음 로딩될 때 호출
scrollHandler()