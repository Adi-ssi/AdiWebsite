document.addEventListener('DOMContentLoaded', function() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'css/images/logonav.png';
    link.type = 'image/png';
    document.head.appendChild(link);

    // Logout functionality
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            sessionStorage.removeItem('loggedIn');
            window.location.href = "index.html";
        });
    } else {
        console.error("Logout link not found");
    }

    // Check login status
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
        alert("You are not logged in");
        window.location.href = "index.html";
    }
});
