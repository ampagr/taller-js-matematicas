console.group('Square')
const squareSide =5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.log({squareSide, squarePerimeter, squareArea,});

function getSquare (side) {
    return{ perimeter: side * 4,
            area: side * side,};}

console.groupEnd('Square')

console.group('Triangle')
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = ( triangleBase * triangleHeight) / 2;

function getTriangle (side1, side2, base, height){
    return{ perimeter: side1 + side2 + base,
            area:(base * height) / 2,};}

console.log({ triangleSide1, triangleSide2, triangleBase, triangleHeight, trianglePerimeter, triangleArea,});

console.groupEnd('Triangle')