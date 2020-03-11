$('.buttons button').on('click', function(e){
    var targetId = e.currentTarget.id;
    if (targetId === 'even-btn') {
        $('.card').removeClass('selected');
        $('.card').each(function() {
            if (Number($(this).text()) % 2 === 0) {
                $(this).addClass('selected');
            };
        });
    } else if (targetId === 'odd-btn') {
        $('.card').removeClass('selected');
        $('.card').each(function() {
            if (Number($(this).text()) % 2 === 1) {
                $(this).addClass('selected');
            }
        });
    };
});