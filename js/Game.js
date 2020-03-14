class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        this.draw = new Draw();
        // this.move = new Move();

        document.querySelector('.btn').addEventListener('click', this.startGame.bind(this))

        this.spanWallet = document.querySelector('.wallet__value');
        this.spanRounds = document.querySelector('.score__number--rounds')
        this.spanWins = document.querySelector('.score__number--win')
        this.spanLosses = document.querySelector('.score__number--loss')
        this.spanResult = document.querySelector('.score__result')
        this.drums = [...document.querySelectorAll('.game__drum')]
        this.drumWrap = [...document.querySelectorAll('.game__drum-wrap')]
        this.fields = [...document.querySelectorAll('.game__field')]
        this.inputBid = document.querySelector('.play__bid')

        this.render();
    }
    render(drawResult = this.draw.drawInitialFields(), money = this.wallet.getWalletValue(), stats = [0, 0, 0], result = '', bid = 0, wonMoney = 0) {



        this.drums.forEach((drum, index) => {
            const drumWrap = drum.querySelector('.game__drum-wrap')
            drumWrap.innerHTML = '';
            for (let i = 0; i < this.draw.options.length; i++) {
                const newField = document.createElement('div')
                newField.classList.add('game__field');
                newField.classList.add(`game__field-${drawResult[index][i]}`)
                console.log(drawResult[index][i])
                newField.innerHTML = `<i class="fas fa-${drawResult[index][i]}"></i>`
                drumWrap.appendChild(newField)
            }
        })

        if (this.stats.gameResult.length == 0) {
            this.spanResult.textContent = 'Wystartuj grę'
            this.spanWallet.textContent = money
            this.spanWins.textContent = stats[0]
            this.spanLosses.textContent = stats[1]
            this.spanRounds.textContent = stats[2]
        } else if (this.stats.gameResult.length > 0) {
            setTimeout(function () {
                if (result) {
                    result = `Wygrałeś ${wonMoney}`
                } else if (!result && result != '') {
                    result = `Przegrałeś ${wonMoney}`
                }
                this.spanWallet.textContent = money
                this.spanWins.textContent = stats[0]
                this.spanLosses.textContent = stats[1]
                this.spanRounds.textContent = stats[2]
            }.bind(this), 1600)
        }

    }
    startGame() {

    }
}