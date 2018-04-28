window.onload = function(){

  function ready() {
	login.style.display="none";
  }

  var login = document.getElementById("login");
  var loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", ready);
}();
