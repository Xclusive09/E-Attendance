document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
            overlay.classList.toggle('show');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });
    }
});

  // Function to format date and time
  function formatDateTime() {
    const now = new Date();
    
    // Get the current month and date
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    // Get the current time in 12-hour format
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${ampm}`;

    // Set the date and time in the date card
    document.querySelector('#date-card h4').innerText = formattedDate.split(' ')[0]; // Month
    document.querySelector('#date-card h5').innerText = formattedDate.split(' ')[1]; // Day
    document.querySelector('#time').innerText = formattedTime; // Time
}

// Call the function to format and display date and time
formatDateTime();

// QR code functionality
