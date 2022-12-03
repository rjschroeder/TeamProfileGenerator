const Manager = require("../lib/Manager");

test("Is able to set office number?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getOfficeNumber()).toBe(65);
});

test("Is able to get office number from getter?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getOfficeNumber()).toBe(65);
});

test("Is able to get role from getter?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getRole()).toBe("Manager");
})
