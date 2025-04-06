//  Append Reverse String to the same using function

let str = "Gyan"

function reverseadd(str){
    let newStr = ""
    for (var i=str.length-1;i>=0;i--){
        newStr += str[i]
    }
    return str+newStr
}

let ans = reverseadd(str)
console.log(`${str} alongwith its reverse is ${ans}`)