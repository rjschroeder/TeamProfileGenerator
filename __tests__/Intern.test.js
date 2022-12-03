const Intern = require("../lib/Intern");

//tests ability to set the school for an intern object
test("Is able to set school?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.getSchool()).toBe("harvard");
});

//tests ability to use the getter method getSchool() for an intern object
test("Is able to get school from getter?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.getSchool()).toBe("harvard");
});

//tests ability to use the getter method getRole() for an intern object
test("Is able to get role from getter?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.getRole()).toBe("Intern");
})
