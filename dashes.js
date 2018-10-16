var num = prompt("please enter a number");
if(num!=null){
	var arr = num.split("");
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]%2 == 0 && arr[i+1]%2 == 0){
			str = str + arr[i]+"-";
		}
		else {
			str = str + arr[i];
		}
	}
	console.log(str);
}