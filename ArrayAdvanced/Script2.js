//var ages=[30,40,20,60]
//var result=ages.every(function(x){
//	if(x>=21)
//		return true;
//	else 
//		return false;
//})
//console.log(result)
//
//result=ages.every(
//		(x)=> {if(x<21) return false;
//		else
//			return true;
//		})
//		
//		console.log(result);


//var names=["CTS", "TCS", "Infosys", "Wipro"]

function Employee(a,b,c){
	this.name=a;
	this.salary=b;
	this.grade=c;
	
}

var e1=new Employee("Vidhya", 5000, 'A')
var e2=new Employee("DIN", 6000, 'B')
var e3=new Employee("JOHN", 8000, 'C')

var employees=[e1,e2,e3];

var employ_result=employees.some(
function(x){
	if(x.grade=='A')
		return true;
	else 
		return false;
}		
);
console.log(employ_result);
