function passwordIsValid(password){
    try {
        if(password == "") throw("password should exist");

        if(password.length < 8) throw("password should be longer than 8 characters");
        
        if(password.match(/[a-z]/) == null) throw("password should have at least one lowercase letter");

        if(password.match(/[A-Z]/) == null) throw("password should have at least one uppercase letter");

        if(password.match(/[0-9]/) == null) throw("password should have at least one digit");

        if(password.match(/[{(%$&*"'\|#@!)}]/) == null) throw("password should have at least one special character");

        return password;
    } catch(error) {
        return error;     
    }
}

 function passwordIsOk(password){
    if (((password !== "") && (password.length >= 8)) && ((password.match(/^(?=.*[a-z]+)/g) || password.match(/^(?=.*[A-Z]+)/g) || password.match(/^(?=.*[0-9]+)/g) || password.match(/[{(%$&*"'\|#@!)}]/g)))){
         return true;
     }
     else{
       return false;
     }
 }

const password = "@SimonZ7";
console.log(passwordIsValid(password));
console.log(passwordIsOk(password))
module.exports = {
     passwordIsValid,
     passwordIsOk };