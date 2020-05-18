const validate = require("../src/password_checker");

describe("passwordIsValid", function(){
    describe("validates the password", function(){
     const password = "@SimonZ7";
       const passwordIsValid = validate.passwordIsValid(password);

        it("Should check if the password is not empty",function (){
            expect(passwordIsValid).not.toBeNull();
        });

        it("throws an error when password length is less than 8", function(){
            expect(passwordIsValid.length).toBeGreaterThan(7);
        })

        it("throws an error when the password has no lowercase character", function () {
            expect(passwordIsValid).toMatch(/[a-z]/);
        })

        it("throws an error when the password has no UPPERCASE character", function () {
            expect(passwordIsValid).toMatch(/[A-Z]/);
        })

        it("throws an error when the password has no digit", function () {
            expect(passwordIsValid).toMatch(/[0-9]/);
        })

        it("throws an error when the password has no special character", function () {
            expect(passwordIsValid).toMatch(/[{(%$&*"'\|#@!)}]/);
        })
    })
})

describe("password is Ok", function(){
    const password = "@SimonZ7";
    const passwordIsValid = validate.passwordIsOk(password);

    const condition1 = /[a-z]/;
    const condition2 = /[A-Z]/;
    const condition3 = /[0-9]/;
    const condition4 = /[{(%$&*"'\|#@!)}]/;

    if ((password !== null) && (password.length < 8)){
 
        it("should return password not okay if it doesn't meet condition1 and condition2", function () {
         expect(passwordIsValid).toMatch(condition1 || condition2 || condition3 || condition4);
        })
    }
})