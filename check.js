document.getElementById("check").addEventListener("click", sprawdzanie);
let a4 = document.getElementById("a4");
let b3 = document.getElementById("b3");
function sprawdzanie() {
	document.getElementById("good").style.display= "none";
	document.getElementById("bad").style.display= "none";

if((a4.checked)&&(b3.checked)){ 
	document.getElementById("good").style.display= "block";
} else {
	document.getElementById("bad").style.display= "block";
}
}
