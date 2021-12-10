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
  