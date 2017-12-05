const json = `(input json)`;

const datas = JSON.parse(json);
let unitList = {};
for (let index in datas) {
    const unit = {
        "id": index,
        "name": datas[index]['unit'],
        "member": datas[index]['member']
    };
    unitList[index.toString()] = unit;
}

const fs = require("fs");
fs.writeFile('unit_data-normalized.json', JSON.stringify(unitList));
