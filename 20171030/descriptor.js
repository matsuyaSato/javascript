//プロパティディスクリプタを取得する
var test1 = {name: "test1"};
Object.getOwnPropertyDescriptor(test1, "name");

//プロパティを設定する
var obj = {};
Object.defineProperty(obj, "name",{
  value: "Tom",
  writable: true,
  enumerable: false,
  configurable: true
});

Object.getOwnPropertyDescriptor(obj,"name");

//object create
var group = {
  groupName: "Tennis circle",
  sayGroupName: function(){console.log("belong to " + this.groupName);}
};

var person = Object.create(group,{
  name:{
    value: "Tom",
    writable: true,
    enumerable: true,
    condigurable: true
  },
  age: {
    value: 18,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  sayName:{
    value: function(){console.log("Im " + this.name)},
    writable: true,
    enumerable: false,
    configurable: true,
  }
});
console.log(person);
console.log(person.groupName);
person.sayGroupName();
person.sayName();
