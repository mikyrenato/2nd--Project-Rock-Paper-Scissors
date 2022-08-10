# Rock-Paper-Scissors-Game

## Scope, Goals and Description
Welcome to my 2nd Project: Rock-Paper-Scissors game! 

This is a player vs computer game where, following the rules of the game, the user and computer can score points up to 10, before one or the other wins that round. 

This game is designed to be played by someone who wants to play a game but doesn't have the time to play something complex. Perhaps on a mobile phone when travelling. It is also ideal for a younger audience This game is at a simple enough complexity that it can be played and enjoyed by anyone, as it is everyday by children everywhere.

The goal of this website, beyond testing my Javascript abilities, is to make a well-tested and fully functioning basic game that combines functionality with clean design and colours. 

[Live Link here](https://mikyrenato.github.io/2nd-Project-Rock-Paper-Scissors/home.html)

---
## Website across different platforms
![Responsiveness check](/assets/images//responsiveness.PNG)

---
## UX Description

In this kind of games bright colours are a must, I used the following:

Colours:

- All buttons in Green with white border and white text.
- Nickname input box in white with green border
- Most of the text is in green
- Game, score and choices area are in a transparent white background with green border.

Layout:

- Start Page:
  - Background picture with Rock, paper and Scissors 
  - Paragraph with instrusctions
  - Start Button

- Game Page:
  - Username vs opponent bar with score and last choice
  - "Game Arena" with instructions, coice buttons, nickname input box, and three buttons(Enter nickname, Restart game, Back to instructions)
  - Win/Lose/Draw Banner following result
  -Area for choices history results


---

## Technologies used

- HTML5 - Used to structure my website
- CSS3 - Used to style my website
- JS - Used to provide logic to my website
- Github - The cloud based service for hosting repositories
- Git - Used to add, commit and push my changes to the server
- Google Fonts - Used to source different fonts in my css file

---
## Website features

### Start-Page

The Start-Page briefly describes the rules of the game of Rock, Paper, Scissors followed by the "Start Game" button.

![Start-Page](/assets/images/home.PNG)

### Game-Page

Once the player has clicked start, the game page will appear.

![Main-Page](/assets/images/game.PNG)

Here you can enter your nickname(optional) which will hide using javascript the input box and the submit button until a new game is started.

![Main-Page](/assets/images/game2.PNG)


### About the Game Features

The game features a choices bar with 3 options to select. Rock (Fist emoji 🤜), Paper (Open hand emoji ✋) and Scissors (Peace sign emoji ✌️). When ever you click a choice, it will appear on both top and button followed bt the computer's random choice. 

![Choices](/assets/images/game3.PNG)

On the botton, not only that it will show last choice, but it will also keep track of previous choices.

![Choices](/assets/images/game4.PNG)

After either the user or the computer gets to 10 wins there will be an alert message poping up saying who the winner is.

![Choices](/assets/images/alert.PNG)

---

## Testing and Validation

### Responsiveness Testing (Multi-Platform)

This is a fully responsive website as you can see in the image below and it's suited for all platforms:

I used the Am i Responsive Website to check this.

![Responsiveness check](/assets/images//responsiveness.PNG)

### Lighthouse Testing

I can confirm that the website passed with great scores. See report below:

Mobile
![Lighthouse Report](/assets/images/lighthouse.PNG)
Desktop
![Lighthouse Report](/assets/images/lighthouse2.PNG)


### Validation:

I used the W3C CSS Validation Service to check my CSS code and it all came out without any errors:

![CSS Report](/assets/images/css.PNG)

I used the W3C Markup Validation Service to check my HTML code and it all came out without any errors:

![HTML Report](/assets/images/homew3c.PNG)
![HTML Report](/assets/images/indexw3c.PNG)

---
## Deployment
Below are the steps to take to deploy this website:

Rock Paper Scissors! is deployed on Github (the cloud-based service that is hosting my repository). Follow the steps below to deploy a Github Repository through GitHub pages:

1. Select the repository that you want to deploy, and select the settings link at the top right of the menu bar (A 'cog' icon will show near it).
2. Select the pages section on the vertical navigation bar on the left.
3. On the Github pages tab, scroll to the Source area and change the "None" branch tab to "Main", followed by changing the folder selector to "Root".
4. Finally, save this setting and refresh the site until you are presented with the following message in green: "Your site is published at (Your Github web address)"

### Forking your Repository
You can fork your repository to create an exact copy of the original one. This allows you to make changes without altering the original repository. 
Take the steps below:

1. Find and select your chosen repository.
2. At the top right of the page, between the watch/unwatch tab and the star tab, select the "Fork" tab.
3. You should now see a copy of the same repository in your account.

### Cloning a Repository
How to make a local clone repository:

1. Find and select the chosen repository.
2. Click on the "Code" button above the displayed repository files.
3. Select and Copy the displayed link.
4. In Gitpod, change the directory to your desired location.
5. Type "git clone" in the terminal and paste the link, followed by pressing Enter on your keyboard. You have successfully created a clone for local use!


---
## Credits

- Most importantly, this tutorial helped me understand how javascript works and helped me buid the main structure of the project(codes from this tutorial have been used for my HTML, CSS and javascript project): [Web Dev Simplified](https://www.youtube.com/watch?v=1yS-JV4fWqY&list=PLFIUQuoVboS-nnEsyVYuwS0S1-tQJRwc8&index=4&t=516s)
- This tutorial helped me understand how to Use JavaScript to Get Value from a Textbox and Display on the Page: [Six Minutes. Smarter.](https://www.youtube.com/watch?v=aEj0Wu33hJM&t=344s)
- Another useful tutorial which I watched is the following one, I haven't used any of the codes from here but it made me understand better how javascript works: [freeCodeCamp.org
](https://www.youtube.com/watch?v=jaVNP3nIAv0&list=PLFIUQuoVboS-nnEsyVYuwS0S1-tQJRwc8&index=5&t=4119s)
- Fonts imported from: [Google Fonts]([https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap](https://fonts.google.com/betterspecimen/Luckiest+Guy?query=luckiest+guy)
- Learned how to make div dissapear: [stackoverflow](https://cssgradient.io/](https://stackoverflow.com/questions/25209834/trying-to-make-a-div-disappear-with-javascript)
- This helped me improve my CSS: [css-tricks](https://css-tricks.com/examples/hrs/)
- Responsiveness check from: [Am I Responsive?](http://ami.responsivedesign.is/)
-[Rock Paper Scissors](https://github.com/Robrowno/rock-paper-scissors)'s readme file was used to create my own readme file and even though I haven't used any direct codes from here, it inspired me to add extra functionalities to my own project.


---
## Final Thoughts

This project was a real challange for me as this was the first time I used javascript. At some point I started to believe that this might not be something for me, I am happy I didn't give up and continue to do reasearch and learn and finish the project.

