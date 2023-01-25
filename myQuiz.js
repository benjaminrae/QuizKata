let points = 0;

const userName = prompt("Hello! Welcome to my quiz, what's your name?");

const questionOneAnswer = "dog";
const questionOneQuestion =
  "Which animal has 4 legs and a tail and makes a barking noise?";

const questionTwoAnswer = "cat";
const questionTwoQuestion =
  "Which animal has 4 legs and a tail and makes a meowing sound?";

const questionThreeAnswer = "bird";
const questionThreeQuestion =
  "Which animal has feathers and wings and can fly?";

const questionFourAnswer = "fish";
const questionFourQuestion = "Which animal has gills and scales and can swim?";

const questionFiveAnswer = "chicken";
const questionFiveQuestion = "Which bird can't fly and gives us eggs?";

if (prompt(questionOneQuestion) === questionOneAnswer) {
  points++;
}

if (prompt(questionTwoQuestion) === questionTwoAnswer) {
  points++;
}

if (prompt(questionThreeQuestion) === questionThreeAnswer) {
  points++;
}

if (prompt(questionFourQuestion) === questionFourAnswer) {
  points++;
}

if (prompt(questionFiveQuestion) === questionFiveAnswer) {
  points++;
}

alert("Well done " + userName + "! You scored " + points + " points!");
