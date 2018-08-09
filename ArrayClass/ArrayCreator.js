var names=[]

function doAdd()
{
	var value=document.forms[0].elements[0].value;
	names.push(value) //array function
	document.getElementById("output").innerHTML=names;
}
function doPrepend()
{
	var value=document.forms[0].elements[0].value;
	names.unshift(value) //array function
	document.getElementById("output").innerHTML=names;
}

function doAppendAsNumber()
{
	var value=document.forms[0].elements[0].value;
	value=parseInt(value)
	names.push(value) //array function
	document.getElementById("output").innerHTML=names;
}
function doPrependAsNumber()
{
	var value=document.forms[0].elements[0].value;
	value=parseInt(value)
	names.shift(value) //array function
	document.getElementById("output").innerHTML=names;
}


function doDeleteAtEnd()
{
	var value=document.forms[0].elements[0].value;
	names.pop() //array function
	document.getElementById("output").innerHTML=names;
}

function doDeleteAtStart()
{
	var value=document.forms[0].elements[0].value;
	names.shift() //array function
	document.getElementById("output").innerHTML=names;
}
function doReverse()
{
	names.reverse();//array function
	document.getElementById("output").innerHTML=names;
}
function doSorting()
{
	names.sort((a,b)=> a-b);//array function for digits
	document.getElementById("output").innerHTML=names;
}


function overAllArray()
{
	
	overAllString = names.toString();
	alert(overAllString);

}

function onlyAlphabit()
{
	alpha = overAllString.match(/[a-zA-Z]+/g);
	console.log(alpha)
	var sorted_alphabits = alpha.sort();
	document.getElementById("output").innerHTML="Only Alphabits:"+sorted_alphabits;
}
function onlyNumber()
{
	 numbers = overAllString.match(/\d+/g);
	var sorted_numbers=numbers.sort((a,b)=> a-b);//array function for digits
	document.getElementById("output").innerHTML="Only Numbers:"+sorted_numbers;
}