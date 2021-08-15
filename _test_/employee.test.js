const Employee = require("../lib/employee");

describe ("Employee Information", () => {
    it("Validate Employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });
    it("sets an employee's name", () => {
        const name = "Val";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("sets an employee's ID", () => {
        const idValue = 32;
        const e = new Employee("Safi", idValue);
        expect(e.id).toBe(idValue);
    });
    it("Sets email address", () => {
        const emailValue = "random@gmail.com";
        const e = new Employee("Safi", 32, emailValue);
        expect(e.email).toBe(emailValue);
    });
});

describe('getName', () => {
    it("get name via function", () => {
        const name = "Val";
        const e = new Employee(name);
        expect(e.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("get id via function", () => {
        const idValue = 32;
        const e = new Employee("Safi", idValue);
        expect(e.getId()).toBe(idValue);
    });
});

describe("getEmail", () => {
    it("get email via function", () => {
        const emailValue = "random@gmail.com";
        const e = new Employee("Safi", 32, emailValue);
        expect(e.getEmail()).toBe(emailValue);
    });
});

describe("getRole", () => {
    it("get team role via function", () => {
        const role= "Employee";
        const e = new Employee("Safi", 32, "random@gmail.com");
        expect(e.getRole()).toBe(role);
    });
});
