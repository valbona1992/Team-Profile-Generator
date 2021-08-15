const Manager = require("../lib/manager");

describe("office number validation", () => {
    it("set school via constructor", () => {
        const office = 10;
        const e = new Manager("Safi", 32, "random@gmail.com", office);
        expect(e.officeNumber).toBe(office);
    });
});

describe("getRole", () => {
    test("get manager should return via function", () => {
        const role = "Manager";
        const e = new Manager("Safi", 32, "random@gmail.com", role);
        expect(e.getRole()).toBe(role);
      });
});

describe("getOfficeNumber", () => {
    test("get office number via function", () => {
        const office = 10;
        const e = new Manager("Safi", 32, "random@gmail.com", office);
        expect(e.getOfficeNumber()).toBe(office);
    });
});