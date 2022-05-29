let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9) + 1
}

const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
}

const compareGuesses = (human, computer, target) => {
    return getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target);
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


