const TOTAL_BOARD_SPACES = 63;

function getNumberRule(space) {
    if (space === 6) {
        return "The Bridge: Go to space 12";
    } else if (space === 19) {
        return "The Hotel: Stay for (miss) one turn, The Well: Wait until someone comes to pull you out - they then take your place ";
    } else if (space === 31) {
        return "The Well: Wait until someone comes to pull you out - they then take your place";
    } else if (space === 42) {
        return "The Maze: Go back to space 39";
    } else if (space === 50 || space === 55) {
        return "The Prison: Wait until someone comes to release you - they then take your place";
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