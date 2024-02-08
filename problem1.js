/**
 * 1 > creating a function named "calculateMoney" which will take number as input
 * 2 > calculate the total income 
 * 3 > calculate the expenditure
 * 4 > subtract between total income and expenditure
 * 5 > return the subtract result
 * 6 > bonus part - the input should be positive number , otherwise an error message has to be returned
 *
 */

function calculateMoney(ticketSale) {

    if (ticketSale < 0 ){
        return 'please provide a positive number';
    }

    const perTicketPrice = 120;
    const totalIncome = perTicketPrice * ticketSale; 

    const expenditureOfDaroan = 500;
    const expenditureOfEightStuff = 8 * 50;


    const totalExpenditure = expenditureOfDaroan + expenditureOfEightStuff;

    const remainingTaka = totalIncome - totalExpenditure;

    return remainingTaka;



}

// console.log(calculateMoney (10));
// console.log(calculateMoney (1055));
// console.log(calculateMoney (93));
// console.log(calculateMoney (0));
