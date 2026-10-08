function run() {
    for (let i = 0; i <=63; i++) {
        if (i === 6) {
            console.log("The Bridge: Go to space 12");
        } else if (i % 6 === 0) {
            console.log("Move two spaces forward");
        } else {
            console.log(`Stay in space ${i}`);
        }
    }
}

run()