//Ejercicios de Arnoldo
function getFreeAdmissioners(people){
    return people.filter(function(person){
        return hasFreeAdmission(person);
    });
}

function hasFreeAdmission(person){
    return freeAdmissionRules.every(function(rule){
        return rule(person);
    });
}

var freeAdmissionRules = [
    function isAWoman(person){
        return person.gender == 'femenine';
    },
    function hasLegalAge(person){
        return person.age >= 18;
    }
];

function prettyPrintPerson(person){
    for(var propertyName in person){
        console.log(person[propertyName]);
    }
    console.log("");
}

function prettyPrintPeople(people){
    people.forEach(function(person){
        prettyPrintPerson(person);
    });
}

var people = [
    {name: 'Armando', age: 21, gender: 'masculine'},
    {name: 'Juana', age: 21, gender: 'femenine'},
    {name: 'Maricarmen', age: 32, gender: 'femenine'},
    {name: 'Roberto', age: 54, gender: 'masculine'}
    ];

var freebies = getFreeAdmissioners(people);
prettyPrintPeople(freebies);






//Ejercicios
function areEqual(val1, val2){
    return val1 == val2;
}

console.log(areEqual(1,1));






//Ejercicios
var firstName = "Adela";
var age = 65;
var person = {name: "Pedro", age: "60"}; 
var myArr = [1,2];

var myFunc = function(firstName){
    firstName = "Juan";
}

var agePlusOne = function(person){
    person.age = person.age + 1;
}

var addAnElement = function(myArr){
    myArr.push(10);
}

console.log(firstName);
myFunc(firstName);
console.log(firstName);
agePlusOne(person);
console.log(person.age);
addAnElement(myArr);
console.log(myArr);






//Ejercicios
function helloWorld(outPutter){
    outPutter("Hola Mundo");
}

helloWorld(alert);

function consoleOutput(myString){
    console.log(myString);
}

helloWorld(consoleOutput);






//Ejercicios
function calculateTotal(filter){
    return function(filter){
        (100.00 + filter());
    }
}

function discountPromo(){
    return total - 20;
}

function shipping(){
    
}

shipping(discount(calculateTotal()));






//Ejercicios
function sum10{
    var acum = 0;
    return function(){
        acum = acum + 10;
        return acum;
    }
}

var plus10 = sum10();
console.log(plus10());
console.log(plus10());
console.log(plus10());
console.log(plus10());






//Piedra papel o tijeras con funciones
function isTied(player1, player2){
    return player1 == player2;
}

function rockWin(player1, player2){
    var array = [player1, player2];
    return arrayIncludes(array, "rock") && arrayIncludes(array, "scissors");
}

function paperWIn(player1, player2){
    var array = [player1, player2];
    return arrayIncludes(array, "paper") && arrayIncludes(array, "rock");
}

function scissorsWin(player1, player2){
    var array = [player1, player2];
    return arrayIncludes(array, "scissors") && arrayIncludes(array, "paper");
}

function arrayIncludes(array, element){
    var results = array.filter(function(i){
        return i == element;
    });
    
    return results.length > 0;
}


console.log(rockWin("rock", "scissors"));
console.log(paperWIn("rock", "scissors"));
console.log(scissorsWin("rock", "scissors"));