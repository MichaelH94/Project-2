const igdb = require('igdb-api-node').default;
const key = require('../config/keys.js')
const client = igdb(key.igdbConfig.key);
const log = response => {
    console.log(response.url, JSON.stringify(response.body));
};
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();
const app = require('./app')

let gameData = [];
let hypes = "";
let esrb = "";
let rating = "";
let name = "";
let summary = "";
let timetobeat = 1;
let imageUrl = "";

function igdbSearch(game) {
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

        gameData.push(JSON.stringify(response.body));
        gameData = JSON.parse(gameData)
        gameData = gameData[0];
        name = gameData.name;
        summary = gameData.summary;
        hypes = gameData.hypes;
        esrb = gameData.esrb;
        if(hypes == undefined) {
            hypes = 0;
        }
        if(esrb == undefined) {
            esrb = "N/A"
        } else {
            esrb = JSON.parse(gameData.esrb.rating)
        }
        if(rating == undefined) {
            rating = 0;
        }
        rating = gameData.rating;
        hltbSearch(game);
    });
 };


function hltbSearch(game) {
    hltbService.search(game).then(result => {
        timetobeat = result[0].gameplayMain;
        imageUrl = result[0].imageUrl;
        app.createGame(name, imageUrl, timetobeat, summary, hypes, rating, esrb)
    });
};
