 function passwordIsValid(password){
    
    if(password == "")  throw Error ("password should exist");

    if(password.length < 8)  throw Error ("password should be longer than 8 characters");
        
    if(password.match(/[a-z]/) == null)  throw Error ("password should have at least one lowercase letter");

    if(password.match(/[A-Z]/) == null)  throw Error("password should have at least one uppercase letter");

    if(password.match(/[0-9]/) == null)  throw Error  ("password should have at least one digit");

    if(password.match(/[{(%$&*"'\|#@!)}]/) == null)  throw Error ("password should have at least one special character");
       
 }

 function passwordIsOk(password){
   if (((password !== "") && (password.length >= 8)) && ((password.match(/^(?=.*[a-z]+)/g) 
   || password.match(/^(?=.*[A-Z]+)/g) 
   || password.match(/^(?=.*[0-9]+)/g) 
   || password.match(/[{(%$&*"'\|#@!)}]/g)))){
        return true;   
       }
     else{
      return false;
     }
 }
 

// console.log(passwordIsValid("SimoN7&@*"));
// console.log(passwordIsOk("SimoN7&@*"))
 module.exports = { passwordIsValid,passwordIsOk};