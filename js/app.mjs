// ------------------------------------------------1-masala-------------------------------------------------------//
//function declaration
function showAgeD(Age) {
  console.log(`Sizning yoshingiz, ${Age}`);
}

showAgeD(34);

//function expretion
const showAgeE = function (Age) {
  console.log(`Sizning yoshingiz, ${Age}`);
};

showAgeE(34);

//function allow
const showAgeA = (Age) => {
  console.log(`Sizning yoshingiz, ${Age}`);
};

showAgeA(34);

// ------------------------------------------------2-masala-------------------------------------------------------//
//function declaration
function addNumbersD(x, y) {
  console.log(x + y);
}

addNumbersD(3, 7);

//function expretion
const addNumbersE = function (x, y) {
  console.log(x + y);
};

addNumbersE(3, 7);

//function allow
const addNumbersA = (x, y) => {
  console.log(x + y);
};

addNumbersA(3, 7);

// ------------------------------------------------3-masala-------------------------------------------------------//
//function declaration
function greetD(name) {
  console.log(`Salom, ${name}`);
}

greetD(`Ali`);

//function expretion
const greetE = function (name) {
  console.log(`Salom, ${name}`);
};

greetE(`Ali`);

//function expretion
const greetA = (name) => {
  console.log(`Salom, ${name}`);
};

greetA(`Ali`);

// ------------------------------------------------4-masala-------------------------------------------------------//
//function declaration
function fullNameD(firstName, lastName) {
  console.log(`${firstName}, ${lastName}`);
}

fullNameD("Ali", "Valiyev");

//function expretion
const fullNameE = function (firstName, lastName) {
  console.log(`${firstName}, ${lastName}`);
};

fullNameE("Ali", "Valiyev");

//function expretion
const fullNameA = (firstName, lastName) => {
  console.log(`${firstName}, ${lastName}`);
};

fullNameA("Ali", "Valiyev");

// ------------------------------------------------5-masala-------------------------------------------------------//
//function declaration
function rectanglePerimetrD(lenth, width) {
  console.log((lenth + width) * 2);
}

rectanglePerimetrD(5, 3);

//function expretion
const rectanglePerimetrE = function (lenth, width) {
  console.log((lenth + width) * 2);
};

rectanglePerimetrE(5, 3);

//function allow
const rectanglePerimetrA = (lenth, width) => {
  console.log((lenth + width) * 2);
};

rectanglePerimetrA(5, 3);

// ------------------------------------------------6-masala-------------------------------------------------------//
//function declaration
function triangleSidesD(Side1, Side2, Side3) {
  console.log(`Tomon a:${Side1}`, `Tomon b:${Side2}`, `Tomon c:${Side3}`);
}

triangleSidesD(3, 4, 5);

//function expretion
const triangleSidesE = function (Side1, Side2, Side3) {
  console.log(`Tomon a:${Side1}`, `Tomon b:${Side2}`, `Tomon c:${Side3}`);
};

triangleSidesE(3, 4, 5);

//function allow
const triangleSidesA = (Side1, Side2, Side3) => {
  console.log(`Tomon a:${Side1}`, `Tomon b:${Side2}`, `Tomon c:${Side3}`);
};

triangleSidesA(3, 4, 5);

// ------------------------------------------------7-masala-------------------------------------------------------//
//function declaration
function squareNumberD(number) {
  console.log(number * number);
}

squareNumberD(5);

//function expretion
const squareNumberE = function (number) {
  console.log(number * number);
};

squareNumberE(5);

//function allow
const squareNumberA = (number) => {
  console.log(number * number);
};

squareNumberA(5);

// ------------------------------------------------8-masala-------------------------------------------------------//
//function declaration
function animalInfoD(name, age) {
  console.log(`Bu ${name} ${age} yoshda`);
}

animalInfoD("Mushuk", 2);

//function expretion
const animalInfoE = function (name, age) {
  console.log(`Bu ${name} ${age} yoshda`);
};

animalInfoE("Mushuk", 2);

//function allow
const animalInfoA = (name, age) => {
  console.log(`Bu ${name} ${age} yoshda`);
};

animalInfoA("Mushuk", 2);

// ------------------------------------------------9-masala-------------------------------------------------------//
//function declaration
function sayHelloD(say) {
  console.log(`${say}`);
}

sayHelloD("Salom, Dunyo");

//function expretion
const sayHelloE = function (say) {
  console.log(`${say}`);
};

sayHelloE("Salom, Dunyo");

//function allow
const sayHelloA = (say) => {
  console.log(`${say}`);
};

sayHelloA("Salom, Dunyo");

// ------------------------------------------------10-masala-------------------------------------------------------//
//function declaration
function printNamesD(name1, name2, name3, name4, name5) {
  return `${name1}, ${name2}, ${name3}, ${name4}, ${name5}`;
}

console.log("Ali", "Vali", "Gulbahor", "Javohir");
