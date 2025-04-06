//  Sum Selector
//  Sum of all numbers untill it encounters a negative integer

let arr = [1,2,0,2,1,-1,2,-5,-4]

function summation(arr){
    let sum = 0;
    for (const val of arr) {
        if (val<0) {
            return sum;
        }
        sum += val;
    }
    return sum;
}

let value = summation(arr);
console.log("Sum of all element of array before 1st negative integer is ",value)