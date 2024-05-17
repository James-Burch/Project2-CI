
//DOM elements for the game screen
const prevCar = document.getElementById("prev-car");
const prevCarName = document.getElementById("prev-car-name");
const prevCarPower = document.getElementById("prev-car-power");
const nextCar = document.getElementById("next-car");
// DOM elements for deciding which game to open
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const gameButton = document.querySelectorAll(".game-btn");
const gameContent = document.querySelectorAll(".game-content");

// JS Code to open and close the how to play menu
document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'none';
});


let score = 0;
let prevCar = getRandomCar();
let nextCar = getRandomCarExcluding(prevCar);
// Generate random number
function getRandomCar() {
    return Math.floor(Math.random() * searchCars.length);
 }
// Ensure the same car is not picked twice in a row
function getRandomCarExcluding(excludeCar) {
    let excluding;
    do {
        excluding = getRandomCar();
    } while (excluding === getRandomCar());
    return excluding;
} 
// Displays the cars image and details
function displayCar() {

}
















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
}
// Add event listeners for the game buttons
gameButton.forEach(button => {
    button.addEventListener("click", () => {
        const gameName = button.getAttribute("data-game");
        showGame(gameName);
    });
}); 






