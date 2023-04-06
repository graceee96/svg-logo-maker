const Shape = require('./shape.js');

class Triangle extends Shape {
    render(fillColor) {
        return `<polygon points="150, 18 244, 182 56, 182" ${this.setColor(fillColor)} />`
    }
}

module.exports = Triangle;