// script.js

// Reveal the hidden message when the button is clicked
document.getElementById('revealBtn').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block'; // Reveal hidden message
});

// Add snowflakes to the card
function createSnowflakes() {
    const card = document.querySelector('.card');
    const numberOfSnowflakes = 20; // You can increase or decrease this number
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄';
        // Randomize the snowflake's position and animation speed
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
        snowflake.style.fontSize = `${Math.random() * 15 + 10}px`; // Random size
        card.appendChild(snowflake);
    }
}

// Call the function to create snowflakes
createSnowflakes();
