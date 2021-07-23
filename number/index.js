//## requirement 
    
//Create a new index.js file and write a loop in any way to achieve the following requirements: from 0 to 20, determine whether the number is odd or even, and output. The output is as follows:
//1 is odd number.
//2 is even number.
//3 is odd number.
//……
// 19 is odd number.
// 20 is even number.
//

var number = 20;

for(i = 1; i <= number; i++){
	if(i % 2){
  		document.write(i + " is odd number" + "<br>");
  	} else{
  		document.write(i + " is even number" + "<br>");
  }
}