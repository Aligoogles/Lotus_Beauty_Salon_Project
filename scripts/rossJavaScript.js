//To get to booking page
function bookApp(){
  alert("You will now be directed to the booking form. Thank you.")
  window.location.href="booking.html"
}

//Javascript for the Form
function formChange(){
    //Assigning input data into vars
    let name = document.forms["r-form"]["name"].value;
    let email = document.forms["r-form"]["email"].value;
    let number = document.forms["r-form"]["number"].value;

    //alert messages

    //first name
    if(name.indexOf(" ")!= -1){
      name=name.split(" ");
      if(!name[1].length>=1){
        alert("First name must be filled in.");
        return false;
      }
    }
    else{
      alert("Please Enter more than one word. Thank you.");
      return false;
    }


    //email
    if(email.indexOf("@") != -1){
      email= email.split("@");
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
    

    //phone number
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


  alert("Thank you "+name+". We will get in touch via "+email+ number+" to organise a time and date for your appointment.");
    return true; 

 
//To say form is submitted
//alert(firstName+ lastName+", thank you for your details. We will be in touch via "+userEmail+ " and "+userNum+" shortly. Your treatments are "+treatment1+" , "+treatment2+''+treatment3+''+ treatment4);
//alert("Form submitted");
}
//To hide the form. 
//var hideForm=document.getElementById("hide");
//if (hideForm.style.display ==="none"){
   // hideForm.style.display="block";
//}
//else {
    //hideForm.style.display="none";
//}
   


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
  