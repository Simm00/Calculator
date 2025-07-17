let display = document.getElementById('display');


function appendToDisplay(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}


function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function setLightMode() {
  document.body.classList.remove('dark');
  highlightActiveMode('light');
}


function setDarkMode() {
  document.body.classList.add('dark');
  highlightActiveMode('dark');
}


function highlightActiveMode(mode) {
  const buttons = document.querySelectorAll(".theme-toggle button");
  buttons.forEach(btn => btn.classList.remove("active"));

  if (mode === 'light') {
    buttons[0].classList.add("active");
  } else {
    buttons[1].classList.add("active"); 
  }
}


document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault(); // Prevent form submission
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});


