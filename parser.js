import cheerio from 'cheerio';
import axios from 'axios';

async function parseDollar() {
    const html = await axios.get('https://bigpara.hurriyet.com.tr/doviz/dolar/')

    const $ = cheerio.load(html.data)
    var target = $(".kurBox").find(`.value`).text();

    target = target.slice(0,5);

    return target;
}

async function parseEuro() {
    const html = await axios.get('https://bigpara.hurriyet.com.tr/doviz/euro/')

    const $ = cheerio.load(html.data)
    var target = $(".kurBox").find(`.value`).text();

    target = target.slice(0,5);

    return target;
}

async function parseGold() {
        
    const html = await axios.get('https://bigpara.hurriyet.com.tr/altin/gram-altin-fiyati/')

    const $ = cheerio.load(html.data)
    var target = $(".kurBox").find(`.value*`).text();

    target = target.slice(8,-3);

    return target;
}

export { parseDollar, parseEuro, parseGold };