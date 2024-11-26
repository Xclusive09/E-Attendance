document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            try {
                Notiflix.Loading.circle();
                console.log('Sending data:', data); // Log the data being sent
                const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(data)
                });
                Notiflix.Loading.remove();
                console.log('Response status:', response.status); // Log the response status
                const result = await response.json();
                console.log('Response data:', result); // Log the response data
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successful!',
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            content: 'custom-content',
                            confirmButton: 'custom-confirm-button'
                        }
                    }).then(() => {
                        localStorage.setItem('authToken', result.token); // Store the token
                        window.location.href = '/user/userDashboard.html';
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Credentials',
                        text: result.message,
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            content: 'custom-content',
                            confirmButton: 'custom-confirm-button'
                        }
                    });
                }
            } catch (error) {
                console.error('Fetch error:', error); // Log the error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                    customClass: {
                        popup: 'custom-popup',
                        title: 'custom-title',
                        content: 'custom-content',
                        confirmButton: 'custom-confirm-button'
                    }
                });
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);

            const data = {
                fullName: formData.get('full_name'),
                userName: formData.get('user_name'),
                phoneNumber: formData.get('phone_number'),
                role: formData.get('role'),
                email: formData.get('email'),
                password: formData.get('password')
            };
            if (data.password !== formData.get('confirm_password')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Passwords do not match!',
                    customClass: {
                        popup: 'custom-popup',
                        title: 'custom-title',
                        content: 'custom-content',
                        confirmButton: 'custom-confirm-button'
                    }
                });
                return;
            }
            try {
                Notiflix.Loading.circle(); // Show loading indicator
                console.log('Sending data:', data); // Log the data being sent
                const response = await fetch('https://e-attendance-backend-wf6x.onrender.com/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                Notiflix.Loading.remove(); // Remove loading indicator
                console.log('Response status:', response.status); // Log the response status
                const result = await response.json();
                console.log('Response data:', result); // Log the response data
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Signup successful!',
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            content: 'custom-content',
                            confirmButton: 'custom-confirm-button'
                        }
                    }).then(() => {
                        window.location.href = '../index.html';
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Signup failed',
                        text: result.message,
                        customClass: {
                            popup: 'custom-popup',
                            title: 'custom-title',
                            content: 'custom-content',
                            confirmButton: 'custom-confirm-button'
                        }
                    });
                }
            } catch (error) {
                console.error('Fetch error:', error); // Log the error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                    customClass: {
                        popup: 'custom-popup',
                        title: 'custom-title',
                        content: 'custom-content',
                        confirmButton: 'custom-confirm-button'
                    }
                });
            }
        });
    } else {
        console.error('Signup form not found');
    }
});