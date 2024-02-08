
/**
 * 1 > creating a function named as checkName() which will take string as an input
 * 2 > checking the last letter whether it is matched with " A, y, i , e , o , u, w";
 * 3 > if it is matched , the string "Good Name" has to be returned, otherwise '“Bad Name”;
 * 4 >  the characters of the string can be capital or small;
 * 5 > the word "invalid" has to be returned if the input is given except string
 */

function checkName(name){

  
  if(typeof name !== 'string'){
    return 'invalid';
  }

    const lowerCase = name.toLowerCase();
   
    const arrayOfLetter = lowerCase.split('');
  
    const indexOfLastLetter = arrayOfLetter.length - 1;

    const lastLetter = arrayOfLetter[indexOfLastLetter];
 
   
     if (lastLetter.toUpperCase() === 'A' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' || lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w'){
        return 'Good Name';
      }
      else{

        return 'Bad Name';

      }
      

}

console.log(checkName('RAFEE'));

