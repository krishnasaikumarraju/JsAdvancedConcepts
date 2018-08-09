 var employees=[];
Total_salary=[];
function Employee(a,b,c){
	this.id=a;
	this.name=b;
	this.salary=c;
}


function addToList(){

	// x=employees.push(document.forms[0].elements[0].value);
	// y=employees.push(document.forms[0].elements[1].value);
	// z=employees.push(document.forms[0].elements[2].value);
 var result = new Employee((document.forms[0].elements[0].value),(document.forms[0].elements[1].value),(document.forms[0].elements[2].value))
  emp_res = employees.push(result)
//console.log(employees)
	//alert(employees)
		
	}

function showAll()
{			
var temp="";
var result="<tr><th>id</th><th>name</th><th>salary</th></tr>"
employees.forEach(function(x){		
var data="<tr><td>"+x.id+"</td><td>"+x.name+"</td><td>"+x.salary+"</td></tr>"
temp=temp+data;		

Total_salary.push(parseInt(x.salary))


});
		var sum="";
		//console.log(Total_salary)
		var TotalSalaries=Total_salary.reduce(
			function(sum,x){
		return sum+x;
	}
	);


		


	var Minimum=Total_salary.reduce(
			function(min,x){
		if(x<min)
			return x;
		else 
			return min;
	}
	);

	var Maximum=Total_salary.reduce(
			function(min,x){
		if(x>min)
			return x;
		else 
			return min;
	}
	);


document.getElementById('empList').innerHTML=result+temp;
document.getElementById("Tsalary").innerText=TotalSalaries;
document.getElementById("tMinimum").innerText=Maximum;
document.getElementById("tMaximum").innerText=Minimum;


}

function filterList(){

	range=parseInt(document.forms[1].elements[0].value)
	filtered_result=employees.filter(
			function(x,idx,arr)
			{
				if(x.salary>range)
					return true;

				else 
					return false;
			}
	);
	 examp="";
	for(i=0; i<filtered_result.length; i++)
	{

		var Final_result="<tr><td>"+filtered_result[i].id+"</td><td>"+filtered_result[i].name+"</td><td>"+filtered_result[i].salary+"</td></tr>"+"<br>";
		examp=examp+Final_result;
	}

	var mapped_result=filtered_result.map(
			function(x)
			{
				if(x.salary%2==0)
					return "EVEN"
					else
						return "ODD"
			}
			
	);

	range=parseInt(document.forms[1].elements[1].value)
	filtered_boolean=Total_salary.every(
			function(x,idx){
				if(x>range)
					return true;
				else 
					return false;
			}
	);
	//document.getElementById("filteredlist").innerHTML="<tr><td>"+filtered_result+"</td></tr>";
	document.getElementById("filteredlist").innerHTML=examp;
	document.getElementById("mappedlist").innerHTML="<tr><td>"+mapped_result+"</td></tr>";
	document.getElementById("booleanResult").innerHTML="<tr><td>"+filtered_boolean+"</td></tr>";
}












