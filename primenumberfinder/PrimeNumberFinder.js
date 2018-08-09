function isPrimeNumber(num){
	// parameter name - num  
	// parameter type - number
	// write code here to determine if the parameter is prime number or not
	// return value should be true if value of num is prime number else false 
	
	count=0;
	for (i=2; i<num; i++){
		if(num%i==0){
			count=count+1;
			break;
		}
	}
		if(count==1){
			return false;
		}
		else{
			return true;
		}
	
}


function getPrimeNumbersinRange(begin,end){
	
	var arr=[];
	index=0;



for (var i=begin; i<=end; i++)	 
{

	if(isPrimeNumber(i) == true){
		arr[index]=i;
		index++
		
	}
}
document.getElementById("outputCell").innerText=arr;
}



