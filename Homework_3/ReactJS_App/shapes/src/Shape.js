class Shape {
    constructor() {
        this.name = "";
    }

    calculateArea() {
        return 0.00;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = "Circle";
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * (this.radius * this.radius);
    }
}

class Triangle extends Shape {
    constructor(height_to_base, base) {
        super();
        this.name = "Triangle";
        this.height_to_base = height_to_base;
        this.base = base;
    }

    calculateArea() {
        return (this.height_to_base * this.base) / 2;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.name = "Rectangle";
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        return (this.height * this.width);
    }
}

export { Rectangle, Circle, Triangle };