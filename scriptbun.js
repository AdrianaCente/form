var x = document.getElementById("fName");
var y = document.getElementById("lName");
var z = document.getElementById("textArea");
var a = document.getElementById("mGender");
var b = document.getElementById("fGender");
var v = document.getElementById("one");

x.addEventListener("change", inputChangefName);
y.addEventListener("change", inputChangelName);
z.addEventListener("change", inputChangetextArea);
a.addEventListener("change", inputChangemGender);
b.addEventListener("change", inputChangefGender);

function inputChangefName(event) {
  console.log(document.getElementById("fName").value);
}
function inputChangelName(event) {
  console.log(document.getElementById("lName").value);
}
function inputChangetextArea(event) {
  console.log(document.getElementById("textArea").value);
}
function inputChangemGender(event) {
  console.log(document.getElementById("mGender").value);
}
function inputChangefGender(event) {
  console.log(document.getElementById("fGender").value);
}

function myValidation() {
  x.addEventListener("blur", fnameVerify);
  y.addEventListener("blur", lnameVerify);
  z.addEventListener("blur", txtareaVerify);
  v.addEventListener("change", genderVerify);

  if (x.value != "") {
    if (y.value != "") {
      if (z.value != "") {
        if (a.checked != false || b.checked != false) {
			return true;
        } else {
			v.style.color = "red";
			alert("Please select gender");
			return false;
        }
      } else {
        z.style.border = "2px solid red";
        alert("Please fill in the message box");
        return false;
      }
    } else {
      y.classList.add("styleRed");
      alert("Please fill in the Last Name");
      return false;
    }
  } else {
    x.classList.add("styleRed");
    alert("Please fill in the First Name");
    return false;
  }

  function fnameVerify() {
    if (x.value != "") {
      x.classList.remove("styleRed");
      return true;
    }
  }

  function lnameVerify() {
    if (y.value != "") {
      y.classList.remove("styleRed");
      return true;
    }
  }

  function txtareaVerify() {
    if (z.value != "") {
      z.style.border = "1px solid black";
      return true;
    }
  }
  
  function genderVerify() {
    if (a.checked != false || b.checked != false) {
      v.style.color = "black";
      return true;
    }
  }
}

document.getElementById("myForm").addEventListener("submit", callback);

function callback(event) {
  if (
    x.value != "" &&
    y.value != "" &&
    z.value != "" &&
    (a.checked != false || b.checked != false)
  ) {
    var fn = document.createTextNode("Thank you for contacting us, " + x.value);
    document.getElementById("divOne").appendChild(fn);
    document.getElementById("divOne").style.visibility = "visible";
  }
}
