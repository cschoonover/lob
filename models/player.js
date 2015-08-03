var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    id:         Number,
    jersey_no:  Number,
    name:       String,
    pos:        String,
    ht:         String,
    wt:         String,
    class_eligibility:String,
    hometown:   String
});

module.exports = mongoose.model('Player',playerSchema);