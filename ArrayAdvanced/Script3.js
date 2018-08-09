
var numbers=[]
var result;
var range=0;
function addToList(){
	num=document.forms[0].elements[0].value;
	num=parseInt(num)
	if(isNaN(num)){
		
	}else
		{
		numbers.push(num)
		}
	document.getElementById("mylist").innerText=numbers.toString();
}
function filterList(){
	range=parseInt(document.forms[1].elements[0].value)
	result=numbers.filter(
			function(x,idx,arr){
				if(x>range)
					return true;
				else 
					return false;
			}
	);
	document.getElementById("filteredlist").innerText=result.toString();
}
function analyze(){
	var mapperArray=numbers.map(
			function(x){
				if(x%2==0)
					return "EVEN"
					else
						return "ODD"
			}
			
	)
	document.getElementById("mappedList").innerText=mapperArray.toString();
}

function findTotal(){
	var Total=numbers.reduce(
			function(min,x){
		return sum+x;
	},100
	);
	document.getElementById("Total").innerText=Total.toString();
}

function showMinimum(){
	var Minimum=numbers.reduce(
			function(min,x){
		if(x<min)
			return x;
		else 
			return min;
	},numbers[0]
	);
	document.getElementById("minimum").innerText=Minimum.toString();
}

function showMaximum(){
	var Maximum=numbers.reduce(
			function(min,x){
		if(x>min)
			return x;
		else 
			return min;
	},numbers[0]
	);
	document.getElementById("minimum").innerText=Minimum.toString();
}


console.log(result)





