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

/* Contact form  Start*/
function validateForm() {
    let name = document.forms["a-contact-form"]["a-fullname"].value;
    let email = document.forms["a-contact-form"]["a-email"].value;
    let number = document.forms["a-contact-form"]["a-ph"].value;
    
    //test name for two words
    if(name.indexOf(" ") != -1){
        name = name.split(" ");
        if(!name[1].length >= 1){
            alert("Name must contain two or more words");
            return false;
        }
    }else{
        alert("Name must contain two or more words");
        return false;
    }

    //test email for @, then test for period, then test for extension
    if(email.indexOf("@") != -1){
        email = email.split("@");
        if(email[1].indexOf(".") != -1){
            email = email[1].split(".");
            if(!email[1].length > 0){
                alert("Email must have an extension");
                return false;
            }
        }
        else{
            alert("Email must contain a period");
            return false;
        }
    }
    else{
        alert("Email must contain @ symbol");
        return false;
    }

    //test phone number is only numbers then test if between 10 & 12 digits long
    for( let i = 0; i < number.length; i++){
        if(isNaN(number.charAt(i)) && !(number.charAt(i) === " ") ){
            alert("Phone number must contain only digits");
            return false;
        }
    }
    if(number.length < 10){
        alert("Not enough digits in phone number");
        return false;
    }
    else if(number.length > 12){
        alert("Too many digits in phone number");
        return false;
    }

    //if all successful notify the user
    alert("Information has been validated");
    return true; 
  } /* Contact form End */



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
/* When arrow is pressed it srolls up to top of the page */
function scrollToTop() {
    window.scrollTo(0, 0);
}
/* End Footer */