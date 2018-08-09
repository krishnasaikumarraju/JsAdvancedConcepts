var allStates=new AllStates();
allStates.addState(state1);
allStates.addState(state2);
allStates.addState(state3);

state1.addCity(c1);
state1.addCity(c2);
state1.addCity(c3);
state1.addCity(c4);
state1.addCity(c5);

state2.addCity(c6);
state2.addCity(c7);
state2.addCity(c8);
state2.addCity(c9);

state3.addCity(c10);
state3.addCity(c11);
state3.addCity(c12);
state3.addCity(c13);
state3.addCity(c14);
state3.addCity(c15);

function loadStates(){
	var text="<option value='0'>Select state</option>";
	var arr = allStates.getStates();
	for(i=0;i<arr.length;i++){
		text=text+"<option value='"+arr[i].id+"'>"+arr[i].name+"</option>";	
	}
	//alert(text);
	document.forms[0].state_name.innerHTML=text;
} 

function loadStates1(){
	var arr = allStates.getStates();
	
	var dummy1 = document.createElement("option");
	dummy1.setAttribute("value", 0);
	
	var dummy2 = document.createTextNode("Select City");
	dummy1.appendChild(dummy2);
	
	document.forms[0].state_name.appendChild(dummy1);
	
	for(i=0;i<arr.length;i++){
		var c1=document.createTextNode(arr[i].name);
		var c2=document.createElement("option");
		c2.setAttribute("value", arr[i].id);
		c2.appendChild(c1);
		document.forms[0].state_name.appendChild(c2);
	}
} 

function loadCities(stateId){
	if(stateId<=0)
		return;
	
	var selectedState=allStates.getState(stateId);
	var	cityArr= selectedState.getCities();
	var text="";
	for(i=0;i<cityArr.length;i++){
		text=text+"<option value='"+cityArr[i].id+"'>"+cityArr[i].name+"</option>";	
	}
	//alert(text);
	document.forms[0].city_name.innerHTML=text;
}



