const worker = require('./worker.js');

async function mainWorker() {
    // "Adam Beyer"
    await worker("1358993");
    // "Adriatique"
    await worker("1359129");
    // "ANNA"
    await worker("1358973");
    // "Cellini"
    await worker("1359101");
    // "Charlotte de Witte"
    await worker("1359021");
    // "Joris Voorn"
    await worker("1359157");
    // "Patrice Bäumel"
    await worker("1359113");
    // "Yves Deruyter"
    await worker("1358961");
}

mainWorker();