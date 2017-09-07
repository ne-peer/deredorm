const data = `(json data)`;

const fs = require("fs");
const json = JSON.parse(data);

// 20170907: Inject latest image hash to overview.
let overview = json['core']['dere_overview'];
const target = json['core']['dere_list'];
for (let key in target) {
    const name = target[key]['idol_name'];
    const latest = target[key]['aliases'].pop()['hash'];

    overview[name]['latest_hash'] = latest;
}
console.log(overview);

fs.writeFile('out.json', JSON.stringify(overview));
