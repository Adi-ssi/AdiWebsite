function checkLoginStatus() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
        alert("You are not logged in");
        window.location.href = "index.html";
    }
}
checkLoginStatus();

document.getElementById('logoutLink').addEventListener('click', function (event) {
    event.preventDefault();
    sessionStorage.removeItem('loggedIn');
    window.location.href = "index.html";
});
