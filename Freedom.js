const worker = require('./worker.js');

async function mainWorker() {
    // "Claptone"
    await worker("1359009");
    // "Dash Berlin"
    await worker("1359117");
    // "Eric Prydz"
    await worker("1359057");
    // "Jack Back"
    await worker("1358985");
    // "MaRLo"
    await worker("1359109");
    // "NWYR"
    await worker("1359133");
    // "Solardo"
    await worker("1358969");
    // "VER:WEST"
    await worker("1359029");
    // "Vini Vici"
    await worker("1359149");
}

mainWorker();