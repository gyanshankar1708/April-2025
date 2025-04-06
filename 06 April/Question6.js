//  Vowel counter 
//  Count the number of vowels in a string.

const vowelCount=(str)=>{
    count = 0;
    vowel = ["a","e","i","o","u","A","E","I","O","U"];
    for (const alp of str) {
        if (vowel.includes(alp)){
            count++;
        }
    }
    return count;
}

let str = "Gyanshankar Singh"

console.log("Number of vowel is ",vowelCount(str))