const Shape = require('./shape.js');

class Circle extends Shape {
    render() {
        // const shape = new Shape();
        // console.log(shape);
        return `<circle cx="150" cy="100" r="80" ${this.color} />`;
    }
}

module.exports = Circle;