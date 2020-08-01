const readJsonSync = require('read-json-sync');
const p = require('phin').promisified;
const pathToFfmpeg = require('ffmpeg-static');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { exit } = require('process');

module.exports = async function (id) {
    let AUTH_KEY = await readJsonSync("./key.json");
    let res = await p({
        headers: {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0',
                Origin: 'https://relive.aroundtheworld.tomorrowland.com',
                Referer: 'https://relive.aroundtheworld.tomorrowland.com/festival'
            },
            url: `https://player.freecaster.com/get/video/${id}/Flow?loc=en_GB&source_url=https%3A%2F%2Frelive.aroundtheworld.tomorrowland.com%2Ffestival`,
            parse: 'json'
        }
    });
    let tile = res.body.title;
    // replace space with underscore
    tile = tile.replace(/ +/g, "_");
    let file = res.body.sources[0].file;
    file = file.replace("https://live-playout.tomorrowland.com", "");
    file = file.replace("?token=%TOKEN", "");
    console.log(tile);
    if (!fs.existsSync(`${__dirname}/out/${tile}.ts`)) {
        res = await p({
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0',
                Authorization: AUTH_KEY.key,
                Origin: 'https://relive.aroundtheworld.tomorrowland.com',
                Referer: 'https://relive.aroundtheworld.tomorrowland.com/festival'
            },
            data: {
                "trackDomain": "atw", "streamUrl": file
            },
            url: 'https://wp965ytzj3.execute-api.eu-central-1.amazonaws.com/prod/stream/start',
            parse: 'json'
        });
        if (res.statusCode === 200) {
            console.log(res.body.data.streamUrl);
            console.log("https://live-playout.tomorrowland.com" + res.body.data.streamUrl);
            const targetFile = path.normalize(`${__dirname}/out/${tile}.ts`);
            const command1 = `${pathToFfmpeg} -i "https://live-playout.tomorrowland.com${res.body.data.streamUrl}" -c copy "${targetFile}"`;
            const response1 = await exec(command1);
        }
        else {
            console.error("We got blocked. Add a new key in key.json");
            exit();
        }
    } else {
        console.log("already downloaded!")
    }
}