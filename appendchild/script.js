
 res="<tr><th>"+"Emp_ID"+"</th><th>"+"NAME"+"</th><th>"+"SALARY"+"</th><th>"+"ALLOWANCE"+"</th><th>"+"TAX"+"</th><th>"+"NET SALARY"+"</th><th>"+"Changes"+"</th></tr>"
function addToList()
{

var Id_data=parseInt(document.forms[0].elements[0].value);
var Name_data=document.forms[0].elements[1].value;
Salary_data=parseInt(document.forms[0].elements[2].value);


var Idnode=document.createTextNode(Id_data);
var Namenode=document.createTextNode(Name_data);
var Salarynode=document.createTextNode(Salary_data);
var SalAllow=document.createTextNode(getAllowance());
var SalTax=document.createTextNode(getTax());
var SalNet=document.createTextNode(getNetSalary());



 
var teIdnode=document.createElement("td");
var teNamenode=document.createElement("td");
var teSalarynode=document.createElement("td");
var teSalAllow=document.createElement("td");
var teSalTax=document.createElement("td");
var teSalNet=document.createElement("td");



	teIdnode.appendChild(Idnode);
	teNamenode.appendChild(Namenode);
	teSalarynode.appendChild(Salarynode);
	teSalAllow.appendChild(SalAllow);
	teSalTax.appendChild(SalTax);
	teSalNet.appendChild(SalNet);
	

 var reIdnode =document.createElement("tr");
 

	reIdnode.appendChild(teIdnode);
	reIdnode.appendChild(teNamenode);
	reIdnode.appendChild(teSalarynode);
	reIdnode.appendChild(teSalAllow);
	reIdnode.appendChild(teSalTax);
	reIdnode.appendChild(teSalNet);




//result="<tr><th>id</th><th>name</th><th>salary</th></tr>"

//document.getElementById("myList").appendChild(reIdnode);	
document.getElementById("myList").appendChild(reIdnode);
//var list=document.getElementById("myList").appendChild(reIdnode);
//document.getElementById("myList").innerHTML=res+list



  
}

getAllowance=function(){
		return Salary_data*0.15;
	}
getTax=function(){
		return Salary_data*0.10;
	}
getNetSalary=function(){
		return Salary_data+getAllowance()-getTax();
	}

