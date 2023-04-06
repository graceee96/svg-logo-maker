const Shape = require('./shape.js');

class Circle extends Shape {
    render() {
        const shape = new Shape();
        return `<circle cx="150" cy="100" r="80" ${shape.setColor(fillColor)} />`;
    }
}

module.exports = Circle;