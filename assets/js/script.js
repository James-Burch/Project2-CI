// JS Code to open and close the how to play menu
document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'none';
});

// JS code to display the game that the user clicks on
const mainMenu = document.getElementById('main-menu');
const gameScreen = document.getElementById('game-screen');
const gameButton = document.querySelectorAll('.game-btn');
const gameContent = document.querySelectorAll('.game-content');

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
}









// JS code to start playing the bhp higher or lower game