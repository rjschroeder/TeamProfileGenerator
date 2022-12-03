const Engineer = require("../lib/Engineer");

test("Is able to set GitHub?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.github).toBe("jackgithub");
});

test("Is able to get GitHub from getter?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.getGithub()).toBe("jackgithub");
});

test("Is able to get role from getter?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.getRole()).toBe("Engineer");
})
