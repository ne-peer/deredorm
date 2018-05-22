const baseJson = require( "../../master/core/unit_list-export.json" );
const overviewJson = require( "../../master/core/dere_overview-export.json" );
const newJson = [];

const getMemberLatestCard = name => {
  const cards = overviewJson[name]['sldb_cards'];
  const lc = cards[cards.length-1];
  return lc;
};

const getMemberId = name => {
  return overviewJson[name]['id'];
};

for (const key in baseJson) {
  const cUnit = baseJson[key];

  const members = cUnit['member'];
  const newMembers = [];
  for (const name of members) {
    const id = getMemberId(name);
    const latestCard = getMemberLatestCard(name);
    newMembers.push({id: id, lc: latestCard, name: name});
  }

  const newUnit = {id: cUnit['id'], member: newMembers, name: cUnit['name']};
  // console.log(newUnit);

  newJson.push(newUnit);
}


const fs = require("fs");
fs.writeFile('../../master/core/unit_list-export-2.json', JSON.stringify(newJson));
