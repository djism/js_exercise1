var input = prompt("enter a string");
var arr = input.split("").sort();
var str = "";
for (var i = 0; i < arr.length; i++) {
	str = str + arr[i];
}
console.log(str);