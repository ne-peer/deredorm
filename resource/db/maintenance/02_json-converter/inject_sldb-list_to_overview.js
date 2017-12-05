const sldbJson = ``;
const sldb = JSON.parse(sldbJson)['result'];

const overviewJson = ``;
const ov = JSON.parse(overviewJson);

const fs = require("fs");
// execute
for (let sldbKey in sldb) {
    const cards = sldb[sldbKey]['cards'];
    const name = sldb[sldbKey]['kanji_spaced'];

    ov[name]['sldb_cards'] = cards;
}
console.log(ov);

// export
fs.writeFile('out.json', JSON.stringify(ov));
