function praparepage(){
	
	addBehaviour();
	prepareShoppingChoices();
		
	
}

function prepareShoppingChoices(){
	
	categories.forEach(
			function(x){
				var tn=document.createTextNode(x.categoryName);
				
				var op_el=document.createElement("option");
				op_el.appendChild(tn)
				op_el.setAttribute("value",x.id);
				document.forms[0].shoppingChoice.appendChild(op_el);
			}
			);

}

function addBehaviour(){
	
	var menuCells=document.getElementsByClassName("menuCell");
	for(i=0;i<menuCells.length;i++)
		{
		menuCells[i].addEventListener("click",changePanel,true)
		}
	div1=document.getElementById("gallery");
	div2=document.getElementById("cartSummary");
	div3=document.getElementById("cartDetail");
	document.getElementById("outputCell").appendChild(div1);
	document.getElementById("outputCell").appendChild(div2);
	document.getElementById("outputCell").appendChild(div3);
	
	document.forms[0].shoppingChoice.addEventListener("change",showGallery,true)
	
}

function changePanel(){
	
	var menuCells=window.event.target;
	var id=menuCells.id;
	if(id == "mc1")
		{
		var div=document.getElementById("gallery");
		div.style.display="block"
			var other1=document.getElementById("cartSummary") 
			other1.style.display="none"
				var other1=document.getElementById("cartDetail") 
				other1.style.display="none"
			
		}
	if(id == "mc2")
	{
		var div=document.getElementById("cartSummary");
		div.style.display="block"
			var other1=document.getElementById("gallery") 
			other1.style.display="none"
				var other1=document.getElementById("cartDetail") 
				other1.style.display="none"
	}
	if(id == "mc3")
	{
		var div=document.getElementById("cartDetail");
		div.style.display="block"
			var other1=document.getElementById("gallery") 
			other1.style.display="none"
				var other1=document.getElementById("cartSummary") 
				other1.style.display="none"
	}
	
	
}

function showGallery(){
	
	var targ=window.event.target
	var value=targ.value;
	
	for(i=0;i<categories.length;i++)
		{
		var current=categories[i];
		if(current.id==value)
			{
			var count=0;
			var galleryCells=document.getElementsByClassName("itemCell");
			
			for(j=0;j<galleryCells.length;j++)
				{
				var td=galleryCells[j];
				var contents=td.childNodes;
				for(k=0;k<contents.length;k++)
					{
					td.removeChild(contents[0])
					}
				}
			
			
			current.items.forEach(
					function(x)
					{
						var t1=document.createTextNode(x.name);
						var t2=document.createTextNode("Actual : "+x.actualPrice);
						var t3=document.createTextNode("Offer : "+x.offerPrice);
						var t4=document.createTextNode(x.id);
						
						var e1=document.createElement("h3");
						e1.appendChild(t4)
						e1.appendChild(t1);
						
						var e2=document.createElement("p");
						e2.appendChild(t2)
						e2.appendChild(t3);
						
						var e3=document.createElement("img");
						e3.setAttribute("src",x.imageFile);
						
						var parent=galleryCells[count++];
						parent.appendChild(e1);
						parent.appendChild(e3);
						parent.appendChild(e2);
						
					});
		break;
			}
		}
	
	
}