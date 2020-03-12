function scrollHandler() {
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