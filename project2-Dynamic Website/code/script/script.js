$("#alertPh").hide();
$("#alertE").hide();
$("#alertPaS").hide();
$("#alertPaL").hide();

//------------------ nav toggle ---------------------
$(function () {
    $(".toggle").on("click", function () {
      if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
      } else {
        $(".item").addClass("active");
      }
    });
  });
// ===================
if(!localStorage.length){
localStorage.setItem("id",0);
}

$("#signIn").click(function(){
   let n=$("#lname").val();
   let p=$("#lpwd").val();
   let passwordRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
   passwordResult = passwordRGEX.test(p);

if(passwordResult){
   if(document.getElementById('lcheckbox').checked) {
      localStorage.setItem("n",n);
      localStorage.setItem("pa",p);
  } else {
      sessionStorage.setItem("n",n);
      sessionStorage.setItem("pa",p);
  }

  window.location.href = "../p2.html";
}
else{
  $("#alertPaL").show();
}
  });

  $("#signUp").click(function(){
    let e=$("#semail").val();
    let pa=$("#spwd").val();
    let n=$("#sname").val();
    let d=$("#sdate").val();
    let ph=$("#sphone").val();
    let phoneRGEX = /^\d{10}/;
    let emailRGEX = /\S+@\S+\.\S+/;
    let passwordRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    phoneResult = phoneRGEX.test(ph);
    emailResult = emailRGEX.test(e);
    passwordResult = passwordRGEX.test(pa)

    if(phoneResult && emailResult&&passwordResult){    
    if(document.getElementById('scheckbox').checked) {
      localStorage.setItem("e",e);
      localStorage.setItem("pa",pa);
      localStorage.setItem("n",n);
      localStorage.setItem("d",d);
      localStorage.setItem("ph",ph);
    } else {
      sessionStorage.setItem("e",e);
      sessionStorage.setItem("pa",pa);
      sessionStorage.setItem("n",n);
      sessionStorage.setItem("d",d);
      sessionStorage.setItem("ph",ph);
    }
    window.location.href = "../p2.html";
}
else {

  if (!phoneResult){
    $("#alertPh").show();
  }
  if(!emailResult){
    $("#alertE").show();
  }
  if(!passwordResult){
    $("#alertPaS").show();
  }
}
  });

  // =====================================================
  var phoneResult=false,emailResult=false,passwordResult=false;

  function checkPhone() {
    document.getElementById("sphone").value = document.getElementById("sphone").value.replace(/\D/g, '');
    let phoneRGEX = /^\d{10}/;
     phoneResult = phoneRGEX.test(document.getElementById("sphone").value);
  }
  function checkEmail() {
    let emailRGEX = /\S+@\S+\.\S+/;
     emailResult = emailRGEX.test(document.getElementById("semail").value);
  }
  function checkPassword(x) {
    let passwordRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
     passwordResult = passwordRGEX.test(document.getElementById(`${x}pwd`).value);
  }


// -------------------------------------
//s => sign up ---- l => login , sign in
function sAgreeCheckbox() {
var button= document.getElementById("signUp");
var checkBox = document.getElementById("sagree");
if (checkBox.checked ) {
    button.disabled=false;

}
else{
    button.disabled=true;
}
}
function lAgreeCheckbox() {
var button= document.getElementById("signIn");
var checkBox = document.getElementById("lagree");
if (checkBox.checked ) {
    button.disabled=false;
}
else{
    button.disabled=true;
}
}