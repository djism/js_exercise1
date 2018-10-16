var str = 'gmail.com';
//var char = 'm';
function count(str){
	 return (str.match(/m/g) || []).length;
}

console.log(count(str));