class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(100);
        this.draw = new Draw();
        this.move = new Move();

        document.querySelector('.btn').addEventListener('click', this.startGame.bind(this))

        this.spanWallet = document.querySelector('.wallet');
        this.spanRounds = document.querySelector('.score__number--rounds')
        this.spanWins = document.querySelector('.score__number--win')
        this.spanLosses = document.querySelector('.score__number--loss')
        this.spanResult = document.querySelector('.score__result')
        this.drums = [...document.querySelectorAll('.game__drum')]
        this.drumWrap = [...document.querySelectorAll('.game__drum-wrap')]
        this.fields = [...document.querySelectorAll('.game__field')]
        this.inputBid = document.querySelector('.play__bid')
    }
    render() {

    }
    startGame() {

    }
}