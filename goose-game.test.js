const { getRuleForSpace, BRIDGE, HOTEL, WELL, MAZE, DEATH, FINISH, PRISON, PENALTY } = require("./goose-game");

describe("only accepts valid spaces", () => {
    test.each([0, -1, 1.5])("%i is invalid space input", (space) => {
        expect(() => getRuleForSpace(space)).toThrow(RangeError);
    });
});

describe("special spaces", () => {
    test("space 6 is the Bridge", () => {
        expect(getRuleForSpace(6)).toBe(BRIDGE);
    });

    test("space 19 is the Hotel", () => {
        expect(getRuleForSpace(19)).toBe(HOTEL);
    });

    test("space 31 is the Well", () => {
        expect(getRuleForSpace(31)).toBe(WELL);
    });

    test("space 42 is the Maze", () => {
        expect(getRuleForSpace(42)).toBe(MAZE);
    });

    test("space 58 is Death", () => {
        expect(getRuleForSpace(58)).toBe(DEATH);
    });

    test("space 63 is Finish", () => {
        expect(getRuleForSpace(63)).toBe(FINISH);
    });
});

describe("multiples of the Bridge interval (6)", () => {
    test.each([12, 18, 24, 30, 36, 48, 60])("space %i is a multiple of the Bridge interval (6)", (space) => {
        expect(getRuleForSpace(space)).toBe("Move two spaces forward");
    });
});

describe("the Prison range", () => {
    test.each([50, 51, 52, 53, 55])("space %i is the Prison", (space) => {
        expect(getRuleForSpace(space))
            .toBe(PRISON);
    });

    test("space 54 is multiple of the Bridge interval (6) but should be priority treated as the prison", () => {
        expect(getRuleForSpace(54))
            .toBe(PRISON);
    });

    test.each([49, 56])("space %i is outside the prison range and should be treated normally", (space) => {
        expect(getRuleForSpace(space)).toBe(`Stay in space ${space}`);
    });
});

describe("non-special spaces", () => {
    test.each([1, 7, 20])("space %i is not special", (space) => {
        expect(getRuleForSpace(space)).toBe(`Stay in space ${space}`);
    });
});

describe("spaces beyond the finish", () => {
    test.each([64, 65, 90, 100])("space %i is beyond the finish and should be penalized", (space) => {
        expect(getRuleForSpace(space)).toBe(PENALTY);
    });
});


