/**
 * 1 > creating a function named as deleteInvalids() which wil take an array as input 
 * 2 > input in the array can be any data type 
 * 3 > if the elements of are not number , they should be removed. 
 * 4 > Only the number will take position in the new array and it should be returned as output
 * 5 > error message should be returned if input expect array is passed as an argument.
 */

function deleteInvalids(elements){

    if(Array.isArray(elements) !== true){
        return 'Please provide an array ' ;
    }

    let arrayWithNumber = [];

    for (const element of elements){
        if(typeof element === 'number' && Number.isNaN(element) === false){

            arrayWithNumber.push(element);

        }
    }

    return arrayWithNumber;

}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));