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