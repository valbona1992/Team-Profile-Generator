const { it, expect, describe } = require("@jest/globals");
const Enginer = require("../lib/engineer");

describe("GitHub validation", () => {
    it("set gitHub account", () =>{
        const username = "username";
        const e = new Engineer("Safi", 32, "random@gmail.com", username);
        expect(e.github).toBe(username);
    });
});

describe("getRole", () => {
    it("get role as engineer", () => {
        const role = "Engineer";
        const e = new Enginer("Safi", 32, "random@gmail.com", "username");
        expect(e.getRole()).toBe(role);
    });
});

describe("getGithub", () => {
    it("get GitHub account via function", () => {
        const account = "username";
        const e = new Enginer("Safi", 32, "random@gmail.com", account);
        expect(e.getGithub()).toBe(account);
    });
});