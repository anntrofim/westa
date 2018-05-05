window.onload = function () {
	// -------> CHANGING FOCUS AFTER INPUT

	// var inp = document.getElementsByClassName("pin__inp");

	// function changeFocus() {
	// 	for (var i = 0; i < inp.length; ++i) {
	// 		inp[i].blur();
	// 		inp[++i].focus();
	// 	}
	// }

	// inp.addEventListener("input", changeFocus());

	// -------> LOGIN BLOCK DISAPPEARANCE

	var login = document.getElementById("login");
	var loginBtn = document.getElementById("loginBtn");

	function changeScreen() {
		login.style.animation = "disappear 1s 1";
		setTimeout(function() {
			hideElement(login);
		}, 1000);
		setTimeout(function() {
			window.location.href = '../html/account.html';
		}, 1000);
	}

	function hideElement(element) {
		element.style.display = "none";
	}

	loginBtn.addEventListener("click", changeScreen);
}();