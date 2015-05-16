var isVerified = false;
var idScore = 17;
var name = "Nabucodonosor";
var bonus = null;
var cheat;

console.log(typeof isVerified);
console.log(typeof idScore);
console.log(typeof name);
console.log(typeof bonus);
console.log(typeof cheat);

console.log(2 + "3");
console.log(2 + parseInt("3"));
console.log(4/5);
console.log(5/4);
console.log(2 === 2.0


var age = 0;
var gender = "";
var isMom = false;
var legalAgeFemale = (age >=18 && gender == "female");

gender = prompt("Gender M or F");
age = prompt("Enter your age");

if(gender == "F"){
    isMom = prompt("Are you mom? true/false");
    isMom = boolean(isMom);
}

if(isMom){
    alert("Entra gratis por ser 10 de mayo :D");
}

if(legalAgeFemale){
    alert("Entra gratis");
} else {
    alert("Pagale chavo");
}