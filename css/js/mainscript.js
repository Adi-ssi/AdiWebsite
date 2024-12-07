function checkLoginStatus() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
        alert("You are not logged in");
        window.location.href = "index.html";
    }
}
checkLoginStatus();

const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'css/images/logonav.png';
    link.type = 'image/png';
    document.head.appendChild(link);"

document.getElementById('logoutLink').addEventListener('click', function (event) {
    event.preventDefault();
    sessionStorage.removeItem('loggedIn');
    window.location.href = "index.html";
});
