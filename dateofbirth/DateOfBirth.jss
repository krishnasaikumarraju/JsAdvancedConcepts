function span(){
	
	var str=document.getElementsByName("txt_input")[0].value;
	var dateParts = str.split("/");

	var user_date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);   
	var now = new Date();
	var difference = now - user_date;
	var days = difference / (1000*60*60*24);
	var thisyear = new Date().getFullYear();
	var birthyear = dateParts[2];
	var num_of_years = 0;
for( y=birthyear; y <= thisyear; y++)
	{   

	    if( (y % 4 == 0 && y % 100 == 0) || y % 400 == 0 ) 
	    {
			num_of_years++;             
	    }
	}  
	

	var years = ((days)*(thisyear-birthyear))/((num_of_years*366) + ((thisyear-birthyear-num_of_years)*365) );
	var month = years*12	
	life_span =	"Days:"+days+"<br>"+"Years:"+years+"<br>"+"Monthes:"+month;
	
}







