var a1 = [1, 2, 3, 4, 5];

var a2 = {a:1, b:2, c:3};

//document.write(a1);
//document.write(a2['a']);

//var test1 = function(callback) {
//	var x = 5;
	//var y = 6;
//	callback(x);
//};

function test1(callback) {
	var x = 5;
	callback(x);
};

function test2() {
	return 10;
	};

//test1(function(a) {console.log(a);});
//test1(function (a) {document.write(a);})
test1(function (a) {return a;})

//document.write(test2()); // so return works fine... just weird in callbacks?