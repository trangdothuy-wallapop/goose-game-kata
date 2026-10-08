const { getNumberRule } = require("./goose-game");

test("space 19 is the Hotel", () => {
    expect(getNumberRule(19)).toBe("The Hotel: Stay for (miss) one turn, The Well: Wait until someone comes to pull you out - they then take your place ");
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

test("space 55 is the Prison", () => {
    expect(getNumberRule(55))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});