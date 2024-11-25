document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/index.html'; // Redirect to login page if token is not found
    }
});