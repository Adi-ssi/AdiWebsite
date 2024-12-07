document.addEventListener('DOMContentLoaded', function () {
    // Dynamically set the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'css/images/logonav.png';
    link.type = 'image/png';
    document.head.appendChild(link);

    // Logout functionality
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        console.log('Logout link found');
        logoutLink.addEventListener('click', function (event) {
            console.log('Logout clicked');
            event.preventDefault(); // Prevent the default anchor action
            sessionStorage.removeItem('loggedIn'); // Remove logged-in status
            window.location.href = "index.html"; // Redirect to the index page
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
