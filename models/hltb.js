const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

let timeToBeat = function hltbSearch(game) {
    hltbService.search(game).then(result => {
        console.log(result)
    })
};

module.exports = timeToBeat;
