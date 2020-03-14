class Move {
    constructor() {
        this.draw = new Draw();
        this.drumWrap = [...document.querySelectorAll('.game__drum-wrap')]
        this.fieldHeight = document.querySelector('.game__field').offsetHeight;
        this.fieldCounter = this.draw.options.length - 1;
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
}