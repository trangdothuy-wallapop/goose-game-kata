const TOTAL_BOARD_SPACES = 63;

function getNumberRule(space) {
    if (space === 6) {
        return "The Bridge: Go to space 12";
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