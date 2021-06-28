
class Clock {
    constructor({ template }) {
        this.template = template
    }
    render() {
        let date = new Date()
        let hours = date.getHours()
        if (hours < 10) hours = '0' + hours
        let mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins
        let secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs
        let ms = date.getMilliseconds()

        if (ms < 10) {
            ms = "00" + ms
        } else if (ms < 100) {
            ms = '0' + ms
        }

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
            .replace('ms', ms)
        console.log(output)
    }
    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}


let clock = new Clock({ template: 'h:m:s:ms' })
clock.start()
clock.stop()
