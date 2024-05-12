// JS Code to open and close the how to play menu
document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'block';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('how-to-play-box').style.display = 'none';
});
