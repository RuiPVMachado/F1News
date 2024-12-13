document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    const loadingContainer = document.getElementById('loadingContainer');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const f1Car = document.getElementById('f1Car');
    const carSound = document.getElementById('carSound');
    let lightCount = 0;

    // Function to activate lights faster (300ms between lights)
    function activateLight() {
        if (lightCount < lights.length) {
            lights[lightCount].classList.add('red');
            lightCount++;

            if (lightCount === lights.length) {
                // Turn all lights green and start the race immediately
                setTimeout(() => {
                    lights.forEach(light => {
                        light.classList.remove('red');
                        light.classList.add('green');
                    });
                    // Start the car right after lights turn green
                    f1Car.classList.add('race');
                    // Play the car sound
                    carSound.play();
                }, 300);
            }
        }
    }

    // Start light sequence with shorter intervals (300ms)
    const lightInterval = setInterval(activateLight, 300);

    // End loading sequence and redirect to index.html
    setTimeout(() => {
        clearInterval(lightInterval);
        loadingContainer.style.display = 'none';
        welcomeMessage.classList.add('visible');

        // Add a small delay before redirecting
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    }, 4000);
});