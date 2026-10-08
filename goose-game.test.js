const { getNumberRule } = require("./goose-game");

test("space 6 is the Bridge", () => {
    expect(getNumberRule(6)).toBe("The Bridge: Go to space 12");
});

test("space 19 is the Hotel", () => {
    expect(getNumberRule(19)).toBe("The Hotel: Stay for (miss) one turn");
});

test("space 31 is the Well", () => {
    expect(getNumberRule(31)).toBe("The Well: Wait until someone comes to pull you out - they then take your place");
});

test("space 42 is the Maze", () => {
    expect(getNumberRule(42)).toBe("The Maze: Go back to space 39");
});

test("space 50 is the Prison", () => {
    expect(getNumberRule(50))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 53 is the Prison", () => {
    expect(getNumberRule(53))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 55 is the Prison", () => {
    expect(getNumberRule(55))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 58 is Death", () => {
    expect(getNumberRule(58))
        .toBe("Death: Return your piece to the beginning - start the game again");
});

test("space 63 is Finish", () => {
    expect(getNumberRule(63))
        .toBe("Finish: you ended the game");
});

test("space 64 is penalized", () => {
    expect(getNumberRule(64))
        .toBe("Move to space 53 and stay in prison for two turns");
});