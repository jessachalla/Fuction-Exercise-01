function getAreaOfCircle(radius){
    let area = 3.14 * radius * radius;
    return(area);
}
console.log(getAreaOfCircle(4));

function getCircumferenceOfCircle(radius){
    let circumference = 2 * 3.14 * radius;
    return(circumference);
}
console.log(getCircumferenceOfCircle(4));

function getAreaOfSquare(side){
    let area = side * side;
    return(area);
}
console.log(getAreaOfSquare(4));

function getAreaOfTriangle(base,height){
    let area =  base * height / 2;
    return(area);
}
console.log(getAreaOfTriangle(4,6));
