//継承
var person1 = {name: "Tom", age: 17};
var person2 = Object.create(person1);
person2.name = "Huck";
for(var p in person2) console.log(p);


var a = [0,2,4,6,8];
a.name = "evens";
for(var i in a )console.log(i);
