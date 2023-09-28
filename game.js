let rounds = 0;
let wins = 0;
let losses = 0;
let ties = 0;

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
    updateGameState(result);  
});

document.getElementById('paper').addEventListener('click', function() {
    const result = playRound('Paper', getComputerChoice());
    displayResult(result);
    updateGameState(result);  
});

document.getElementById('scissors').addEventListener('click', function() {
    const result = playRound('Scissors', getComputerChoice());
    displayResult(result);
    updateGameState(result);  
});

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = result.message;
    }
}


function updateGameState(result) {
    rounds++;
    if(result.result === 'win') {
        wins++;
    } else if (result.result === 'lose') {  
        losses++;
    } else {                                
        ties++;
    }

    if (wins >= 3) {
        alert('You win the game!');
        resetGameState();
        return;
    }

    if (rounds >= 5) {
        let finalMessage = `Game Over! Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
        alert(finalMessage);
        resetGameState();
    }
}

function resetGameState() {
    rounds= 0;
    wins = 0;
    losses = 0;
    ties = 0;
}

