/* jshint esversion: 11 */

// Select important elements and link to HTML
const contactForm = document.getElementById('contact-form');
const boxContainer = document.querySelector('.box-container');
const thanksContainer = document.querySelector('.thanks-container');

// Event listener for the form submission
contactForm.addEventListener('submit', function (event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Hide the box container
    boxContainer.style.display = 'none';

    // Show the thanks container
    thanksContainer.style.display = 'block';

    // Start the countdown
    let countdown = 10;
    const countdownInterval = setInterval(() => {
        // Update the countdown message
        thanksContainer.innerHTML = `
            <div class="display-thanks-message">    
            <h2>Thank you for contacting us!</h2>
            <h3>You will be automatically redirected back to the home page in ${countdown}
            seconds.</h3>
            </div>
        `;

        countdown--;

        // When the countdown reaches 0, redirect to the home page and clear the interval
        if (countdown < 0) {
            window.location.href = 'index.html';
            clearInterval(countdownInterval);
        }
    }, 1000);
});