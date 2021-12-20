# Memory Game For You

"Memory Game For You" is a simple interactive card matching game, intended to entertain players of all ages. There are different levels, giving the player a bit more of a challenge as the cards increase and the time limit remains the same.
    
## Features

### Existing Features

- This is a single page website with the following clickable buttons:

- __"easy peasy lemon squeezy", "the more the 'berrier'" and "are you nuts about a challenge?" __
    - Clickable buttons in different bright colours providing an easy and user friendly way to select a game level
  
- __Start button__
    - A bright and clearly indicated button enabling the user to start the game, once a level has been selected

- __Stop button__
    - A bright and clearly indicated button enabling the user to stop the game at any point

- __Moves___
    - Calculates the total amount of times a player has clicked on the question marked cards during a specifiec level

- __Timer___
    - After a level has been selected and the start button pressed, the timer counts down 45 seconds.  When the timer reaches 0, the player can no longer select cards and a new game/level may be started

    

## Testing



* Clicking the level buttons, the start button and stop button are in working order
* Clicking on the cards do flip them as required

### Validator testing

- HTML
    - Three Html errors found when passing through the official [W3C validator] have been fixed and no errors were present upon deployment. [](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmorpheus-23.github.io%2Fmemory-game%2F)
- CSS
    - No CSS erros were found when passing through [(Jigsaw) validator]. Nineteen validation warnings in the styles.css file reported by [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fmorpheus-23.github.io%252Fmemory-game%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - These warnings will be adressed before the next release.
- JavaScript
    - Three warnings and three unused variables reported by [https://jshint.com/] will be addressed in the next release.
- Google Lighthouse Audit - done and issues to be addressed before next release.


### Unfixed Bugs

* Timer to stop once all pairs of cards have been found

## Deployment

- The site is deployed to GitHub pages. The steps to deploy were as follows:
    - In the memory-game GitHub repository, navigate to the Settings tab and scroll down to the Git Hub pages section and selecting "Check it out here!"
    - From the source section drop-down menu, select the main branch and save
- The live link can be found here - [https://github.com/Morpheus-23/memory-game](https://morpheus-23.github.io/memory-game/)

## Unimplemented assessment criteria

* README.md needs to be expanded to meet all required criteria.
* Site testing reports to be reflected in the README.md
* Wireframes used for planning the site needs to be reflected in the README.md
* Testing for different screen sizes needs to be reflected in the README.md 
* Development of the site and challenges encountered to be reflected and explained in the README.md
* User stories to be reflected in the README.md file
* The site is not a fun as a game site should be and still needs features to excite and motivate the player, such as pop-up messages, sound clips and reflecting a total score.


## Content

- All images were taken from [Adobe Stockphoto](https://stock.adobe.com/) and [pixabay](https://pixabay.com/)
- Idea designs were not taken from any specific source, it was merely from planning a logical course of action to design the lay-out, develop the site and make the site as easy and user friendly as possible for players of all ages.
- A lot of technical implementation information were taken from [Stack Overflow](https://stackoverflow.com/) and [W3Schools](www.w3schools.com).

## Directory structure

The site content is structured as follows:

| Directory | Description |
|---|---|
| / | html files  |
| /assets | non-html content |
| /assets/css | all style sheets |
| /assets/images | all images |
| /assets/js | javascript files |
