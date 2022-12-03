const Employee = require("../lib/Employee");

//tests ability to set the name for an employee object
test("Is able to set name?", () => {
    let testObject = new Employee("Jack");
    expect(testObject.name).toBe("Jack");
});

//tests ability to set the ID for an employee object
test("Is able to set ID?", () => {
    let testObject = new Employee("Jack", 8667);
    expect(testObject.id).toBe(8667);
});

//tests ability to set the email for an employee object
test("Is able to set Email?", () => {
    let testObject = new Employee("Jack", 8667, "jack@gmail.com");
    expect(testObject.email).toBe("jack@gmail.com");
});

//tests ability to use the getter method getName() for an employee object
test("Is able to get name from getter?", () => {
    let testObject = new Employee("Jack");
    expect(testObject.getName()).toBe("Jack");
});

//tests ability to use the getter method getID() for an employee object
test("Is able to get ID from getter?", () => {
    let testObject = new Employee("Jack", 8667);
    expect(testObject.getID()).toBe(8667);
});

//tests ability to use the getter method getEmail() for an employee object
test("Is able to get Email from getter?", () => {
    let testObject = new Employee("Jack", 8667, "jack@gmail.com");
    expect(testObject.getEmail()).toBe("jack@gmail.com");
});

//tests ability to use the getter method getRole() for an employee object
test("Is able to get role from getter?", () => {
    let testObject = new Employee("Jack", 8667, "jack@gmail.com");
    expect(testObject.getRole()).toBe("Employee");
})