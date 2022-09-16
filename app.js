let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum]
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. User Won.`;
    scoreBoard_div.classList.add('green-glow')
    setTimeout(() => scoreBoard_div.classList.remove('green-glow'),400)
}



function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. User Lost.`;
    scoreBoard_div.classList.add('red-glow')
    setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 400)

}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = ` It's a Draw. ${convertToWord(userChoice)} draws with ${convertToWord(computerChoice)}.`;
    
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, computerChoice);
            break;
        default:
            break;
    }

}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}


main();
