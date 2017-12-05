const request = require('request');
const cheerio = require('cheerio');
const fs = require("fs");

const url = 'https://dic.pixiv.net/a/%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA%E3%81%AE%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E4%B8%80%E8%A6%A7';

request({ url }, (err, res, body) => {
    const $ = cheerio.load(body);

    if (!err) {

        const unitFinder = new Promise((resolve, reject) => {
            let unitList = [];

            $('th a').each((i, elem) => {
                const unitName = elem.children[0]['data'];
                unitList.push(unitName);

                if (unitName === 'ニュージェネレーション' || unitName === '蒼ノ楽団' || unitName === 'シンデレラドリーム'
                 || unitName === 'P.C.S') {
                    unitList.pop();
                }
            });

            resolve(unitList);
        });

        const memberFinder = new Promise((resolve, reject) => {
            let memberList = [];

            try {
                $('td').each((i, elem) => {
                    const parent = $(elem).find('a');
                    if (parent.length > 0) {
                        let childList = [];
                        $(parent).each((ci, celem) => {
                            let text = $(celem).text();
                            if (text.length < 2) {
                                text = '';
                            }
                            childList[ci] = text;
                        });
                        if (childList.length > 0) {
                            memberList.push(childList);
                        }
                    }
                });
                resolve(memberList);
            } catch (e) {
                console.log(e);
            }
        });

        Promise.all([
            unitFinder,
            memberFinder
        ]).then((data) => {
            const units = data[0];
            const members = data[1];
            const length = units.length;

            let unitMemberList = [];
            for (let key = 0; key < length; key++) {
                const member = members.shift();
                const unit = units.shift();
                
                unitMemberList.push({
                    member: member,
                    unit: unit
                });
            }

            fs.writeFile('out.json', JSON.stringify(unitMemberList));
        });
    } else {
        console.log(err);
    }

});

