const worker = require('./worker.js');

async function mainWorker() {
    // "Afrojack"
    await worker("1359025");
    // "Alan Walker"
    await worker("1359001");
    // "Armin van Buuren"
    await worker("1359073");
    // "David Guetta"
    await worker("1359197");
    // "Dimitri Vegas & Like Mike"
    await worker("1359085");
    // "Don Diablo"
    await worker("1359137");
    // "Katy Perry"
    await worker("1359037");
    // "Kölsch"
    await worker("1359173");
    // "Lost Frequencies"
    await worker("1358981");
    // "Martin Garrix"
    await worker("1359217");
    // "NERVO"
    await worker("1358989");
    // "Oliver Heldens"
    await worker("1358949");
    // "Paul Kalkbrenner"
    await worker("1359049");
    // "Steve Aoki"
    await worker("1359061");
    // "Sunnery James & Ryan Marciano"
    await worker("1359097");
    // "Tiësto"
    await worker("1359189");
    // "Timmy Trumpet"
    await worker("1359153");
    // "Vintage Culture"
    await worker("1359121");
}

mainWorker();