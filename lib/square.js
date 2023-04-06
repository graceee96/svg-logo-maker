const Shape = require('./shape.js');

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" ${this.setColor(fillColor)} />`
    }
}

module.exports = Square;