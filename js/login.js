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

	var accountPath = '../html/account.html';

	function changeScreen() {
		login.style.animation = "disappear 1s 1";
		setTimeout(function() {
			hideElement(login);
			goToPage(accountPath);
		}, 1000);
	}

	function hideElement(element) {
		element.style.display = "none";
	}

	function goToPage(path) {
		window.location.href = path;
	}

	loginBtn.addEventListener("click", changeScreen);
}();