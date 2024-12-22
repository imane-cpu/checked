const input = document.getElementById('input');
const ok = document.getElementById('button2');
const cancel = document.getElementById('button');
const P = document.getElementById('p');

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

cancel.onclick = function() {
    P.textContent = "Game canceled. Goodbye!";
}

ok.onclick = function() {
    let guess = input.value;
    guess = Number(guess);

    if (isNaN(guess)) {
        P.textContent = "Please enter a valid number.";
        return;
    }

    attempts++;

    if (guess === answer) {
        P.textContent = `Congratulations! You guessed the right number (${answer}) in ${attempts} attempts.`;
    } else if (guess > answer) {
        P.textContent = ` (${attempts} attempts )  Too high! Try again.`;
    } else {
        P.textContent = ` (${attempts} attempts) Too low! Try again."`;
    }
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ok.click();
    }
});