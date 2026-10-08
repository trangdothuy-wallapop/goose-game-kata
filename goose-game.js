const TOTAL_BOARD_SPACES = 63;

const RULES = {
    6: "The Bridge: Go to space 12",
    19: "The Hotel: Stay for (miss) one turn, The Well: Wait until someone comes to pull you out - they then take your place ",
    31: "The Well: Wait until someone comes to pull you out - they then take your place",
    42: "The Maze: Go back to space 39",
    50: "The Prison: Wait until someone comes to release you - they then take your place",
    55: "The Prison: Wait until someone comes to release you - they then take your place"
};

function getNumberRule(space) {
    if (RULES[space]) {
        return RULES[space];
    } else if (space % 6 === 0) {
        return "Move two spaces forward";
    } else {
        return `Stay in space ${space}`;
    }
}

function printResult() {
    for (let space = 1; space <= TOTAL_BOARD_SPACES; space++) {
        console.log(getNumberRule(space));
    }
}

printResult()

module.exports = { getNumberRule };