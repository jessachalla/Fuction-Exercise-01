alert("This exercise takes place in the console.")


//Write a function named getAreaOfCircle. 
//It takes a radius parameter. 
//It calculates and returns the area of a circle with that radius.

//function keyword, name of function, (perameter) 
function getAreaOfCircle(radius){
//function body - everything between curly brackets    
    let area = 3.14 * radius * radius;
//return keyword - ceases execution in a function and returns value to the caller    
    return(area);
}
//calling the function - console.log is calling the function and includes an argument
console.log(getAreaOfCircle(4));


//Write a function named getCircumferenceOfCircle. 
//It takes a radius parameter. 
//It calculates and returns the circumference of a circle with that radius.
function getCircumferenceOfCircle(radius){
    let circumference = 2 * 3.14 * radius;
    return(circumference);
}
console.log(getCircumferenceOfCircle(4));

//Write a function named getAreaOfSquare.
//It takes a side parameter. 
//It calculates and returns the area of a square with that side length.
function getAreaOfSquare(side){
    let area = side * side;
    return(area);
}
console.log(getAreaOfSquare(4));

//Write a function named getAreaOfTriangle. 
//It takes two parameters: base and height. 
//It calculates and returns the area of a triangle with that base and height.
function getAreaOfTriangle(base,height){
    let area =  base * height / 2;
    return(area);
}
console.log(getAreaOfTriangle(4,6));
