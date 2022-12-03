const Engineer = require("../lib/Engineer");

//tests ability to set the GitHub for an engineer object
test("Is able to set GitHub?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.github).toBe("jackgithub");
});

//tests ability to use the getter method getGitHub() for an engineer object
test("Is able to get GitHub from getter?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.getGithub()).toBe("jackgithub");
});

//tests ability to use the getter method getRole() for an engineer object
test("Is able to get role from getter?", () => {
    let testObject = new Engineer("Jack", 8667, "jack@gmail.com", "jackgithub");
    expect(testObject.getRole()).toBe("Engineer");
})
