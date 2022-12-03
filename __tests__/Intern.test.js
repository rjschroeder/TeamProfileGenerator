const Intern = require("../lib/Intern");

test("Is able to set school?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.github).toBe("harvard");
});

test("Is able to get school from getter?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.getGithub()).toBe("harvard");
});

test("Is able to get role from getter?", () => {
    let testObject = new Intern("Jack", 8667, "jack@gmail.com", "harvard");
    expect(testObject.getRole()).toBe("Intern");
})
