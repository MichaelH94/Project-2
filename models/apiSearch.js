const igdb = require('igdb-api-node').default;
const key = require('../config/keys.js')
const axios = require('axios');
const client = igdb(key.igdbConfig.key);
const log = response => {
    console.log(response.url, JSON.stringify(response.body));
};
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

console.log(key.igdbConfig.key);

function igdbPull(game) {
    client.games({
        limit: 5,
        offset: 0,
        search: game
    }, [
        'name',
        'rating',
        'hypes',
        'summary',
        'esrb'
    ]).then(response => {
        let gameData = []
        gameData.push(JSON.stringify(response.body));
        gameData = JSON.parse(gameData)
        gameData = gameData[0]
    });
 };


function hltbSearch(game) {
    hltbService.search(game).then(result => {
        console.log(result)
    })
};



 module.exports = igdbPull(game);