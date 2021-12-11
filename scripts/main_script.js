/*Aelitha (21113131)JavaScript*/

/*Ross (21132305) JavaScript*/

/*Steven (21130736) JavaScript*/
/*Promotion Game*/
/*Getting results from user and computer*/
let playCount=0;
let win=false;
function checkWin(clicked_id){
    var userChoice=clicked_id;
    var computerPick=pick();
    var result=compare(userChoice,computerPick);
    alert(result);
}
/*Creating a result for the computer to use*/
function pick(){
    var computerPick=Math.random();
    /*Assigned ids in intervals between 0 and 1 for computer options*/
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
/*Return statements and different codes to customer*/
/*Different amount of clicks needed to give different values of discount*/
function compare(userChoice,computerPick){ 
    var result="You lose";
    if(userChoice==computerPick && playCount<=5){
        result="You won! here is the code (B-e-a-uty25) for 25% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=10){
        result="You won! here is the code (B-e-a-uty20)for 20% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=15){
        result="You won! here is the code (B-e-a-uty15) for 15% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=20){
        result="You won! here is the code (B-e-a-uty10)for 10% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount >=20){
        result="You won! here is the code (B-e-a-uty5)for 5% off";
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
/*Returning results to the page*/
function endGame(){
    let winStatus="lost";
    if(win==true){
        winStatus="won";
    }
    let end="It took "+playCount+" changes. You have "+winStatus;
    document.getElementById("endGameMessage").innerHTML=end;
}

/*Video Player JavaScript*/
/*Load the player*/
document.addEventListener("DOMContentLoaded", function() {startplayer();},false);
var player;
function startplayer(){
    player=document.getElementById("videoPlayer");
    player.controls=flase;
}
/*Play function*/
function playVideo(){
    player.play();
}
/*Pause function*/
function pauseVideo(){
    player.pause();
}
/*Stop function*/
function stopVideo(){
    player.pause();
    player.currentTime=0;
}
/*Volume Controls*/
function changeVol(){
    player.volume=document.getElementById("changeVolume").value;
}