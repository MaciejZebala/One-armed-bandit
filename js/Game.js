class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        this.draw = new Draw();
        this.move = new Move();

        this.button = document.querySelector('.btn')

        this.button.addEventListener('click', this.startGame.bind(this))

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


        this.move.moveDrumsToTheTop();


        this.drums.forEach((drum, index) => {
            const drumWrap = drum.querySelector('.game__drum-wrap')
            drumWrap.innerHTML = '';
            for (let i = 0; i < this.draw.options.length; i++) {
                const newField = document.createElement('div')
                newField.classList.add('game__field');
                newField.classList.add(`game__field-${drawResult[index][i]}`)
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
                    result = `Wygrałeś ${wonMoney}$`
                    this.spanResult.style.color = 'green'
                    this.drums.forEach(drum => drum.style.border = '3px solid #00ff04')
                } else if (!result && result !== '') {
                    result = `Przegrałeś ${bid}$`
                    this.spanResult.style.color = 'red'
                    this.drums.forEach(drum => drum.style.border = '3px solid #f00')
                }
                this.spanWallet.textContent = money
                this.spanResult.textContent = result
                this.spanWins.textContent = stats[1]
                this.spanLosses.textContent = stats[2]
                this.spanRounds.textContent = stats[0]
            }.bind(this), 1450)
        }

    }
    startGame() {
        if (this.inputBid.value < 1) return alert('Kwota, którą chcesz grać jest za mała!')
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("masz za mało środków lub podana została nieprawidłowa wartość")
        }

        this.drums.forEach(drum => drum.style.border = '1.5px solid #FFE52F')
        this.inputBid.value = '';

        this.button.disabled = true
        this.button.style.cursor = 'auto'
        setTimeout(function () {
            this.button.disabled = false
            this.button.style.cursor = 'pointer'
        }.bind(this), 1450)

        this.draw = new Draw();

        this.wallet.changeWallet(bid, '-');

        const drawResult = this.draw.getDrawResult()

        const result = Result.checkWinner(this.draw.drawEndFields());

        const wonMoney = Result.moneyWinInGame(result, bid);

        this.wallet.changeWallet(wonMoney);

        this.stats.addGameToStatistics(result, bid);

        this.render(drawResult, this.wallet.getWalletValue(), this.stats.showGameStatistics(), result, bid, wonMoney)

        setTimeout(function () {
            if (result) {
                this.move.addColor();
            }
        }.bind(this), 1250)

        this.move.rollDrums();

    }
}