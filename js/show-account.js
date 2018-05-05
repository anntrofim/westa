window.onload = function () {

    var account = document.getElementById("account");
    
    account.style.animation = "appearance 2s 1";
    // change opacity manually after animation (todo: better to remove)
    setTimeout(function() {
        setOpacity(account, 1);
    }, 2000);

    function setOpacity(element, opacity) {
		element.style.opacity = opacity;
    }
}();