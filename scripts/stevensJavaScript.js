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
        result="You won! here is the code (B-e-a-uty20) for 20% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=15){
        result="You won! here is the code (B-e-a-uty15) for 15% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount<=20){
        result="You won! here is the code (B-e-a-uty10) for 10% off";
        win=true;
    }
    else if(userChoice==computerPick && playCount >=20){
        result="You won! here is the code (B-e-a-uty5) for 5% off";
        win=true;
    }
    else{
        result="Sorry, you did not win. Try again";;
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
    let endProGame="It took "+playCount+" changes but you have "+winStatus;
    document.getElementById("endGameMessage").innerHTML=endProGame;
}

/*Video Player JavaScript*/
/*Load the player*/
document.addEventListener("DOMContentLoaded", function() {startplayer();},false);
var player;
function startplayer(){
    player=document.getElementById("videoPlayer");
    //player.controls=false;
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
/*Carosel JavaScript*/
/*Carosel Images on Teams page*/
var slidePosition = 1;
SlideShow(slidePosition);
// Forward and Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}
//Image controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}