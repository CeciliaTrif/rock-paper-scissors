function playRound(playerChoice, computerChoice) {
    const winLookup = {
        'Rock': 'Scissors',
        'Paper': 'Rock',
        'Scissors': 'Paper'
    };

    if (playerChoice === computerChoice) {
        return {
            result: 'tie',
            message: 'Tie!'
        };
    }

    if (winLookup[playerChoice] === computerChoice) {
        return {
            result: 'win',
            message: `You win! ${playerChoice} beats ${computerChoice}.`
        };
    } else {
        return {
            result: 'lose',
            message: `You lose! ${computerChoice} beats ${playerChoice}.`
        };
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

document.getElementById('rock').addEventListener('click', function() {
    const result = playRound('Rock', getComputerChoice());
    displayResult(result);
});

document.getElementById('paper').addEventListener('click', function() {
    const result = playRound('Paper', getComputerChoice());
    displayResult(result);
});

document.getElementById('scissors').addEventListener('click', function() {
    const result = playRound('Scissors', getComputerChoice());
    displayResult(result);
});

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result.message;
}

