const worker = require('./worker.js');

async function mainWorker() {
    // "Bassjackers"
    await worker("1359177");
    // "B Jones"
    await worker("1358965");
    // "Cat Dealers"
    await worker("1359125");
    // "DJ Licious"
    await worker("1359089");
    // "EDX"
    await worker("1359105");
    // "Fedde Le Grand"
    await worker("1358997");
    // "Klingande"
    await worker("1358977");
    // "Laidback Luke"
    await worker("1359165");
    // "Mr Pig"
    await worker("1358957");
    // "Robin Schulz"
    await worker("1359017");
    // "Yves V"
    await worker("1359141");
}

mainWorker();