const cheerio = require('cheerio');
const request = require('request-promise');
const axios = require("axios");
const fs = require("fs");
const pretty = require('pretty')

const url1 = "https://www.deviantart.com/nixeu/art/P-R-E-T-T-Y-Wallpaper-910284565";


request.get({
    url: "https://www.deviantart.com/nixeu/art/P-R-E-T-T-Y-Wallpaper-910284565",
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
        // 'cookie': 'cookie: auth=__71fdcf10ca0b8c5478a2%3B%22cb1e6e3917bc9c7cc0aea221abb7c727%22; auth_secure=__b5f9265703d64f4b2ec7%3B%222de47454385c9aaf7477d3ca9f784631%22; userinfo=__5790d7108f48f9c05fc0%3B%7B%22username%22%3A%22royalzeroo%22%2C%22uniqueid%22%3A%22e6235290420f606d792dadf3cdcfbf55%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-upt-1-b-1%7Ctao-nnc-1-a-3%7Ctao-ST3-1-a-5%7Ctao-TS1-1-b-10%7Ctao-SS1-1-b-6%22%7D; vd=__f29626fbc73782a11891%3B%22BiN4ZF%2CBiN4ZF%2CA%2CI%2CA%2C%2CB%2CA%2CB%2CBiN4ZF%2CBiN4fd%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; td=6:824x448%3B12:402x607',
        // 'referer': 'https://www.deviantart.com/nixeu/art/Mystic-Porcelain-Ahri-904451584',
        // 'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        // 'sec-ch-ua-mobile': '?0',
        // 'sec-ch-ua-platform': '"Windows"',
        // 'sec-fetch-dest': 'document',
        // 'sec-fetch-mode': 'navigate',
        // 'sec-fetch-site': 'same-origin',
        // 'sec-fetch-user': '?1',
        // 'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',

    }
}, function (err, resp, body) {

    // load the html into cheerio

    const $ = cheerio.load(body);
    console.log($);
    console.log(pretty($.html()));


    // const imgout = $(".ZCFTR");
    // // const imgout = datarow.find("ZCFTR").text();
    // $(".ZCFTR").each((i, data) => {
    //     const item = $(data).html();
    //     const item1 = $(data).html();
    //     const item2 = $(data).html();

    //     console.log($(item, item1, item2));
    // })




    // var list = [];
    // $('div').find('div > section > a').each(function (index, element) {
    //     list.push($(element).attr('href'));
    // });
    // console.dir(list);

});





// async function scrapeData() {
//     try {
//         const { data } = await axios.get(url);
//         const $ = cheerio.load(data);
//         console.log($);
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// scrapeData();


// 'https://www.deviantart.com/nixeu/art/P-R-E-T-T-Y-Wallpaper-910284565',
// 'https://www.deviantart.com/nixeu/art/P-R-E-T-T-Y-910284563',
// 'https://www.deviantart.com/nixeu/art/Yae-Miko-Anime-Study-910108334',
// 'https://www.deviantart.com/nixeu/art/Ridiculous-908953734',
// 'https://www.deviantart.com/nixeu/art/White-Light-908644292',
// 'https://www.deviantart.com/nixeu/art/Last-day-to-get-February-Rewards-908349639',
// 'https://www.deviantart.com/nixeu/art/ENCHANTED-Magazine-Spring-Session-Ahri-COVER-908152221',
// 'https://www.deviantart.com/nixeu/art/Y-A-E-907748825',
// 'https://www.deviantart.com/nixeu/art/A-Present-for-9S-907550967',
// 'https://www.deviantart.com/nixeu/art/Red-Chain-Makima-907036498'
// ]












// request("https://www.deviantart.com/nixeu/gallery", (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);

//         const datarow = $(".HeaderRow");
//         const output = datarow.find("th").text();
//         $(".DataRow").each((i, data) => {
//             const item = $(data).text();
//             const item1 = $(data).text();
//             const item2 = $(data).text();

//             // console.log(item, item1, item2);
//         })


//     }
// });


