const TOTAL_BOARD_SPACES = 63;
const MOVE_FORWARD_INTERVAL = 6;
const PRISON_START = 50;
const PRISON_END = 55;

// Rule messages
// For future iteration, we can represent rules as objects with type, target space, and message like below
// const BRIDGE = { type: 'MOVE', to: 12, message: 'The Bridge: Go to space 12' };
const BRIDGE = "The Bridge: Go to space 12";
const HOTEL = "The Hotel: Stay for (miss) one turn";
const WELL = "The Well: Wait until someone comes to pull you out - they then take your place";
const MAZE = "The Maze: Go back to space 39";
const DEATH = "Death: Return your piece to the beginning - start the game again";
const FINISH = "Finish: you ended the game";
const PRISON = "The Prison: Wait until someone comes to release you - they then take your place";
const PENALTY = "Move to space 53 and stay in prison for two turns";

const RULES = {
    6: BRIDGE,
    19: HOTEL,
    31: WELL,
    42: MAZE,
    58: DEATH,
    63: FINISH,
};

function getRuleForSpace(space) {
    if (!Number.isInteger(space) || space < 1) throw new RangeError(`Invalid space: ${space}`);
    if (RULES[space]) return RULES[space];
    if (space > TOTAL_BOARD_SPACES) return PENALTY;
    if (space >= PRISON_START && space <= PRISON_END) return PRISON;
    if (space % MOVE_FORWARD_INTERVAL === 0) return "Move two spaces forward";
    return `Stay in space ${space}`;
}

function printBoardRules() {
    for (let space = 1; space <= TOTAL_BOARD_SPACES; space++) {
        console.log(getRuleForSpace(space));
    }
}

if (require.main === module) printBoardRules();

module.exports = { getRuleForSpace, BRIDGE, HOTEL, WELL, MAZE, DEATH, FINISH, PRISON, PENALTY };