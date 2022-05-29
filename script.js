let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9) + 1
}

const compareGuesses = (human, computer, target) => {
    return Math.abs(human - target) < Math.abs(computer - target);
}

const updateScore = winner => {
    if (winner === "human") {
        ++humanScore;
    } else {
        ++computerScore;
    }
}

const advanceRound = () => {
    ++currentRoundNumber;
}

