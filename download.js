
//html and cdn downloaders

// longest = 'https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png';
// const http = require('https'); // or 'https' for https:// URLs
// const fs = require('fs');

// const file = fs.createWriteStream("file.jpg");
// const request = http.get(longest, function (response) {
//     response.pipe(file);
// });


const fs = require('fs')
const request = require('request');

/* Create an empty file where we can save data */
let file = fs.createWriteStream(`trial.html`);

/* Using Promises so that we can use the ASYNC AWAIT syntax */
new Promise((resolve, reject) => {
    let stream = request.get({
        /* Here you should specify the exact link to the file you are trying to download */
        uri: 'https://www.deviantart.com/download/905900996/dezclok-bd01c941-7d70-43f4-9f58-25b45f160240.jpg?token=2e2747b56f8eb847f7a35c9c922dc8e674bb796d&ts=1647928794',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            //     'Upgrade-Insecure-Requests': '1',
            'cookie': 'auth=__7d64de1cf2cff4ff68d8%3B%22464b1e95781f55acbc2259969460c876%22; auth_secure=__e59b4910108dc70dfd04%3B%2264fb526c5395128698f3ebd7d0ab9762%22; userinfo=__788613dd65dc5c285392%3B%7B%22username%22%3A%22royalzeroo%22%2C%22uniqueid%22%3A%22f6ddd58959f5ad5729a1b02c5e7fe430%22%2C%22dvs9-1%22%3A1%2C%22ab%22%3A%22tao-upt-1-a-7%7Ctao-nnc-1-a-3%7Ctao-ST3-1-a-5%7Ctao-TS1-1-b-10%7Ctao-SS1-1-b-6%22%7D; vd=__ee6ada408a8a52ecebed%3B%22BiOVuI%2CBiOVuI%2CA%2CI%2CA%2C%2CB%2CA%2CB%2CBiOVuI%2CBiOWNV%2CA%2CA%2CA%2CA%2C13%2CA%2CB%2CA%2CA%2CA%2CA%2CB%2CA%2CA%2C%22; td=6:824x324%3B12:364x485',

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


