var objA = {
  name: "test1",
  sayHello: function(){console.log("Hello! " + this.name);}
};
var objB = {
  name: "Huck",
};
objB.__proto__ = objA;
var objC = {};
objC.__proto__= objB;
objC.sayHello();
