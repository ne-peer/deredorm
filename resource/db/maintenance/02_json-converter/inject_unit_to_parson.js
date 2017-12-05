const unitJson = `(input of unit_list.json)`;

const json = JSON.parse(unitJson);

let pkPerson = {};
for (let id in json) {
    const unit = json[id];

    for (let idx in unit) {
        const unitid = unit['id'];
        const unitname = unit['name'];
        const members = unit['member'];

        for (let ci in members) {
            const person = members[ci];
            if ((person in pkPerson) === false) {
                // init
                pkPerson[person] = {units: [], already: []};
            }

            if (pkPerson[person].already.indexOf(unitname) === -1) {
                pkPerson[person]['units'].push(
                    {id: unitid, name: unitname}
                );

                pkPerson[person]['already'].push(unitname);
            }
        }
    }
}

// 出力用に不要なデータを削除
let result = {};
for (let person in pkPerson) {
    result[person] = pkPerson[person]['units'];
}

const out = JSON.stringify(result);

const fs = require("fs");
fs.writeFile('person_in_units.json', out);
