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
console.log(localStorage.length);
if(!localStorage.length){
localStorage.setItem("id",0);
}
$("#signIn").click(function(){
    // alert("clicked");
   let n=$("#lname").val();
   let p=$("#lpwd").val();
   if(document.getElementById('lcheckbox').checked) {
      localStorage.setItem("n",n);
      localStorage.setItem("pa",p);
  } else {
      sessionStorage.setItem("n",n);
      sessionStorage.setItem("pa",p);
  }
  // alert("clicked");

  });

  $("#signUp").click(function(){
    // alert("clicked");
    let e=$("#semail").val();
    let pa=$("#spwd").val();
    let n=$("#sname").val();
    let d=$("#sdate").val();
    let ph=$("#sphone").val();
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
    // alert("clicked");
  });

  // =====================================================
  function checkPhone() {
    document.getElementById("sphone").value = document.getElementById("sphone").value.replace(/\D/g, '');
  }


// -------------------------------------
function sAgreeCheckbox() {
var button= document.getElementById("signUp");
var checkBox = document.getElementById("sagree");
if (checkBox.checked) {
    button.disabled=false;
}
else{
    button.disabled=true;
}
}
function lAgreeCheckbox() {
var button= document.getElementById("signIn");
var checkBox = document.getElementById("lagree");
if (checkBox.checked) {
    button.disabled=false;
}
else{
    button.disabled=true;
}
}