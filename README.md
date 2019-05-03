<h1 align="center">
  15 Slide Puzzle
</h1>

Slide puzzle take home assignment.

## Project Brief:

Using data and images made publicly available through the Unsplash API (https://unsplash.com/developers), we would like you to build a 15-tile puzzle game (https://en.wikipedia.org/wiki/15_puzzle), ideally using React.js. The Unsplash API allows for getting random (or non-random) high-resolution images. You should be able to:

- break the image up into 16 tiles
- discard the 16th tile
- randomize the order in such a way that the puzzle is solvable
- allow the user to unscramble the tiles per the rules of the game
- let the user know when the puzzle is complete

## Project Notes:

1. Build using Gatsby and React Hooks.

2. Deployed for CI/CD with AWS Amplify - https://master.d3lel14a7tw8el.amplifyapp.com/

3. Some random pictures are hard to make out so there is a `show numbers` button below the image that will display the order numbers on the boxes.

4. Puzzle is shuffled up to 25 times. To make the game easier harder or easier change the constant `SHUFFLE_BY` in `index.js`
