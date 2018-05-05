window.onload = function () {

	// changing focus automatically for pin
	$(".pin__inp").keyup(function () {
		if (this.value.length == 1) {
		  $(this).next(".pin__inp").focus();
		}
	});

	// transition to account logic
	var login = document.getElementById("login");
	var loginBtn = document.getElementById("loginBtn");

	var accountPath = "../html/account.html";

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