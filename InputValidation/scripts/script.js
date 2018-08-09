var err_rows=document.getElementsByClassName("errorRow");
var err_cells=document.getElementsByClassName("errorCell");
var isFormDataValid=true;

function allowOnlyDigits(){
	var keyStroke = window.event.keyCode;
	if(keyStroke<48 || keyStroke>57){
		window.event.preventDefault();
	}
}

function CheckInRange(value){
	value=parseInt(value);
	if(value<=1000){
		err_rows[0].style.display="inline";
		err_cells[0].innerText = "Id value should be above 1000."
		isFormDataValid = false;
	}
}

function allowOnlyAlphabets(){
	var keyStroke = window.event.keyCode;
	if(keyStroke>=48 && keyStroke<=57){
		window.event.preventDefault();
		err_rows[1].style.display="inline";
		err_cells[1].innerText = "Allowed only Alphabets";
		isFormDataValid = false;
	}
}

function checkIfFilled(n){
	if(n==1){
		var inp1 = window.event.target;
		var inptext = inp1.value;
		inptext.trim();
		if(inptext.length==0){
			err_rows[1].style.display="inline";
			err_cells[1].innerText = "Firstname is required!!!";
			isFormDataValid = false;
		}
	}
	if(n==2){
		var inp1 = window.event.target;
		var inptext = inp1.value;
		inptext.trim();
		if(inptext.length==0){
			err_rows[1].style.display="inline";
			err_cells[1].innerText = "LastName is required!!!";
			isFormDataValid = false;
		}
	}
}

function checkLength(len){
	var inp1 = window.event.target;
	var inptext = inp1.value;
	inptext.trim();
	if(inptext.length<len || inptext.length>len){
		err_rows[3].style.display="inline";
		err_cells[3].innerText = "Phone number should contain "+len+" digits!!";
		isFormDataValid = false;
		setTimeout(
				function(){
						err_rows[3].style.display="none";
						err_cells[3].innerText = "";
				},3000
		)
	}
}


function checkFormValidity(){
	return isFormDataValid;
}