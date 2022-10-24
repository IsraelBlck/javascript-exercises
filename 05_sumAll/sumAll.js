const sumAll = function(num1, num2) {
 //Get the smallest number amd biggernumber 

 smallNumber = Math.min(num1, num2);
 bigNumber = Math.max(num1, num2);

 // variable to hold the final sum of smallNumber and bigNumber
/////
    finalSum = 0 ;
//return 'ERROR'  with negative numbers and non parameters
    if(
        (typeof num1 === "string")||
        (typeof num2 === "string")
     ){
        return 'ERROR'
     }else if (
        (typeof num1 === "object")||
        (typeof num2 === "object")
     ){
        return 'ERROR'
     }else if ( smallNumber > 0 && bigNumber > 0){                  ///Add numbers together with for loop
         for (let i = smallNumber; i <= bigNumber; i++) {
           finalSum += i;
         }
     }else {
        return 'ERROR'
    }
   
    return finalSum

};

// Do not edit below this line
module.exports = sumAll;
