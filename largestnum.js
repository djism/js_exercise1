var input = prompt("enter 5 numbers");
//[23,56,12,6,8,76];
var arr = input.split(",");
var max = -Infinity;

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	parseInt(arr[i]);
	if(max<arr[i]){
		max = arr[i];
	}	
}
console.log("maximum number is:"+" "+max);