window.onload = function(){

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
var account = document.getElementById("account");

function notDisplay() {
	login.style.display="none";
}

function changeOpacity() {
	account.style.opacity = "1";
}

function changeScreen() {
	login.style.animation = "disappear 1s 1";
	setTimeout(notDisplay, 1000);
	account.style.animation = "appearance 2s 1";
	account.style.animationDelay = "1s";
	setTimeout(changeOpacity, 3000);
}

loginBtn.addEventListener("click", changeScreen);
}();
