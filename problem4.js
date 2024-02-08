// const word  = 'sumon';

// const first = word.charAt(0).toUpperCase();

// const remainingLetter = word.slice(1).toLowerCase();
// // console.log(remainingLetter);

// const word2 = first + remainingLetter;

// console.log(word2)


function  password(obj){

    
    if(!obj.name || !obj.birthYear || !obj.siteName ){
        return 'invalid';
    }
   else{
        const year = obj.birthYear;
        const yearLength = year.toString().length;
        if(yearLength !== 4){
            return 'invalid';
        }
   }


   const word = obj.siteName;

   const firstLetterCapital = word.charAt(0).toUpperCase();

   const remainingLetters = word.slice(1);
  
   const wordWithFirstLetterCapital = firstLetterCapital.concat(remainingLetters);

   const passwordStructure = wordWithFirstLetterCapital + '#' + obj.name + '@' + obj.birthYear;

   return passwordStructure;

   

}

console.log(password({ name: 'rahat', birthYear:2002, siteName: 'Facebook' }));
console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' } ));
console.log(password({ name: 'rahat' , siteName: 'Facebook' }));
console.log(password({ name: 'toky' , birthYear: 200, siteName: 'Facebook'}));
