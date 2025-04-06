//  Double value of array 
//  If any number occur more than once than only double the fist element
let arr = [1,2,3,2,1,2,3]
arr.sort()
function doubles(arr){

    for (var i = 0;i<arr.length;i++){
        var j = i;
        while (arr[i] == arr[i+1]){
            i++;
        }
        arr[j] = arr[j]*2
    }
    return arr;
}
arr = doubles(arr)
console.log(arr)