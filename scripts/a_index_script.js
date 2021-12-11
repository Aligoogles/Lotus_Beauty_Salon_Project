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

/*Start of hamburger menu 
function aHamburger() {
    var x = document.getElementsByClassName("a-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
  /* End of hamburger menu */



  
/*Start Footer - Aelita (21113131)*/
function scrollToTop() {
    window.scrollTo(0, 0);
}
/* End Footer */