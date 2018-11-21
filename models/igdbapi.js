const igdb = require('igdb-api-node').default;
const key = require('../config/keys.js')
const axios = require('axios');
const client = igdb("4d01877d1be45b92d86ab21fe32821c0");
const log = response => {
    console.log(response.url, JSON.stringify(response.body));
};


var game = "Dark Souls";


client.games({
    limit: 5,
    offset: 0,
    search: "Halo"
}, [
    'name',
    'genre',
    'rating',
    'hypes'
]).then(response => {
    let test = []
    test.push(JSON.stringify(response.body));
    test = JSON.parse(test)
    test = test[0]
    console.log(test.id, test.name, test.rating)
});


// module.exports = igdbPull(game);