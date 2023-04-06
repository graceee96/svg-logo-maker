class Shape {
    constructor (fillColor) {
        this.color = fillColor;
    }

    setColor(fillColor) {
        return `fill=${fillColor}`
    }
}

module.exports = Shape