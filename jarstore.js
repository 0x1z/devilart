const cheerio = require('cheerio');
let request = require('request-promise');
const axios = require("axios");
const fs = require("fs");
const pretty = require('pretty')

const url1 = "https://www.deviantart.com/nixeu/art/T-I-F-A-860196687";
cook = 'auth=__7d64de1cf2cff4ff68d8%3B%22464b1e95781f55acbc2259969460c876%22; auth_secure=__e59b4910108dc70dfd04%3B%2264fb526c5395128698f3ebd7d0ab9762%22; userinfo=__788613dd65dc5c285392%3B%7B%22username%22%3A%22royalzeroo%22%2C%22uniqueid%22%3A%22f6ddd58959f5ad5729a1b02c5e7fe430%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-upt-1-a-7%7Ctao-nnc-1-a-3%7Ctao-ST3-1-a-5%7Ctao-TS1-1-b-10%7Ctao-SS1-1-b-6%22%7D; vd=__ee6ada408a8a52ecebed%3B%22BiOVuI%2CBiOVuI%2CA%2CI%2CA%2C%2CB%2CA%2CB%2CBiOVuI%2CBiOWNV%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; td=6:824x324%3B12:364x485';
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });

async function main() {


    // const  loginResult =await request.post(
    //     "https://www.deviantart.com/users/login",
    //     {
    //         form:{
    //             username: "royalzeroo",
    //             password: "Deviantart!268724",
    //         }
    //     }
    // );

    // console.log(cookieJar.getCookieString("https://www.deviantart.com/nixeu/art/The-Call-Taliyah-905900996"));
    // const matches =await request.get("https://www.deviantart.com/nixeu/art/C-A-L-M-884999665");



    request.get({
        url: "https://www.deviantart.com/nixeu/art/The-Call-Taliyah-905900996",
        // url: "https://www.google.com",
        headers: {
            // 'authority': 'www.deviantart.com',
            // 'method': 'GET',
            // 'path': '/nixeu/gallery',
            // 'scheme': 'https',
            // 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            // 'accept-encoding': 'gzip, deflate, br',
            // 'accept-language': 'en-US,en;q=0.9,en-AU;q=0.8,en-IN;q=0.7,en-CA;q=0.6,en-GB;q=0.5',
            // 'cache-control': 'max-age=0',
            'cookie': cook,
            // 'referer': 'https://www.deviantart.com/nixeu/art/Mystic-Porcelain-Ahri-904451584',
            // 'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            // 'sec-ch-ua-mobile': '?0',
            // 'sec-ch-ua-platform': '"Windows"',
            // 'sec-fetch-dest': 'document',
            // 'sec-fetch-mode': 'navigate',
            // 'sec-fetch-site': 'same-origin',
            // 'sec-fetch-user': '?1',
            // 'upgrade-insecure-requests': '1',
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
        // console.dir(list);
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
        let file = fs.createWriteStream(`trial.jpg`);

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




main();