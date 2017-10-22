//ラッパーオブジェクト stringコンストラクタ
var msgObj = new String("Everything is practice.");
//stringsオブジェクトのメソッド
msgObj.length;
msgObj.charAt(3);
msgObj.indexOf('i');
var test = "Everything is practice.";

//プリミティブはプロパティを持たないが、一時的にラッパーオブジェクトに自動変換するためtestでもlengthが使える。
