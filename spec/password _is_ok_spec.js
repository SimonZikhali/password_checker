const {passwordIsOk} = require("../src/password_checker");

describe("passwordIsOk",function (){

    it("should check if the given password meets the conditions of exist",function () {
        expect(passwordIsOk("")).toBe(false);
    });    
  it("should check if the given password meets the conditions of 8 characters",function () {
      expect(passwordIsOk("Simon")).toBe(false);
    });
    it("should check if the given password meets the conditions of lowercase letter",function () {
       expect(passwordIsOk("SImONZ&a")).toBe(true);
      });
    it("should check if the given password meets the conditions of uppercase letter",function () {
      expect(passwordIsOk("ma87587gj")).toBe(true);
      });
     it("should check if the given password meets the conditions of digit",function () {
      expect(passwordIsOk("egjags242")).toBe(true);
     });               
     it("should check if the given password meets the conditions special characters",function () {
      expect(passwordIsOk("@SIMon7#1")).toBe(true);
     });
});