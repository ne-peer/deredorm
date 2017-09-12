const json = `(raw/firebase_db.json)`;
const unitJson = `(master/unit_list.json)`;

const datas = JSON.parse(json);
const unitDatas = JSON.parse(unitJson);

let result = {};
for (let id in datas) {
    let person = datas[id];
    const name = person['idol_name'];
    
    person['units'] = unitDatas[name];

    result[id] = person;
}

const out = JSON.stringify(result);

const fs = require("fs");
fs.writeFile('new_db.json', out);