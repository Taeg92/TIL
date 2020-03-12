function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var documentBottom = $(document).height();
    if ($(window).scrollTop() >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4A4A4A');
        $('.skill').each(function() {
            var skill = $(this);
            var percentage = skill.find('.percentage').text();
            skill.find('.inner-bar').animate({width: percentage}, 1200);
        })
    } else {
        $('.menu-right button').css('color', 'white');
        
    }

    $('section').each(function() {
        if ($(window).scrollTop() >= $(this).position().top){
            $(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
        }
    });
    if (windowBottom == documentBottom) {
        $('.to-top-btn').fadeIn(500);
    } else {
        $('.to-top-btn').fadeOut(500);
    }
}

$(window).on('scroll', scrollHandler);

// 처음 페이지가 로딩되었을 때
scrollHandler();

$('.menu-right button').on('click', function() {
    var targetId = $(this).attr('id');
    if (targetId == 'about-btn') {
        $('html, body').animate({scrollTop: $('.about').position().top}, 1000);
    } else if (targetId == 'contact-btn') {
        $('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
    }
})

$('.to-top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
})