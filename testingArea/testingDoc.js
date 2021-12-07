
function checkWin(clicked_id){
    var userChoice=clicked_id;
    var computerPick=pick();
    var result=compare(userChoice,computerPick);
    alert(result);
}
function pick(){
    var computerPick=Math.random();
    if(computerPick<0.2){
        computerPick="card";
    }
    else if(computerPick<0.4){
        computerPick="beach";
    }
    else if(computerPick<0.6){
        computerPick="bus";
    }
    else{
        computerPick="glass";
    }
    return computerPick;
}
function compare(userChoice,computerPick){ 
    var result="You lose";
    if(userChoice==computerPick){
        result="You won! here is the code";
    }
    else{
        result="Sorry, you did not win";;
    }
    return result;
}