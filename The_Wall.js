const worker = require('./worker.js');

async function mainWorker() {
    // "Coone"
    await worker("1359161");
    // "Da Tweekaz"
    await worker("1359005");
    // "D-Block & S-te-Fan"
    await worker("1359033");
    // "Ran-D"
    await worker("1359013");
    // "Sub Zero Project"
    await worker("1359169");
    // "Wildstylez"
    await worker("1359145");
}

mainWorker();