/*Aelita (21113131)JavaScript*/

/* Start Index page */

/* Star functionality */
function toggleStar(number) {
    starID = "a-star-"+number;
    var start;
    var end;
    if(number >=1 && number <= 5){
        start = 1;
        end = 5;
    }
    else if(number >=6 && number <= 10){
        start = 6;
        end = 10;
    }
    else{
        start = 11;
        end = 15;
    }

    for(i=start;i<=end;i++){
        starID = "a-star-"+i;
        document.getElementById(starID).className = "fa fa-star ";
    }

    if(document.getElementById(starID).className == "fa fa-star "){
        for(i=start;i<=number;i++){
            starID = "a-star-"+i;
            document.getElementById(starID).className = "fa fa-star checked";
        }
    }
}
/* End of star functionality */

/*Start Footer - Aelita (21113131)*/
function scrollToTop() {
    window.scrollTo(0, 0);
}
/* End Footer */



/*Ross (21132305) JavaScript*/
//Javascript for the Form

function formChange(){
    //Assigning input data into vars
    var firstName=document.getElementById("fname").value;
    var lastName=document.getElementById("lname").value;
    var userEmail=document.getElementById("email").value;
    var userNum=document.getElementById("pnum").value;
    var treatment1=document.getElementById("treatment1").value;
    var treatment2=document.getElementById("treatment2").value;
    var treatment3=document.getElementById("treatment3").value;
    var treatment4=document.getElementById("treatment4").value;
    
    //To hide the form. 
    var hideForm=document.getElementById("hide");
        if (hideForm.style.display ==="none"){
            hideForm.style.display="block";
        }
        else {
            hideForm.style.display="none";
        }
    //To say form is submitted
    alert(firstName+ lastName+", thank you for your details. We will be in touch via "+userEmail+ " and "+userNum+" shortly. Your treatments are "+treatment1+ treatment2+ treatment3+ treatment4);
    alert("Form submitted");
}

//Gallery JavaScript for the LightBox Modal

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
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