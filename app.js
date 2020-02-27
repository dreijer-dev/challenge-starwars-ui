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

console.log("test");
