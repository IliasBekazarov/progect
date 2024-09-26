const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const result = document.getElementById('result');
const playerImg = document.getElementById('player-img');
const computerImg = document.getElementById('computer-img');
const totalGamesElement = document.getElementById('total-games');
const totalWinsElement = document.getElementById('total-wins');

const questionImage = 'img/question.png';

const images = {
    rock: ' img/tash.png',
    paper: 'img/paper.png',
    scissors: 'img/kaychy.png',
    match: 'img/match.png',
    question: 'img/question.png'
};

// Game counters
let totalGames = 0;
let totalWins = 0;

// Set initial images
playerImg.src = images.question;
computerImg.src = images.question;

const gameOptions = ['rock', 'paper', 'scissors', 'match'];

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const playerChoice = this.id;
        const computerChoice = gameOptions[Math.floor(Math.random() * 4)];
        const outcome = getResult(playerChoice, computerChoice);

        // Update message and result
        message.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}.`;
        result.textContent = outcome;

        // Show the selected images for player and computer
        playerImg.src = images[playerChoice];
        computerImg.src = images[computerChoice];

        // Update counters
        totalGames++;
        if (outcome.includes("win")) {
            totalWins++;
        }
        totalGamesElement.textContent = totalGames;
        totalWinsElement.textContent = totalWins;

        // Animate the result fade-in
        result.style.opacity = '0'; // Reset result opacity for fade-in
        setTimeout(() => {
            result.style.opacity = '1'; // Animate result fade-in
        }, 300);
        
        // Update result color
        result.className = ''; // Reset previous classes
        if (outcome.includes("win")) {
            result.classList.add('result-win');
        } else if (outcome.includes("lose")) {
            result.classList.add('result-lose');
        } else {
            result.classList.add('result-draw');
        }
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    } else if (
        (player === 'rock' && (computer === 'scissors' || computer === 'match')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'match')) ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'match' && (computer === 'rock' || computer === 'paper'))
    ) {
        return "You win!";
    } else if (
        (player === 'match' && computer === 'scissors')
    ) {
        return "You lose!";
    } else {
        return "You lose!";
    }
}
