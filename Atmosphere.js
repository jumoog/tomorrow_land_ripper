const worker = require('./worker.js');

async function mainWorker() {
    // "Amelie Lens"
    await worker("1359201");
    // "Dixon"
    await worker("1359065");
    // "Joyhauser"
    await worker("1359181");
    // "Reinier Zonneveld"
    await worker("1359213");
    // "Stephan Bodzin"
    await worker("1359041");
    // "Tale Of Us"
    await worker("1359081");
}

mainWorker();