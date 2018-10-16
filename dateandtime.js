var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day]);
var y = today.getFullYear();
var m = today.getMonth()+1;
var d = today.getDate();
if(d<10 && m<10){
	console.log("0"+d+"/"+"0"+m+"/"+y);
}
else if(d<10 && m>=10){
	console.log("0"+d+"/"+m+"/"+y);	
}
else if(d>=10 && m<10){
	console.log(+d+"/"+"0"+m+"/"+y);	
}
else{
	console.log(+d+"/"+m+"/"+y);
}
