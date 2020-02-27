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
const difficultyParry = document
  .getElementsByClassName("difficulty-progress-bar")[0]
  .getElementsByClassName("difficulty-progress-bar-fill")[0];
const difficultyIncDamage = document
  .getElementsByClassName("difficulty-progress-bar")[1]
  .getElementsByClassName("difficulty-progress-bar-fill")[0];
const difficultyEnemyAggression = document
  .getElementsByClassName("difficulty-progress-bar")[2]
  .getElementsByClassName("difficulty-progress-bar-fill")[0];

const toggleOff = document.querySelector(".toggle-off");
const toggleOn = document.querySelector(".toggle-on");

// TOGGLE BUTTONS
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
const difficulty = [
  "Story Mode",
  "Jedi Knight",
  "Jedi Master",
  "Jedi Grand Master"
];

// object with all progression bars length (in pixels) - used when changing difficulty
const allDifficulties = {
  storyMode: {
    parryTiming: 165,
    incDamage: 30,
    enemyAggression: 30
  },
  jediKnight: {
    parryTiming: 130,
    incDamage: 50,
    enemyAggression: 70
  },
  jediMaster: {
    parryTiming: 85,
    incDamage: 85,
    enemyAggression: 85
  },
  jediGrandMaster: {
    parryTiming: 30,
    incDamage: 165,
    enemyAggression: 165
  }
};

// change difficulty up
function changeDifficultyUp() {
  if (difficulty.indexOf(difficultySelector.innerHTML) != 3) {
    difficultySelector.innerHTML =
      difficulty[difficulty.indexOf(difficultySelector.innerHTML) + 1];
  } else {
    difficultySelector.innerHTML = difficulty[0];
  }
  difficultyIndicators();
}

// change difficulty down
function changeDifficultyDown() {
  if (difficulty.indexOf(difficultySelector.innerHTML) != 0) {
    difficultySelector.innerHTML =
      difficulty[difficulty.indexOf(difficultySelector.innerHTML) - 1];
  } else {
    difficultySelector.innerHTML = difficulty[3];
  }
  difficultyIndicators();
}

// change the difficulty progress bars depending on which difficulty is selected
//
function difficultyIndicators() {
  const difficultyKeys = Object.keys(allDifficulties)[
    difficulty.indexOf(difficultySelector.innerHTML)
  ];
  difficultyParry.style.width = `${allDifficulties[difficultyKeys].parryTiming}px`;
  difficultyIncDamage.style.width = `${allDifficulties[difficultyKeys].incDamage}px`;
  difficultyEnemyAggression.style.width = `${allDifficulties[difficultyKeys].enemyAggression}px`;
}

// change difficulty right - both click and key
difficultyArrowRight.addEventListener("click", function() {
  changeDifficultyUp();
});

window.addEventListener("keydown", function(e) {
  if (e.key == "ArrowRight") {
    changeDifficultyUp();
  }
});

// change difficulty left - both click and key
difficultyArrowLeft.addEventListener("click", function() {
  changeDifficultyDown();
});

window.addEventListener("keydown", function(e) {
  if (e.key == "ArrowLeft") {
    changeDifficultyDown();
  }
});
