const cheerio = require('cheerio');
let request = require('request-promise');
const axios = require("axios");
const fs = require("fs");
const pretty = require('pretty');


cook = 'auth_secure=__f1045e22d7268cb1fa50%3B%22b88b8bfec344eeb7beccdfc3ff760a3c%22; userinfo=__0b244432b8a36c984753%3B%7B%22username%22%3A%22royalzeroo%22%2C%22uniqueid%22%3A%22589e19d3469c7e459aaa206a3730d82a%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-upt-1-b-1%7Ctao-nnc-1-a-3%7Ctao-ST3-1-a-5%7Ctao-TS1-1-b-10%7Ctao-SS1-1-b-6%22%7D; auth=__4b39c77a4597fcfc440d%3B%220797d1d8e0f0fc80fae21d992cb4ad6d%22; vd=__ba147266be0b1e362f0e%3B%22BiN4ZF%2CBiOVtk%2CA%2CE%2CA%2C%2CB%2CA%2CB%2CBiOZq7%2CBiOZur%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; td=0:944%3B6:881x324%3B7:1000%3B12:108x485.6000061035156%3B13:936%3B20:879';
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });

var list = [];
let temgen = '';
// const url1 = "https://www.deviantart.com/nixeu/gallery/all";
var i = 0;
for (i = 0; i < 2; i++) {
    genurl = (`https://www.deviantart.com/nixeu/gallery/all?page=${i}`);



    request.get({
        url: genurl,
        headers: {
            'cookie': cook,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',

        }
    }, function (err, resp, body) {

        // load the html into cheerio
        const $ = cheerio.load(body);
        // console.log($.html());


        $('div').find('div > section > a').each(function (index, element) {
            if ($(element).attr('href')) {
                list.push($(element).attr('href'));

            }
        });
        // console.dir(list);



        //for loop dl
        for (var i in list) {
            console.log(list[i]);
            temgen = String(list[i]);
            request.get({

                url: temgen,
                headers: {
                    'cookie': cook,
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36',

                }
            }, function (err, resp, body) {


                const $ = cheerio.load(body);
                // console.log($);
                console.log(pretty($.html()));

                var list = [];
                $('div').find('div > a').each(function (index, element) {
                    if ($(element).attr('href')) {
                        list.push($(element).attr('href'));

                    }
                });

                var lgth = 0;
                var longest;
                console.log(list.length);

                for (var i = 0; i < list.length; i++) {
                    console.log(list[i].length);
                    if (list[i].length > lgth) {
                        var lgth = list[i].length;
                        longest = list[i];
                    }
                }

                console.log(longest);
                const request = require('request');

                /* Create an empty file where we can save data */
                let file = fs.createWriteStream(`trial${i}.jpg`);

                /* Using Promises so that we can use the ASYNC AWAIT syntax */
                new Promise((resolve, reject) => {
                    let stream = request.get({
                        /* Here you should specify the exact link to the file you are trying to download */
                        uri: longest,
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
                            'Cache-Control': 'max-age=0',
                            'Connection': 'keep-alive',
                            //     'Upgrade-Insecure-Requests': '1',
                            'cookie': cook,

                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                        },
                        /* GZIP true for most of the websites now, disable it if you don't need it */
                        // gzip: true
                    })
                        .pipe(file)
                        .on('finish', () => {
                            console.log(`The file is finished downloading.`);
                            resolve();
                        })
                        .on('error', (error) => {
                            reject(error);
                        })
                })
                    .catch(error => {
                        console.log(`Something happened: ${error}`);
                    });
            });

        }




    });

}







// part 2 for the genrated container links

// async function main() {


// for (i = 0; i <= list.length; i++) {
//     console.log(list[i]);

    //     request.get({
    //         url: list[i],
    //         headers: {
    //             'cookie': cook,
    //             'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36',

    //         }
    //     }, function (err, resp, body) {


    //         const $ = cheerio.load(body);
    //         // console.log($);
    //         console.log(pretty($.html()));

    //         var list = [];
    //         $('div').find('div > a').each(function (index, element) {
    //             if ($(element).attr('href')) {
    //                 list.push($(element).attr('href'));

    //             }
    //         });

    //         var lgth = 0;
    //         var longest;
    //         console.log(list.length);

    //         for (var i = 0; i < list.length; i++) {
    //             console.log(list[i].length);
    //             if (list[i].length > lgth) {
    //                 var lgth = list[i].length;
    //                 longest = list[i];
    //             }
    //         }

    //         console.log(longest);
    //         const request = require('request');

    //         /* Create an empty file where we can save data */
    //         let file = fs.createWriteStream(`trial.jpg`);

    //         /* Using Promises so that we can use the ASYNC AWAIT syntax */
    //         new Promise((resolve, reject) => {
    //             let stream = request.get({
    //                 /* Here you should specify the exact link to the file you are trying to download */
    //                 uri: longest,
    //                 headers: {
    //                     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //                     'Accept-Encoding': 'gzip, deflate, br',
    //                     'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
    //                     'Cache-Control': 'max-age=0',
    //                     'Connection': 'keep-alive',
    //                     //     'Upgrade-Insecure-Requests': '1',
    //                     'cookie': cook,

    //                     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    //                 },
    //                 /* GZIP true for most of the websites now, disable it if you don't need it */
    //                 // gzip: true
    //             })
    //                 .pipe(file)
    //                 .on('finish', () => {
    //                     console.log(`The file is finished downloading.`);
    //                     resolve();
    //                 })
    //                 .on('error', (error) => {
    //                     reject(error);
    //                 })
    //         })
    //             .catch(error => {
    //                 console.log(`Something happened: ${error}`);
    //             });
    //     });

    // }

// }





// main();