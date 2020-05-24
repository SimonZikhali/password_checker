 const {passwordIsValid} = require("../src/password_checker");
describe("The function should throw errors if the password is not valid", function () {
    
    it("should test if the password exist", function () {
        expect(function () {
          passwordIsValid("");
        }).toThrow(new Error("password should exist"));
      })
      it("should test if the password is greater than 8", function () {
        expect(function () {
          passwordIsValid("Simon");
        }).toThrow(new Error("password should be longer than 8 characters"));
      })
      it("should test if the password has at least one lowercase letter", function () {
        expect(function () {
          passwordIsValid("SIMMONZK7@#");
        }).toThrow(new Error("password should have at least one lowercase letter"));
      }) 
      it("should test if the password has at least one uppercase letter", function () {
        expect(function () {
          passwordIsValid("simon7@#");
        }).toThrow(new Error("password should have at least one uppercase letter"));
      }) 
      it("should test if the password has at least one digit ", function () {
        expect(function () {
          passwordIsValid("simonZZ@#");
        }).toThrow(new Error("password should have at least one digit"));
      }) 
      it("should test if the password has at least one special character ", function () {
        expect(function () {
          passwordIsValid("simonZZ123");
        }).toThrow(new Error("password should have at least one special character"));
      }) 
})