// selectors

//difficulty selector
const difficultyArrowLeft = document
  .getElementsByClassName("single-setting")[0]
  .getElementsByClassName("arrow-left")[0];
const difficultyArrowRight = document
  .getElementsByClassName("single-setting")[0]
  .getElementsByClassName("arrow-right")[0];
const difficultySelector = document
  .getElementsByClassName("single-setting")[0]
  .getElementsByClassName("value-text")[0];

const toggleOff = document.querySelector(".toggle-off");
const toggleOn = document.querySelector(".toggle-on");

toggleOff.addEventListener("click", function() {
  toggleOff.classList.toggle("toggle-off");
  toggleOff.classList.toggle("toggle-on");
});

toggleOn.addEventListener("click", function() {
  toggleOn.classList.toggle("toggle-off");
  toggleOn.classList.toggle("toggle-on");
});

// DIFFICULTY SELECTOR
// array for each difficulty
let difficulty = [
  "Story Mode",
  "Jedi Knight",
  "Jedi Master",
  "Jedi Grand Master"
];

// change difficulty up
function changeDifficultyUp() {
  if (difficulty.indexOf(difficultySelector.innerHTML) != 3) {
    difficultySelector.innerHTML =
      difficulty[difficulty.indexOf(difficultySelector.innerHTML) + 1];
  } else {
    difficultySelector.innerHTML = difficulty[0];
  }
}

// change difficulty down
function changeDifficultyDown() {
  if (difficulty.indexOf(difficultySelector.innerHTML) != 0) {
    difficultySelector.innerHTML =
      difficulty[difficulty.indexOf(difficultySelector.innerHTML) - 1];
  } else {
    difficultySelector.innerHTML = difficulty[3];
  }
}

difficultyArrowRight.addEventListener("click", function() {
  changeDifficultyUp();
});

window.addEventListener("keydown", function(e) {
  if (e.key == "ArrowRight") {
    changeDifficultyUp();
  }
});

difficultyArrowLeft.addEventListener("click", function() {
  changeDifficultyDown();
});

window.addEventListener("keydown", function(e) {
  if (e.key == "ArrowLeft") {
    changeDifficultyDown();
  }
});
