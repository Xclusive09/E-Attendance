document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            try {
                console.log('Sending data:', data); // Log the data being sent
                const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(data)
                });
                console.log('Response status:', response.status); // Log the response status
                const result = await response.json();
                console.log('Response data:', result); // Log the response data
                if (response.ok) {
                    alert('Login successful!');
                    localStorage.setItem('authToken', result.token); // Store the token
                    window.location.href = '/user/userDashboard.html';
                } else {
                    alert('Login failed: ' + result.message);
                }
            } catch (error) {
                console.error('Fetch error:', error); // Log the error
                alert('Error: ' + error.message);
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            if (data.password !== data.confirm_password) {
                alert('Passwords do not match!');
                return;
            }
            delete data.confirm_password; // Remove confirm_password from the data
            try {
                console.log('Sending data:', data); // Log the data being sent
                const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                console.log('Response status:', response.status); // Log the response status
                const result = await response.json();
                console.log('Response data:', result); // Log the response data
                if (response.ok) {
                    alert('Signup successful!');
                    window.location.href = '../index.html';
                } else {
                    alert('Signup failed: ' + result.message);
                }
            } catch (error) {
                console.error('Fetch error:', error); // Log the error
                alert('Error: ' + error.message);
            }
        });
    }
});