// DOM elements for deciding which game to open
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const gameMenu = document.getElementById('game-end-menu');
const finalScore = document.getElementById('final-score');
const highScoreDisplay = document.getElementById('high-score');
// JS Code to open and close the how to play menu
document.getElementById('showButton').addEventListener('click', function () {
    document.getElementById('how-to-play-box').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('how-to-play-box').style.display = 'none';
});
// New start game code, one for each game mode
document.getElementById('game-btn-bhp').addEventListener('click', () => {
    showGame(1);
});
document.getElementById('game-btn-speed').addEventListener('click', () => {
    showGame(2);
});
document.getElementById('game-btn-price').addEventListener('click', () => {
    showGame(3);
});

let score = 0;
let prevCar;
let nextCar;
let highScore = 0;
// let prevCar = getRandomCar();
// let nextCar = getRandomCarExcluding(prevCar);
let currentGame = 1;
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
// Displays the correct game depending on which one is selected in the main menu
function displayCar(car, carElement) {
    const carName = carElement.querySelector('.overlay p:nth-child(1)');
    const carImg = carElement.querySelector('img');
    const carData = carElement.querySelector('.overlay p:nth-child(2)');

    carImg.src = car.image;
    carName.textContent = `${car.car}`;
    if (carElement.id === 'prev-car') {
        if (currentGame === 1) {
            carData.textContent = `Power: ${car.carPower}`;
        } else if (currentGame === 2) {
            carData.textContent = `Top Speed: ${car.carSpeed}`;
        } else {
            carData.textContent = `Price (from new): ${car.carPrice}`;
        }
    } else {
        if (currentGame === 1) {
            carData.textContent = 'Power: ?';
        } else if (currentGame === 2) {
            carData.textContent = 'Top Speed: ?';
        } else {
            carData.textContent = 'Price (from new): ?';
        }
    }
}
// Update the score display
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}
// Decide which game has started
function showGame(gameNumber) {
    currentGame = gameNumber;
    startGame();
}
/**
 * Create the update game function to move the nextCar to the prevCar position on screen,
 * Then randomly select a new car to be input into the nextCar element
 */
function updateGame() {
    displayCar(cars[prevCar], document.getElementById('prev-car'));
    displayCar(cars[nextCar], document.getElementById('next-car'));
    updateScore();
    console.log(updateScore);
}
// Create start game function
function startGame() {
    score = 0;
    prevCar = getRandomCar();
    nextCar = getRandomCarExcluding(prevCar);
    displayCar(cars[prevCar], document.getElementById('prev-car'));
    displayCar(cars[nextCar], document.getElementById('next-car'));
    updateScore();
    mainMenu.style.display = 'none';
    gameScreen.style.display = 'block';
    gameMenu.style.display = 'none';

    // Display the highscore from local storage
    highScore = Number(localStorage.getItem('highScore')) || 0;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
}

function endGame() {
    finalScore.textContent = `Final Score: ${score}`;
    gameMenu.style.display = 'block';
    gameScreen.style.display = 'none';
    // Update the high score if the final score is higher
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = `High Score: ${highScore}`;
    }    
}
function exitToMainMenu() {
    mainMenu.style.display = 'block';
    gameScreen.style.display = 'none';
    gameMenu.style.display = 'none';
    score = 0;
}
/**
 * The following code ensure when either the higher or lower button is clicked,
 * The 2 power values are compared to see if the users input is correct,
 * It then tells the game to carry on if correct or end if incorrect answer is given
 */
document.getElementById('higher-btn').addEventListener('click', () => {
    
    if (currentGame === 1) {
        if (Number(cars[nextCar].carPower) >= Number(cars[prevCar].carPower)) {
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        endGame();
    }
} else if (currentGame === 2) {
    if (Number(cars[nextCar].carSpeed) >= Number(cars[prevCar].carSpeed)) {
    score++;
    prevCar = nextCar;
    nextCar = getRandomCarExcluding(prevCar);
    updateGame();
} else {
    endGame();
}
} else {
    if (Number(cars[nextCar].carPrice) >= Number(cars[prevCar].carPrice)) {
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        endGame();
    }
} 
});
document.getElementById('lower-btn').addEventListener('click', () => {
    if (currentGame === 1) {
        if (Number(cars[nextCar].carPower) <= Number(cars[prevCar].carPower)) {
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        endGame();
    }
} else if (currentGame === 2) {
    if (Number(cars[nextCar].carSpeed) <= Number(cars[prevCar].carSpeed)) {
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        endGame();
    }
} else {
    if (Number(cars[nextCar].carPrice) <= Number(cars[prevCar].carPrice)) {
        score++;
        prevCar = nextCar;
        nextCar = getRandomCarExcluding(prevCar);
        updateGame();
    } else {
        endGame();
    }
}
});
// Add event listeners to the end game screen
document.getElementById('play-again-btn').addEventListener('click', () => {
    startGame();
});
document.getElementById('main-menu-btn').addEventListener('click', () => {
    exitToMainMenu();
});


