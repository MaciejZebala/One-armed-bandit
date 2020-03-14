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
}