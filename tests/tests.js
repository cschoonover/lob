var mongoose = require('mongoose');
var dbConfig = require('../db');
// Connect to DB
mongoose.connect(dbConfig.url);

var Schema = mongoose.Schema;

var playerSchema = new Schema({
    id:         Number,
    jersey_no:  Number,
    name:       String,
    pos:        String,
    ht:         String,
    wt:         String,
    class_eligibility:String,
    hometown:   String
});

var Player = mongoose.model('Player',playerSchema);

console.log("find players");

Player.count({name:/Justin/i},function (err, players) {
  if (err) return console.error(err);
  console.log(players);
});
console.log("find players done");