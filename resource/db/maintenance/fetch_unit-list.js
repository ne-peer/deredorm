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
                unitList[i] = unitName;

                if (unitName === 'ニュージェネレーション' || unitName === '蒼ノ楽団' || unitName === 'シンデレラドリーム'
                 || unitName === 'P.C.S') {
                    unitList.splice(i, 1);
                }
            });

            resolve(unitList);
        });

        const nameFinder = new Promise((resolve, reject) => {
            let nameList = [];

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
                            nameList.push(childList);
                        }
                    }
                });
                resolve(nameList);
            } catch (e) {
                console.log(e);
            }
        });

        Promise.all([
            unitFinder,
            nameFinder
        ]).then((data) => {
            const units = data[0];
            const names = data[1];
            const length = units.length;

            let urlList = [];
            for (let key = 0; key < length + 1; key++) {
                const name = names.shift();
                const unit = units.shift();
                
                // "new generations"の次にnull haitgtteru
                if (name == undefined || unit == undefined) {
                    continue;
                }

                urlList[key] = {
                    name: name,
                    unit: unit
                };
            }

            fs.writeFile('out.json', JSON.stringify(urlList));
        });
    } else {
        console.log(err);
    }

});

