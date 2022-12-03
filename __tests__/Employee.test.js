const Employee = require("../lib/Employee");

test("Is able to set name?", () => {
    let testObject = new Employee("Jack");
    expect(testObject.name).toBe("Jack");
});

test("Is able to set ID?", () => {
    let testObject = new Employee("Jack", 8667);
    expect(testObject.id).toBe(8667);
});

test("Is able to set Email?", () => {
    let testObject = new Employee("Jack", 8667, "jack@gmail.com");
    expect(testObject.email).toBe("jack@gmail.com");
});