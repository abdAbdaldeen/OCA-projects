dis = (val) => (document.getElementById("result").value += val);

//function that evaluates the digit and return result
solve = () => {
  let answer;
  let x = document.getElementById("result").value;
  if (!ispow) {
    answer = eval(x);
  }
  else{
    var pos = x.search("^");
    let f =parseFloat(x.slice(0,pos-1));
    let s =parseFloat(x.slice(pos+2));
    console.log(f,s,x.slice(pos+2));
  answer = Math.pow(f,s);
}
document.getElementById("result").value = answer;
ispow=false;
};

//function that clear the display
clr = () => (document.getElementById("result").value = "");

calculate = () => {
  var val = document.getElementById("result").value;
  if (val.length > 0) {
    val = val.substring(0, val.length - 1);
    document.getElementById("result").value = val;
  }
};
doMath = () => {
  var inputNum = document.getElementById("result").value;
  var result = Math.abs(inputNum);
  document.getElementById("result").value = result;
};

//factorial number
 factorial=()=> {
  var inputNum = document.getElementById("result").value;
  let answer = 1;
  if (inputNum == 0 || inputNum == 1) {
    document.getElementById("result").value = answer;
  } else {
    for (var i = inputNum; i >= 1; i--) {
      answer = answer * i;
    }
    document.getElementById("result").value = answer;
  }
}
//---------------dark & ligt mode swith---------------
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// ----------------- pow ------------------------
let ispow= false;

disPow = () => {
  document.getElementById("result").value += "^";
  ispow= true;
};