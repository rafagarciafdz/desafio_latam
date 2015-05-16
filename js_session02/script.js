Piedra Papel o Tijera
var user1;
var user2;
var finDelJuego = false;
var user1String = "";
var user2String = "";

while(finDelJuego != true){
    user1 = parseInt(prompt("Elige:\n 1.- piedra \n 2.- papel \n 3.- tijera"));
    user2 = Math.floor((Math.random() * 3) + 1);

    if(user1 == user2 ){
        alert("Empate");
    } else if((user1 == 1 && user2 == 2) || (user1 == 2 && user2 == 3) || (user1 == 3 && user2 == 1)){
        switch (user1) {
            case 1:
                user1String = "Piedra";
                break;
            case 2:
                user1String = "Papel";
                break;
            case 3:
                user1String = "Tijera";
                break;
        }
        
        switch (user2) {
            case 1:
                user2String = "Piedra";
                break;
            case 2:
                user2String = "Papel";
                break;
            case 3:
                user2String = "Tijera";
                break;
        }
        alert("Gana CPU \n Elegiste " + user1String + "\n CPU eligió " + user2String);
        finDelJuego = true;
    } else {
        switch (user1) {
            case 1:
                user1String = "Piedra";
                break;
            case 2:
                user1String = "Papel";
                break;
            case 3:
                user1String = "Tijera";
                break;
        }
        
        switch (user2) {
            case 1:
                user2String = "Piedra";
                break;
            case 2:
                user2String = "Papel";
                break;
            case 3:
                user2String = "Tijera";
                break;
        } 
        alert("Ganaste !!! \n Elegiste " + user1String + "\n CPU eligió " + user2String);
        finDelJuego = true;
    }
}






Log In
var password = "password"
var intento = "";
var intentos = 10;
var isLoged = false;
for(var i = 1; i <= 10; i++, intentos--){
    intento = prompt("Introduce tu password\nTienes " + intentos + " intentos");
    if(intento == password){
        isLoged = true;
        alert("Loged");
        break;
    }
}

if(!isLoged){
    alert("FATAL ERROR");
}






Sumatorias
var upTo = parseInt(prompt("Hasta que número quieres sumar"));
var sumAscendente = 0;
var sumDescendente = 0;

for(var i = 1; i <= upTo; i++){
    sumAscendente = sumAscendente + i;
}

for(var j = upTo; j >= 1; j--){
    sumDescendente = sumDescendente + j;
}

alert("Total ascendente= " + sumAscendente);
alert("Total descendente= " + sumDescendente);






Detector de números primos
var number = parseInt(prompt("Introduce un número"));
var esPrimo = true;

if(number == 1){
    alert("El número " + number + " NO es PRIMO");
    esPrimo = false;
} else{
      for(var i = 2; i < number; i++){
          if(number % i == 0){
              esPrimo = false;
              alert("El número " + number + " NO es PRIMO");
              break;
          }
      }
}

if(esPrimo){
    alert("El número " + number + " es PRIMO");
}






Generar los n numeros primos






Manejo de arreglos

var userList = ["juan", "pedro", 10, 10.5];
var emptyList = [];

var userListSize = userList.length;
var emptyListSize = emptyList.length;

alert(userList + "\nTamaño = "+ userListSize);
alert(emptyList + "\nTamaño = "+ emptyListSize);

for(var i = 0; i < userList.length; i++){
    console.log(userList[i]);
}


var array = [2,3,"Hola",variable,false];
aux = array[1];
array[1] = array[2];
array[2] = aux;






var userList = ["juan", "pedro"];
var numberList = [1,2,3,4];

userList.push("Juanito");
console.log(userList);
userList.pop();
console.log(userList);

numberList.unshift(10);
console.log(numberList);
numberList.shift();
console.log(numberList);