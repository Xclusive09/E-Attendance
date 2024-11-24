// Signup functionality
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch('https://startupqr-g1i708fff-xclusive09s-projects.vercel.app/signup', {
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
        const response = await fetch('https://startupqr-g1i708fff-xclusive09s-projects.vercel.app/signin', {
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