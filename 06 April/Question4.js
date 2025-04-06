//  password Validator in JS
//  It pass password and check whether password is of 8 character and consists of alteast 1 Uppercase, 1 Lowercase, 1 digit

let pwd = "Gyan121"

function pwdValid(pwd){
    let upp = 0;
    let low = 0;
    let digit = 0;
    for (const ch of pwd) {
        let code = ch.charCodeAt(0)
        if (code>=65 && code <=90){
            upp++;
        }
        else if (code >= 97 && code <= 122){
            low++;
        }
        else if(code >= 48 && code <= 57){
            digit++
        }
    }
    if (upp>0 && low>0 && digit>0){
        return true
    }
    return false
}

if (pwdValid(pwd)){
    console.log(`Password is valid and your password is ${pwd}`)
}
else{
    console.log("Password is not valid")
}