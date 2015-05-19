//N numeros primos
var number = parseInt(prompt("Introduce un número"));
var counter = 0;
var numeroVerificable = 2;
var numeroVerificador = 2;
var primeNumber = [];

while(counter < number){
    if(numeroVerificable % numeroVerificador == 0){
        if(numeroVerificable == numeroVerificador){
            primeNumber.push(numeroVerificable);
            numeroVerificable ++;
            numeroVerificador = 2;
            counter++
        } else {
            numeroVerificable ++;
            numeroVerificador = 2;
        }
    } else {
        numeroVerificador ++;
    }
}

alert(primeNumber);





//Recorrido de arreglos







//Manejo de arreglos

var firstNames = ['juan', 'ramiro'];
var lastNames = ['ramirez', 'garcia'];

firstNames.shift();
console.log(firstNames);

firstNames.unshift('zaira');
console.log(firstNames);

firstNames.sort();
console.log(firstNames);

firstNames.concat(lastNames);
console.log(firstNames);

firstNames.join(", ");
console.log(firstNames);






//Funciones
var firstNames = ['juan', 'ramiro'];
var lastNames = ['ramirez', 'garcia'];
var array01 = [0,1,2,3,4];
var age = [10,15,21,10,18,45,54];

var fullNames = firstNames.map(function(firstName){ 
                                            return firstName + " Perez"
                                        });

console.log(fullNames);

var sumatoria = array01.reduce(function(prevValue, currValue, index, array){
                                    return prevValue + currValue;
                               });

console.log(sumatoria);

var grownUps = age.filter(function(age){
    return age >= 18;
});

console.log(grownUps);






//Funciones con mayor complejidad
var people = [{name: "Casimira", age: 21, pets: ['rocky', 'rambo']},
              {name: "Pedro", age: 15, pets: ['mj', 'coco']},
              {name: "Juan", age: 67, pets: []}];

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length == 0;
});
console.log(peopleNoPets);

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length == 0;
}).map(function(guy){
    return guy.name;
});
console.log(peopleNoPets);

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length > 0;
}).map(function(guy){
    return guy.age;
}).reduce(function(prevValue, currValue, index, array){
    return prevValue + currValue;
});
console.log(peopleNoPets);




var people = [{name: "Casimira", age: 21, pets: ['rocky', 'rambo']},
              {name: "Pedro", age: 15, pets: ['mj', 'coco']},
              {name: "Juan", age: 67, pets: []}];

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length == 0;
});
console.log(peopleNoPets);

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length == 0;
}).map(function(guy){
    return guy.name;
});
console.log(peopleNoPets);

var peopleNoPets = people.filter(function(guy){
    return guy.pets.length > 0;
}).map(function(guy){
    return guy.age;
}).reduce(function(prevValue, currValue, index, array){
    return prevValue + currValue;
});
console.log(peopleNoPets);




function getPeopleNoPets(people){
    return people.filter(function(guy){
        return guy.pets.length == 0;
    })
};

console.log(getPeopleNoPets(people));

function getSumAgesPeoplePets(people){
    return getPeopleNoPets.map(function(guy){
        return guy.age;
    }).reduce(function(prev, curr){
        return prev + curr;
    });
}

console.log(getSumAgesPeoplePets(people));