console.group('Square')
const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.log({
    squareSide,
    squarePerimeter,
    squareArea,
});

function getSquare(side) {
    return {
        perimeter: side * 4,
        area: side * side,
    };
}

console.groupEnd('Square')

console.group('Triangle')
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = (triangleBase * triangleHeight) / 2;

console.log({
    triangleSide1,
    triangleSide2,
    triangleBase,
    triangleHeight,
    trianglePerimeter,
    triangleArea,
});

function getTriangle(side1, side2, base, height) {
    return {
        perimeter: side1 + side2 + base,
        area: (base * height) / 2,
    };
}

console.groupEnd('Triangle')

console.group('Circle')

const circleRadius = 3;
const circleDiameter = circleRadius * 2;
const circumference = circleDiameter * Math.PI;
const circleArea = (circleRadius ** 2) * Math.PI;

console.log({
    circleRadius,
    circleDiameter,
    circumference,
    circleArea
})

function getCircle(radius) {
    return {
        circumference: (radius * 2) * Math.PI,
        area: (radius ** 2) * Math.PI,
    }
}

console.groupEnd('Circle')