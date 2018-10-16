var myObj =
[{'nam':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'nam':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'nam':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'nam':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'nam':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'nam':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var occupationArray = [];
myObj.forEach(function(myObj){
	if(myObj.occupation=="Programmer")
	occupationArray.push(myObj);
});

console.log(occupationArray);

var byAge = myObj.slice(0);
byAge.sort(function(a,b) {
	return b.age-a.age;
});
console.log('by age:');
console.log(byAge);



console.log(result);

var nameArray = [];

myObj.forEach(function(myObj){
	nameArray.push(myObj.name);
});

console.log(nameArray);
