var about = document.getElementById("about");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");

      window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

}
      // ------------------------------
      let isflip = new Array();
      for (let i = 0; i < 5; i++) {
        isflip[i]=false;
      }
      var FCInner = document.getElementsByClassName("flip-card-inner");
      function flip(x) {
      if(isflip[x]){
        FCInner[x].style.transform = "rotateY(0deg)";
       isflip[x] = false;
      }
      else{
        FCInner[x].style.transform = "rotateY(180deg)";
       isflip[x] = true;
      }
         
      }
      // ---------------------------------------------------
      $("#x").hide();
      $("#hamburgerMenu").click(function (e) { 
        $("#navbar").addClass("cBurgerMenu");
        $("#hamburgerMenu").hide();
        $("#x").show();
      });
      $(".item").click(function (e) { 
        $("#navbar").removeClass("cBurgerMenu");
        $("#hamburgerMenu").show();
        $("#x").hide();
      });
      // ------------------- pro-tabs -----------------------------
      $(".pro-Wordpress-card").hide();
      $(".pro-flutter-container").hide();
      function proTabs(tab,btn) {
        $(".active").removeClass("active");
        $(".show").hide(600);
        $(".show").removeClass("show");
        $("."+tab).addClass("show");
        $("."+tab).show(600);
        $("."+btn).addClass("active");
        
      }