 allNumbers=[]
var index=0;


function addNumber(num){
	
	allNumbers[index]=num;
	index++
	
	return num
	
	
}


function findMinimum(){
var min=allNumbers[0]
	for( i=0; i<allNumbers.length; i++)
 		{
 			 if(min>allNumbers[i])
 			 {

             min=allNumbers[i];

            }	
	}
return min;

 }

function findMaximum(){
	var max=allNumbers[0]
	for( j=0; j<allNumbers.length; j++)
 		{
 			 if(max<allNumbers[j])
 			 {

             max=allNumbers[j];

            }	
	}
return max;
}

function getTotal(){
	 total=parseInt(allNumbers[0])
	 for (k = 1; k < allNumbers.length; k++)
	 {
    	total += parseInt(allNumbers[k]);
    	
      } 
         return total;


}
function getAverage(){
	
	var avg=parseInt(total/allNumbers.length)
	return avg
}





