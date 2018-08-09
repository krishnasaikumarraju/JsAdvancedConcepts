var employees=[];
var total = "";
var emp_result=""
function Employee(a,b,c,d){
	this.id=a;
	this.name=b;
	this.salary=c;
	this.button=d;
}



Table_res="<tr><th>"+"Emp_ID"+"</th><th>"+"NAME"+"</th><th>"+"SALARY"+"</th><th>"+"ALLOWANCE"+"</th><th>"+"TAX"+"</th><th>"+"NET SALARY"+"</th><th>"+"Changes"+"</th></tr>"

function addToList()
{
var btn= '<input type="button" value="delete" onclick="f5()">'

emp_result=new Employee(parseInt(document.forms[0].elements[0].value), document.forms[0].elements[1].value, parseInt(document.forms[0].elements[2].value), btn)
employees.push(emp_result)

var getAllowance=function(x){
		return emp_result.salary*0.15;
	}
var getTax=function(x){
		return emp_result.salary*0.10;
	}
var getNetSalary=function(x){
		return emp_result.salary+getAllowance()-getTax();
	}
// var Delete=function(x){
// 	for(i=0; i<)
// }

total= total+"<tr><td>"+emp_result.id+"</td><td>"+emp_result.name+"</td><td>"+emp_result.salary+"</td><td>"+getAllowance()+"</td><td>"+getTax()+"</td><td>"+getNetSalary()+"</td><td>"+emp_result.button+"</td></tr>"


document.getElementById("myList").innerHTML=Table_res+total


}
function f5(){
	//alert("hello")
	var tr=window.event.target;
	emp_result.removeChild(tr);
// 	var par=tr.parentElement;
// 	var arr=par.childNodes;
// 	var count=arr.length;
// 	for(i=0; i<count; ){
// 		var t= arr[i];
// 		list1.removeChild(t);
// }
}




