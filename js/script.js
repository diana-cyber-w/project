class AudioController {
    constructor() {
        this.flipSound = new Audio('Assets__shast/Audio/flip.wav');
        this.matchSound = new Audio('Assets__shast/Audio/line_open (mp3cut.net).mp3');
        this.gamestartSound = new Audio('Assets__shast/Audio/00171.mp3');
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    gamestart() {
        this.gamestartSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        this.audioController.gamestart();
        setTimeout(() => {
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
    }
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countdown);
        smoke.alert("Конец игры!!! Попробуйте еще раз");
    }
    victory() {
        clearInterval(this.countdown);
        smoke.alert("Победа!!!");
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            card.classList.add('visible');

            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card01, card02) {
        this.matchedCards.push(card01);
        this.matchedCards.push(card02);
        card01.classList.add('matched');
        card02.classList.add('matched');
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMismatch(card01, card02) {
        this.busy = true;
        setTimeout(() => {
            card01.classList.remove('visible');
            card02.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    shuffleCards(cardsArray) {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('start'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(60, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}