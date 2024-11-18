
// Users Functionalities

// Signup functionality
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            alert('Signup successful!');
            window.location.href = '../index.html';
        } else {
            alert('Signup failed: ' + result.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Sign in functionality
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            alert('Login successful!');
            window.location.href = '/user/userDashboard.html';
        } else {
            alert('Login failed: ' + result.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Forget password functionality
document.getElementById('forgetPasswordForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/forget-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            alert('Password reset link sent!');
        } else {
            alert('Failed to send reset link: ' + result.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});