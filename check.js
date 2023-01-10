document.getElementById("check").addEventListener("click", sprawdzanie, sprawdzanie2);
function sprawdzanie() {
if (document.getElementById("b2").checked){ 
	alert("Dobrze")
} else {
	alert("źle");
}
}

function sprawdzanie2() {
if (document.getElementById("a1").checked){
	alert("Dobrze")
} else {
	alert("źle");
}
}
