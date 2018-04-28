window.onload = function(){

	function makeInvisible() {
		login.style.animation = "disappear 1s 1";
		login.style.animationFillMode = "forwards";
		setTimeout(notDisplay, 1000);
	}

	function notDisplay() {
		login.style.display="none";
	}


	var login = document.getElementById("login");
	var loginBtn = document.getElementById("loginBtn");
	loginBtn.addEventListener("click", makeInvisible);
}();
