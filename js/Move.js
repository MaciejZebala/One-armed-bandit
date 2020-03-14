class Move {
    constructor() {
        this.draw = new Draw();
        this.drumWrap = [...document.querySelectorAll('.game__drum-wrap')]
        this.fieldHeight = document.querySelector('.game__field').offsetHeight;
        this.fieldCounter = this.draw.options.length - 1;
        // this.gameFields = [...document.querySelector('.game__field')]
    }

    moveDrumsToTheTop() {
        this.drumWrap.forEach(drum => {
            drum.style.transitionDuration = '0s';
            drum.style.top = `-${this.fieldCounter * this.fieldHeight}px`;
        })
    }

    rollDrums() {
        this.drumWrap.forEach(drum => {
            drum.style.transitionDuration = '0s';
            drum.style.top = '0px';
        })
        setTimeout(function () {
            let i = 0
            const slide = setInterval(function () {
                if (i < this.drumWrap.length) {
                    this.drumWrap[i].style.transitionDuration = '1s'
                    this.drumWrap[i].style.top = `-${(this.fieldCounter) * this.fieldHeight}px`
                    i++
                } else {
                    clearInterval(slide)
                    return;
                }
            }.bind(this), 150)
        }.bind(this), 1)
    }

    addColor() {
        // this.drumWrap.forEach(drum => {
        //     drum.childNodes[drum.childNodes.length - 1].style.color = 'yellow'
        // })
        let i = 0;
        const slide = setInterval(function () {
            if (i < this.drumWrap.length) {
                this.drumWrap[i].childNodes[this.drumWrap[i].childNodes.length - 1].style.color = 'yellow'
                this.drumWrap[i].childNodes[this.drumWrap[i].childNodes.length - 1].style.backgroundColor = 'black'
                i++
            } else {
                clearInterval(slide)
                return;
            }
        }.bind(this), 100)
    }
}