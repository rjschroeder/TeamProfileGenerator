const Manager = require("../lib/Manager");

//tests ability to set the office number for a manager object
test("Is able to set office number?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getOfficeNumber()).toBe(65);
});

//tests ability to use the getter method getOfficeNumber() for a manager object
test("Is able to get office number from getter?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getOfficeNumber()).toBe(65);
});

//tests ability to use the getter method getRole() for a manager object
test("Is able to get role from getter?", () => {
    let testObject = new Manager("Jack", 8667, "jack@gmail.com", 65);
    expect(testObject.getRole()).toBe("Manager");
})
