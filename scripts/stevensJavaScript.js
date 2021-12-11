/* Steven's JavaScript*/
/*Promotion Game*/
let playCount=0;
let win=false;
function checkWin(clicked_id){
    var userChoice=clicked_id;
    var computerPick=pick();
    var result=compare(userChoice,computerPick);
    alert(result);
}
function pick(){
    var computerPick=Math.random();
    if(computerPick<0.1){
        computerPick="cream";
    }
    else if(computerPick<0.2){
        computerPick="hairbrush";
    }
    else if(computerPick<0.3){
        computerPick="hairdryer";
    }
    else if(computerPick<0.4){
        computerPick="lipstick";
    }
    else if(computerPick<0.5){
        computerPick="lotion";
    }
    else if(computerPick<0.6){
        computerPick="pedicure";
    }
    else if(computerPick<0.7){
        computerPick="seat";
    }
    else if(computerPick<0.8){
        computerPick="shampoo";
    }
    else if(computerPick<0.9){
        computerPick="straightener";
    }
    else{
        computerPick="zenstones";
    }
    return computerPick;
}
function compare(userChoice,computerPick){ 
    var result="You lose";
    if(userChoice==computerPick && playCount<=5){
        result="You won! here is the code for 25% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=10){
        result="You won! here is the code for 20% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=15){
        result="You won! here is the code for 15% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=20){
        result="You won! here is the code for 10% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount >=20){
        result="You won! here is the code for 5% off";
        win=true;
    }
    else{
        result="Sorry, you did not win";;
    }
    playCount++;
    if(playCount==5 || win==true){
        endGame();
    }
    return result;
}
function endGame(){
    let winStatus="lost";
    if(win==true){
        winStatus="won";
    }
    let end="It took "+playCount+" changes. You have "+winStatus;
    document.getElementById("endGameMessage").innerHTML=end;
}

/*Video Player JavaScript*/
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