
function F(){};
F.prototype.prop = "prototype value";
var obj = new F();
console.log(obj.prop);

obj.prop = "instance value";
console.log(obj.prop);


//継承
//コンストラクタ
function Circle(center,radius){
  this.center = center;
  this.radius = radius;
}

//プロトタイプオブジェクトに関数を追加
Circle.prototype.area = function(){
  return Math.PI*this.radius*this.radius;
}

var c1 = new Circle({x:3, y:2}, 2.0);
console.log('面積= ' + c1.area());
