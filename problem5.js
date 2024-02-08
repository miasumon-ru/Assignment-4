/**
 * 1 > creating an  function named as monthlySavings() which will take an array and a number as input
 * 2 > adding all elements of array and subtract with living cost
 * 3 > if the elements of array are equal or greater than 3000 , 20% tax will be excluded from that element
 * 4 > if the value is less than 0 , the message 'earn more ' has to be returned
 * 5 > if the first parameter is not an array and the second parameter is not a number , the string 'invalid input ' has to be returned.
 */


// const allPayments = [ 1000 , 2000 , 3000 ];
// const allPayments = [ 1000 , 2000 , 2500 ];
const allPayments = [ 900 , 2700 , 3400 ];
// const livingCost = 5400; 
// const livingCost = 5000; 
const livingCost = 10000; 

function monthlySavings(arr , livingCost) {

    if(Array.isArray(arr) !== true || typeof livingCost !== 'number' ){
        return 'invalid input';
    }

    let totalIncome = 0;

    for (const payment of arr){

        if(payment < 3000 ){
            totalIncome = totalIncome + payment;
       
        }
         else if(payment >= 3000){
     
            const tax = payment * 20 / 100;

            const income = payment - tax;    
            totalIncome = totalIncome + income;
        }

        
    }

    const savings = totalIncome - livingCost;

    if(savings >=0 ){
        return savings;
    }
    else{
        return 'earn more';
    }

}

console.log(monthlySavings(livingCost, allPayments));