var a = [1,2,3,4,5];
var sum = 0;
a.forEach(function(value){ sum += value;});
console.log(sum);

var persons = [
  {name: "TOM" , age: 17},
  {name: "Huck", age: 18},
  {name: "beck", age: 14},
];
var names = persons.map(person => "My name is "  + person.name);
var ages = persons.map(person => person.age);
console.log(names);
console.log(ages);
