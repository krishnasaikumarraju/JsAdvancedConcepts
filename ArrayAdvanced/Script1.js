var numbers=[];
numbers.push(40)
numbers.push(20)
numbers.push(43)
numbers.push(47)


function f1(x){
	console.log(x)
}
numbers.forEach(f1);

var names=["Linux", "Windows", "Mac Os"]

var str=""; 

names.forEach(function(x,idx,arr){
	str=str+"<li>"+x+"</li>"
	//console.log(idx)
	console.log(arr[idx])
	})
	
	console.log(str)
	document.getElementById("mylist").innerHTML=str;

var dates=[];
dates.push(new Date(2018, 04, 10))
dates.push(new Date(2018, 02, 08))
dates.push(new Date(2018, 06, 18))
dates.push(new Date(2018, 07, 19))

dates.forEach(
		(x)=>{console.log(x.toLocaleString())}

)
