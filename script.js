const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");

// Reset
resetButtonE1.addEventListener("click", function() {
    counterValueE1.textContent = 0;
});

// Decrease
decreaseButtonE1.addEventListener("click", function() {
    const currentValueE1 = counterValueE1.textContent;
    const currentValueAsNumber = +currentValueE1;

    let newValue = currentValueAsNumber - 1;

    if (newValue < 0) {
        newValue = 0;
    }

    counterValueE1.textContent = newValue;
});

// Increase
increaseButtonE1.addEventListener("click", function() {
    const currentValueE1 = counterValueE1.textContent;
    const currentValueAsNumber = +currentValueE1;

    const newValue = currentValueAsNumber + 1;

    counterValueE1.textContent = newValue;
});

// Keyboard
document.addEventListener("keyup", function() {
    const currentValueE1 = counterValueE1.textContent;
    const currentValueAsNumber = +currentValueE1;

    const newValue = currentValueAsNumber + 1;

    counterValueE1.textContent = newValue;
}); js