//  House Sorting 
//  Name length < 6 -> Red 
//  Name length < 8 -> Blue
//  Name length < 12 -> Orange 
//  Name length >= 12 -> Green

let students  = ["Gyanshankar", "Anurag", "Adnan","Anju","Priyam","Aryan"]
let houses = []
for(const student of students){
    if (student.length<6){
        houses.push("Red")
    }
    else if(student.length<8){
        houses.push("Blue")
    }
    else if (student.length<12){
        houses.push("Orange")
    }
    else{
        houses.push("Green")
    }
}

console.log(houses)