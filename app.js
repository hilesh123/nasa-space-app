
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('load-sky');
    const canvas = document.getElementById('star-chart');
    const ctx = canvas.getContext('2d');

    // Hardcoded star data for three exoplanets
    const starData = {
        "1": generateStars(100), // Exoplanet 1
        "2": generateStars(150), // Exoplanet 2
        "3": generateStars(200)  // Exoplanet 3
    };

    // Function to generate random stars
    function generateStars(numStars) {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
            });
        }
        return stars;
    }

    // Function to draw stars on the canvas
    function drawStars(stars) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Load the star chart when the button is clicked
    button.addEventListener('click', () => {
        const exoplanetId = document.getElementById('exoplanet-select').value;
        const stars = starData[exoplanetId];
        drawStars(stars);
    });
});

