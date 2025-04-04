async function sleep(){
    return new Promise((ressolve,reject)=>{
        setTimeout(()=>{
            ressolve(7);
        },2000)
    })
}

// IIFC 
// (async function main(){
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()


//  Destructucture 

// let x,y = [1,2];
// console.log(x,y)
// let [x,y] = [1,2]
// console.log(x,y)
// let [x,y,...res] = [1,2,3,4,5,6,7,8,9]
// console.log(x,y,res)


const obj = {
    a:1,
    b:2,
    c:3
}
const {a,b} = obj
console.log(a,b)