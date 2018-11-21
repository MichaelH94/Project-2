let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();
let placeholder = "dark souls"
let timeToBeat = function hltbSearch(game) {
    hltbService.search(game).then(result => {
        console.log(result)

    })
};

timeToBeat(placeholder)
module.exports = timeToBeat;
