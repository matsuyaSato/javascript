var zip = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
console.log(zip);

function* makeZip(){
  yield["Tom", "131-8634"];
  yield["Huck","556-0002"];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zips.next());

var zip = new Map();
zip.set("Tom", "131-8634");
zip.set("test", "131-8635");
console.log(zip);

console.log(zip.get("Tom"));
zip.delete("Tom");
console.log(zip);

var iter = zip.keys();
for(var v of iter)console.log(v);
