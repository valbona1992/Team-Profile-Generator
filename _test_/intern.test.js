const { describe } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("intern validation", () => {
    it("set school via constructor", () => {
        const schoolName = "NU";
        const e = new Intern("Safi", 32, "random@gmail.com", schoolName);
        expect(e.school).toBe(schoolName);
    });
});

describe("getRole", () => {
    test("get intern should return via function", () => {
        const role = "Intern";
        const e = new Intern("Safi", 32, "random@gmail.com", "NU");
        expect(e.getRole()).toBe(role);
      });
});

describe("getSchool", () => {
    test("get school via function", () => {
        const school = "NU";
        const e = new Intern("Safi", 32, "random@gmail.com", school);
        expect(e.getSchool()).toBe(school);
    });
});