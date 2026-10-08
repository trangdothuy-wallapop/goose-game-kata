const TOTAL_BOARD_SPACES = 63;

const RULES = {
    6: "The Bridge: Go to space 12",
    19: "The Hotel: Stay for (miss) one turn",
    31: "The Well: Wait until someone comes to pull you out - they then take your place",
    42: "The Maze: Go back to space 39",
    50: "The Prison: Wait until someone comes to release you - they then take your place",
    55: "The Prison: Wait until someone comes to release you - they then take your place",
    58: "Death: Return your piece to the beginning - start the game again",
    63: "Finish: you ended the game",
};

function getNumberRule(space) {
    if (RULES[space]) return RULES[space];
    if (space > TOTAL_BOARD_SPACES) return "Move to space 53 and stay in prison for two turns";
    if (space >= 50 && space <= 55) return "The Prison: Wait until someone comes to release you - they then take your place";
    if (space % 6 === 0) return "Move two spaces forward";
    return `Stay in space ${space}`;
}

function printResult() {
    for (let space = 1; space <= TOTAL_BOARD_SPACES; space++) {
        console.log(getNumberRule(space));
    }
}

printResult()

module.exports = { getNumberRule };