document.getElementById("check").addEventListener("click", sprawdzanie);
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
function sprawdzanie() {
	document.getElementById("good").style.display= "none";
	document.getElementById("bad").style.display= "none";

if (aiscorrect() &&  biscorrect() && ciscorrect()){
	document.getElementById("good").style.display= "block";
} else {
	document.getElementById("bad").style.display= "block";
}
}
function aiscorrect(){
	if(!a1.checked && !a2.checked && !a3.checked && a4.checked){
	return true
}else{
	return false
}
}
function biscorrect(){
	if(!b1.checked && !b2.checked && b3.checked && !b4.checked){
	return true
}else{
	return false
}
}
function ciscorrect(){
	if(c1.checked && c2.checked && c3.checked & c4.checked){
	return true
}else{
	return false
}
}
