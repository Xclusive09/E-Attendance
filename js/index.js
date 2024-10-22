//side bar functionality

$(document).ready(function () {
    $('#menuToggle').click(function () {
        $('#sidebar').toggleClass('show');
        $('#overlay').toggleClass('show');
    });

    // Close sidebar when clicking on overlay
    $('#overlay').click(function () {
        $('#sidebar').removeClass('show');
        $('#overlay').removeClass('show');
    });
});

//qr code functionality
  // Add your QR code scanning logic here
  const video = document.getElementById('qr-video');

  // Check if the browser supports the getUserMedia API
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: { exact: "environment" } } // Use the back camera
    })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(error) {
        console.error('Error accessing the camera:', error);
    });
} else {
    console.error('The browser does not support the getUserMedia API.');
}

//side bar functionality

  document.getElementById('menuToggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
        overlay.style.display = 'block';
    }
});

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
