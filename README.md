# High Octane
## Site Introduction
High Octane is fun game site for car lovers to test their knowledge on 3 different car stats. The website has been made as I love cars personally and wanted to join my 2 passions. The users of the website will be able to easily navigate the website as I have used pointers and enlarging buttons to prompt the user to click to start the game.
![Image to show am I reponsive of my site](assets/readme-images/amiresponsive.png)
## Planning the website/game
### Site purpose
 - Have a fun easy game for car lovers to play to test their knowledge of many different cars.
 - Be able to track previous high scores and compete to beat the previous high score.
 - End the game when the user gets the answer wrong, display their final score and give the option to play again or return to the main menu to select another game
### Easy to navigate
 - I made sure to encorporate a simple easy to follow design to the page so that the user can easily start to play the game of their choice, return to the main menu and open/close the how to play menu.
 - Part of making the site easy to navigate in this project was using the :hover CSS to allow for the users on laptops/desktops to easily navigate the site with pointer cursor, colour flip when hovering and the transitions to enlarge the buttons to prompt the user to click.
 - I have used flex to make the site fully responsive so that is best uses the space across all screen sizes, using flex makes the code easy to navigate as there are less media queries required.
 - The colour choice is very simple, I started of using a 4 color palette I found on Canva but as I went on to tidy up the site I decided that using images and simple black overlays with white text created the look that I wanted for the site. The colours were kept simple for the end site as there is already alot going on with the images so the text being bold makes every peice of text clear to read
 - I wanted to make the workspace easy to navigate also, for this reason I have created 2 javascript files with one to contain all of the car information in the array and one to carry out my functional code to make the website work and pull the information from the info.js file.
 - I also had the idea of keeping with 1 html file and using javascript and css to hide and unhide the different areas of the code when the respective buttons are clicked on. This will also be linked with the game functions to start and end the games.
### Target Audience
 - My target audience for this site is primarily car lovers and enthusiasts who want to test their knowledge.
 - People who want a simple fun game to play in their spare time.
 - People who want to test their knowledge of cars.
 - People who want to learn more about cars.
 - Groups of friends who want to have a bit of friendly competition with a fun easy to use game to see who can get the highest score
### How will I acheive all of this?
- I have added meta tags to the head of my page so that people looking for a higher or lower game, car game, fun game to play can find my site and play.
- I have added clear easy to read instructions for how to plan the games so that if users are unsure on how to play they can simply open the 'How to play?' menu and read the instructions, close the menu using the big 'X' in the corner and select the game they want to play.
- I have added clear text to show the user that when they click each game button they know what stat they will be guessing if it is higher or lower for.
- On the game screen there is a 'Score' overlay in the corner to show the user their current score, this updates as they play.
- I have added a play again and main menu button to the final score screen once the user inputs an incorrect answer which clearly allows the user to navigate around the site.
- All buttons on the site have media queries setup so that when a mouse hovers the buttons enlarge and colours flip to clearly show what the user is hovering over.
### Tools/Input from others
 - I plan to share the website with my friends who are also car enthusiasts to get their opinions and find any issues with the site for me to rectify.
 - I will speak with other students at Code Institute to gather opinions on things that I may be able to change/add and also things that I have missed. I believe it is always good to have another opinion or set of eyes to look over your work as there is always bits you miss yourself.
  - Tools I used for this project:
   - HTML and CSS Validators
   - Lighthouse in the dev tools
   - Chatgpt, this was only used to pic lots of super cars names and find out all of the information about them that I needed to save myself time having to google 50+ cars stats. I will also use this to spell check my work.
   - All of the images are sourced from free websites on google or from google images.
   - Favicon has been used to add the favicon car silhoutte to my page.
   - Fontawesome has been used to add the social media icon links to my pages.
   - I have used JSHint to help with my javascript code when possible.
## Features and Functions of my page
### Main menu
The main menu page consists of a short introduction of High Octane and what the site is, with a clear 'How To Play?', 3 game screens which the user can select which game they would like to play, a high score tab which will begin to track and dsiplay a users high score each time they play and a footer with links to my github and linked in.
![Image of the main menu screen of my site](assets/readme-images/mainmenu.png)
### How to play screen
The how to play menu display a background image of a Lamborginhi Aventador SVJ with the short and simple instructions on how to navigate the site and play the games. I have kept this menu as simple as possible whilst trying to maintain the sleek look I want for the page. The page has an 'X' fontawesome icon in the corner to prompt the user to click and close the menu once they have read it to return to the main menu. This has been done using a selection of CSS and Javascript eventlisteners.
![Image of the how to play menu of my site](assets/readme-images/howtoplayscreen.png)
### Game screens
Each game screen has the same look as it reuses the same HTML and CSS, the javascript code has 'if' and 'else' to decide which game has been opened and what information it needs to display in the HTML. I decided to display each car as a column on all screens as I liked how this displayed and I never experienced any errors with this layout, it is easy to use and navigate on all screen sizes. 
![Image of the game screen of my site](assets/readme-images/gamescreenbhp.png)
### Fail screen
The idea for this screen was to display a funny image of a recognisable personality in the motoring world for when the user inputs an incorrect answer and ends the game. The screen also displays the final score that the user got too and the options to either play again or return to the main menu where if the final score was higher than the previous high score it will display the new high score.
![Image of the fail screen of my site](assets/readme-images/failscreen.png)
### JavaScript functions
I have used many different javascript functions for my project, not only does the game run through the javascript but the actual display to open and close the different html elements is done through javascript event listeners. I have done this as I wanted to showcase my skills to use javascript and only use one HTML file. There will be a more detailed desription later in the readme file.
#### Score Section
The score area of the game screen uses javascript code to update when the user inputs a correct answer and track how many answers the user has guessed correctly, this score will continuesly update until a wrong answer has been input. I decided to display this in the corner of the screen so that it does not get in the way but is big enough to be seen and the user can track their current score.
![Image to show the score tracking section](assets/readme-images/scoretracker.png)
#### Higher or Lower Buttons
- The higher or lower buttons are linked to the game function so that when they are clicked an event listener waiting for a click triggers the code to compare the 2 car stats to see if the answer the user has input, for example if the car displayed has 100bhp and the car the user is trying to guess is higher or lower has 120bhp if the user inputs higher the code will compare the 2 figures to see if the hidden cars bhp is more than the cars power the user can see and vice versa for the lower button.
- I have displayed these buttons in the middle of the screen for all screen sizes between each car to make it obvious to the user that they are selecting higher or lower between the 2 displayed cars.
![Image to show the higher or lower buttons](assets/readme-images/higherorlowerbtn.png)
- I have used consistent CSS to style the buttons and score display throughout my page, I beleive this creates a better overall user experience.
#### Fail screen buttons
- The fail screen buttons have 2 options, one to play again and restart the same game and second one to allow the user to return to the main menu.
 - Play again: This button has an event listener attached so that when the button is clicked it activates the code to start the game over and reset the score, this then displays the game screen again.
 - Main menu: This button has an event listener attached so that when the button is clicked it activates the code to display the main menu, end the game and if the final score is more than the high score it will update the high score and display the users new high score.
- The screen also displays the final score from the game that the user has just played.
![Image to show the fail screen buttons and final score](assets/readme-images/failbuttons.png)

