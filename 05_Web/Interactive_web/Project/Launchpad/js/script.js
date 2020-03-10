var audioFiles = [];
audioFiles.push(new Audio("audio/01_kick_drum.wav"));
audioFiles.push(new Audio("audio/02_closed_hihat.wav"));
audioFiles.push(new Audio("audio/03_open_hihat.wav"));
audioFiles.push(new Audio("audio/04_clap.wav"));
audioFiles.push(new Audio("audio/05_snap.wav"));
audioFiles.push(new Audio("audio/06_crash.wav"));
audioFiles.push(new Audio("audio/07_tom1.wav"));
audioFiles.push(new Audio("audio/08_tom2.wav"));
audioFiles.push(new Audio("audio/09_tambourine.wav"));

var loop = new Audio('audio/loop.mp3');
$('#play-btn').on('click', playloop);
$('#stop-btn').on('click', stoploop);
$(document).on('keydown', addCell);
$(document).on('keyup', removeCell);

function playloop() {
    loop.play();
}
function stoploop() {
    loop.pause();
    loop.currentTime = 0;
}
function addCell(event) {
    if (Number(event.key) >= 1 && Number(event.key) <= 9) {
        $('#cell'+event.key).addClass('playing')
        var cur = audioFiles[Number(event.key)-1];
        cur.play();
}    
}
function removeCell(event) {
    $('#cell'+event.key).removeClass('playing')
    var cur = audioFiles[Number(event.key)-1];
    cur.pause();
    cur.currentTime = 0;
}