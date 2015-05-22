var person = {
    fullName: "Juan Perez",
    age: 55,
    sayHi: function(){
        alert("Hi!");
    },
    introduceYourself: function(){
        alert("Hi! I'm " + this.fullName + " and I'm " + this.age + " years old");
    }
}

//person.sayHi();
person.introduceYourself();
___________________________________________________________________

var Person = function (params){
    this.fullName = params.fullName;
    this.age = params.age;
    this.sayHi = function(){
        alert("Hi!");
    }
}

//var person1 = new Person ({fullName:"Juan Ramirez", age:15});
//console.log (person1);

//var person2 = new Person ({fullName:"Roberto Martinez",age:21});
//console.log (person2);

var people = [
    new Person ({fullName:"Juan Ramirez", age:15}),
    new Person ({fullName:"Roberto Martinez",age:21})
]; 

people.forEach(function(person){
    console.log(person);
});
for (i=0; i<people.length; i++){
    console.log(people[i]);
};

for (i in people){
console.log (people[i]);
};
__________________________________________________________________-

Definiendo objetos:
__________________________________________
var Person = function (params){
    //public interface
    this.fullName = params.fullName;
    this.age = params.age;
}

Person.prototype.sayHi = function(){
    alert("hi!");
   }

//var person1 = new Person ({fullName:"Juan Ramirez", age:15});
//console.log (person1);

//var person2 = new Person ({fullName:"Roberto Martinez",age:21});
//console.log (person2);

var people = [
    new Person ({fullName:"Juan Ramirez", age:15}),
    new Person ({fullName:"Roberto Martinez",age:21})
]; 

people[0].sayHi();
__________________________________________________
var Monster;

Monster = (function() {
  function Monster(args) {
    this.name = args.name;
  }

  Monster.prototype.sayHi = function() {};

  return Monster;

})();

console.log(Monster.prototype);
_____________________________________________________