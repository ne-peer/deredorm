const unitJson = `(input of unit_list.json)`;

const json = JSON.parse(unitJson);

let pkPerson = {};
for (let id in json) {
    const unit = json[id];

    for (let idx in unit) {
        const unitname = unit['name'];
        const members = unit['member'];

        for (let ci in members) {
            const person = members[ci];
            if (person in pkPerson) {
                if (pkPerson[person].indexOf(unitname) === -1) {
                    pkPerson[person].push(unitname);
                }
            } else {
                pkPerson[person] = [unitname];
            }
        }
    }
}

const out = JSON.stringify(pkPerson);

const fs = require("fs");
fs.writeFile('person_in_units.json', out);
