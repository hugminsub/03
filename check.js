document.getElementById("check").addEventListener("click", sprawdzanie);
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
function sprawdzanie() {
	document.getElementById("good").style.display= "none";
	document.getElementById("bad").style.display= "none";

if((a4.checked)&&(b3.checked)&&(!a1.checked)&&(!a2.checked)&&(!a3.checked)&&(!b1.checked)&&(!b2.checked)&&(!b4.chekced)){ 
	document.getElementById("good").style.display= "block";
} else {
	document.getElementById("bad").style.display= "block";
}
}
