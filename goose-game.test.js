const { getRuleForSpace } = require("./goose-game");

test("Only accepts valid spaces", () => {
    expect(() => getRuleForSpace(0)).toThrow(RangeError);
    expect(() => getRuleForSpace(-1)).toThrow(RangeError);
    expect(() => getRuleForSpace(1.5)).toThrow(RangeError);
    expect(getRuleForSpace(1)).toBe("Stay in space 1");
});

test.each([12, 18, 24, 30, 36, 48, 60])("space %i are multiples of the Bridge interval (6)", (space) => {
    expect(getRuleForSpace(space)).toBe("Move two spaces forward");
});

test("space 54 is multiple of the Bridge interval (6) but should be treated as the prison", () => {
    expect(getRuleForSpace(54))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 6 is the Bridge", () => {
    expect(getRuleForSpace(6)).toBe("The Bridge: Go to space 12");
});

test("space 19 is the Hotel", () => {
    expect(getRuleForSpace(19)).toBe("The Hotel: Stay for (miss) one turn");
});

test("space 31 is the Well", () => {
    expect(getRuleForSpace(31)).toBe("The Well: Wait until someone comes to pull you out - they then take your place");
});

test("space 42 is the Maze", () => {
    expect(getRuleForSpace(42)).toBe("The Maze: Go back to space 39");
});

test("space 50 is the Prison", () => {
    expect(getRuleForSpace(50))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 53 is the Prison", () => {
    expect(getRuleForSpace(53))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 55 is the Prison", () => {
    expect(getRuleForSpace(55))
        .toBe("The Prison: Wait until someone comes to release you - they then take your place");
});

test("space 58 is Death", () => {
    expect(getRuleForSpace(58))
        .toBe("Death: Return your piece to the beginning - start the game again");
});

test("space 63 is Finish", () => {
    expect(getRuleForSpace(63))
        .toBe("Finish: you ended the game");
});

test("space 64 is penalized", () => {
    expect(getRuleForSpace(64))
        .toBe("Move to space 53 and stay in prison for two turns");
});

test.each([1, 7, 20])("space %i is not special", (space) => {
    expect(getRuleForSpace(space)).toBe(`Stay in space ${space}`);
});
