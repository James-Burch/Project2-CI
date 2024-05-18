
//DOM elements for the game screen
const prevCarName = document.getElementById("prev-car-name");
const prevCarPower = document.getElementById("prev-car-power");
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



let score = 0;
let prevCar = getRandomCar();
let nextCar = getRandomCarExcluding(prevCar);
// Generate random number
function getRandomCar() {
    return Math.floor(Math.random() * cars.length);
 }
// Ensure the same car is not picked twice in a row
function getRandomCarExcluding(excludeCar) {
    let car;
    do {
        car = getRandomCar();
    } while (car === excludeCar);
    return car;
}
// Displays the cars image and details
function displayCar(car, carElement) {
    const carName = carElement.querySelector('.overlay p:nth-child(1)');
    const carImg = carElement.querySelector('img');
    const carPower = carElement.querySelector('.overlay p:nth-child(2)');

    carImg.src = car.image;
    carName.textContent = `Name: ${car.car}`;
    carPower.textContent = carElement.id === 'prev-car' ? `Power: ${car.carPower}` : 'Power: ?';
}
// Create function to update the score
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}
// Create start game function
function startGame() {
    displayCar(cars[prevCar],document.getElementById('prev-car'));
    displayCar(cars[nextCar],document.getElementById('next-car'));
    updateScore();
}
/**
 * The following code ensure when either the higher or lower button is clicked,
 * The 2 power values are compared to see if the users input is correct,
 * It then tells the game to carry on if correct or end if incorrect answer is given
 */
document.getElementById('higher-btn').addEventListener('click', () => {
    if (Number(cars[nextCar].carPower) > Number(cars[prevCar].carPower)){
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        alert('wrong');
        // wrongAnswer();
    }
});
document.getElementById('lower-btn').addEventListener('click', () => {
    if (Number(cars[nextCar].carPower) < Number(cars[prevCar].carPower)){
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        alert('wrong');
        // wrongAnswer();
    }
});
/**
 * Create the update game function to move the nextCar to the prevCar position on screen,
 * Then randomly select a new car to be input into the nextCar element
 */
function updateGame() {
    displayCar(cars[prevCar], document.getElementById('prev-car'));
    displayCar(cars[nextCar], document.getElementById('next-car'));
    updateScore();
}


startGame();






















