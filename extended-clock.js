class ExtendedClock extends Clock {
    constructor(options) {
        super(options)
        let { precision = 1 } = options
        this.precision = precision
    }
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
let exclock = new ExtendedClock({ template: 'h:m:s:ms' })
// exclock.start()
