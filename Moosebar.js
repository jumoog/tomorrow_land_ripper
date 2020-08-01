const worker = require('./worker.js');

async function mainWorker() {
    // "Feest DJ Lucki Luc"
    await worker("1359669");
    // "Frank Mellemans"
    await worker("1359665");
    // "Jan V"
    await worker("1359661");
    // "Mr E"
    await worker("1359673");
}

mainWorker();