$('#menu a').on('click', selectMenu);
$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);
$(document).on('keydown', selectMenu);


function selectMenu(event) {
    var targetId = ''
    if (event.type === 'click') {
        targetId = event.currentTarget.id;
    } else if (event.type === 'keydown') {
        if (event.key === '1') {
            targetId = 'home';
        } else if (event.key === '2') {
            targetId = 'seoul';
        } else if (event.key === '3') {
            targetId = 'tokyo';
        } else if (event.key === '4') {
            targetId = 'paris';
        } else {
            targetId = 'home'
        }
    }
    $('#photo').hide();
    $('#photo').attr('src', 'images/'+ targetId + '.png');
    $('#photo').fadeIn(1000);
    $('#menu a').css('font-weight', 'normal');
    $('#'+targetId).css('font-weight','bold');
}

// 사진에 그림자를 입히는 함수
function mouseEnterPhoto() {
    $('#photo').css('box-shadow', '5px 10px');
}
function mouseLeavePhoto() {
    $('#photo').css('box-shadow', 'none');
}