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

// difficulty selector
let difficulty = [
  "Story Mode",
  "Jedi Knight",
  "Jedi Master",
  "Jedi Grand Master"
];

let index = difficulty.indexOf(difficultySelector.innerHTML) + 1;

function changeDifficultyUp() {
  if (index != 4) {
    difficultySelector.innerHTML = difficulty[index++];
  } else {
    difficultySelector.innerHTML = difficulty[0];
    index = 1;
  }
}

function changeDifficultyDown() {
  if (index != 1) {
    difficultySelector.innerHTML = difficulty[index--];
  } else {
    difficultySelector.innerHTML = difficulty[3];
    index = 4;
  }
}

difficultyArrowRight.addEventListener("click", function() {
  changeDifficultyUp();
});

difficultyArrowLeft.addEventListener("click", function() {
  changeDifficultyDown();
});
