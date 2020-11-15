function check(){
	var pw1=document.getElementById("pw1").value;
	var pw2=document.getElementById("pw2").value;
	if(pw1!=pw2){
		window.alert("invalid pw");
		document.getElementById("check").innerHTML="Invalid";
	}
}

function abcd(){
	alert("gggg");
}