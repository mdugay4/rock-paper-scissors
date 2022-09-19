const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start game function
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // game functions
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = 'none';
            });
        });

        // computer options
        const computerOption = {
            0: 'Rock',
            1: 'Paper',
            2: 'Scissors',
        };

        options.forEach((option) => {
            option.addEventListener('click', function () {
                // reset img to rock
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;

                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];

                setTimeout(() => {
                    // here is where we compare hands
                    compareHands(this.textContent, computerChoice);

                    // update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                    // update scores
                    updateScore();
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner');

        // check for tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
        }

        // check for rock
        if (playerChoice === 'Rock') {
            if (computerChoice === 'Scissors') {
                winner.textContent = 'Player wins';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                return;
            }
        }

        // check for paper
        if (playerChoice === 'Paper') {
            if (computerChoice === 'Rock') {
                winner.textContent = 'Player wins';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                return;
            }
        }

        // check for scissors
        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Paper') {
                winner.textContent = 'Player wins';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                return;
            }
        }
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    // call start game listener
    startGame();
    playMatch();
};

// start the game function
game();
