document.addEventListener("DOMContentLoaded", function() {startplayer();},false);
var player;
function startplayer(){
    player=document.getElementById("videoPlayer");
    player.controls=flase;
}
function playVideo(){
    player.play();
}
function pauseVideo(){
    player.pause();
}
function stopVideo(){
    player.pause();
    player.currentTime=0;
}
function changeVol(){
    player.volume=document.getElementById("changeVolume").value;
}