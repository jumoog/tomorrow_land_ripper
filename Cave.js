const worker = require('./worker.js');

async function mainWorker() {
    // "Carnage"
    await worker("1359077");
    // "Eptic"
    await worker("1359045");
    // "Gryffin"
    await worker("1359185");
    // "Modestep"
    await worker("1359053");
    // "Netsky"
    await worker("1359205");
    // "NGHTMRE"
    await worker("1359069");
    // "San Holo"
    await worker("1359193");
    // "Yellow Claw"
    await worker("1359209");
}

mainWorker();