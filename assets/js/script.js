// JS Code to open and close the how to play menu
document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'none';
});

// Display the game that the user clicks on
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const gameButton = document.querySelectorAll(".game-btn");
const gameContent = document.querySelectorAll(".game-content");


// Add event listeners for the game buttons
gameButton.forEach(button => {
    button.addEventListener("click", () => {
        const gameName = button.getAttribute("data-game");
        showGame(gameName);
    });
}); 

// Function to decide which game has been clicked and what to display
function showGame(gameName) {
    // Remove the main menu
    mainMenu.style.display = "none";

    // Show the game screen selected
    gameScreen.style.display = "block";

    // Keep other games hidden
    gameContent.forEach(content => {
        content.style.display = "none";
    });

    // Show the content for the selected game
    const selectedGame = document.getElementById(gameName);
    selectedGame.style.display = "block";

    startGame();
}

// Generate random number
 function generateRandomNumber() {
    return Math.floor(Math.random() * searchCars.length);
 }
//DOM elements for the game screen
const prevCar = document.getElementById("prev-car");
const prevCarName = document.getElementById("prev-car-name");
const prevCarPower = document.getElementById("prev-car-power");
const nextCar = document.getElementById("next-car");
// Starts the game

function startGame() {
    /**
     * Generates 2 random numbers,
     * Uses random numbers to pick 2 starter cars
     */
    randomNumber1 = generateRandomNumber();
    randomNumber2 = generateRandomNumber();
    console.log(randomNumber1);
    console.log(randomNumber2)
    /**
     * Check if both numbers are the same,
     * If they are then generate another number
     */
    while (randomNumber1 === randomNumber2) {
        randomNumber1 === generateRandomNumber();
    }
    //Sets the background image to the first random car
    prevCar.style.backgroundImage = `url(${searchCars[randomNumber1].image})`;
    prevCarName.textContent = searchCars[randomNumber1].car;
    prevCarPower.textContent = searchCars[randomNumber1].carPower;
}