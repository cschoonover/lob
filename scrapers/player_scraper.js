var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var dbConfig = require('../db');
// Connect to DB
mongoose.connect(dbConfig.url);


var url = 'http://espn.go.com/mens-college-basketball/teams';
var ROSTER_PAGE_URL = 'http://espn.go.com/mens-college-basketball/team/roster/_/id/<TEAM_ID>/';
var TEAM_ID_PLACEHOLDER = '<TEAM_ID>';

var err_ct = 0;

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

var Player = mongoose.model('Player',playerSchema)

request(url, (function(err, resp, body) {
    if (err) throw err;
    $ = cheerio.load(body);
    $('h5').each(function(team) {
        var teamurl = $(this).find('a').first().attr('href');
        var teamid = teamurl.split('/')[7]; //id is in the 7th place in the URL
        var teamname = $(this).text().trim();
        teamurl = ROSTER_PAGE_URL.replace(TEAM_ID_PLACEHOLDER, teamid);
        // console.log(url)
        // console.log(teamurl);
        console.log(teamname);
        player_request(url,teamurl);
    });
    // player_request('http://espn.go.com/mens-college-basketball/teams', 'http://espn.go.com/mens-college-basketball/team/roster/_/id/3084/');
}));



var player_request = function(params, urldata) {
    console.log(urldata);
    request(urldata, (function(err_t, resp_t, body_t) {
        if (err_t) throw err_t;
        $ = cheerio.load(body_t);
        $('tr').each(function(row_num) {
            //messed up way to ignore the first 2 rows (col headers)
            if (row_num > 1) {
                var attributes = $(this).find('td').map(function() {
                    //return connection.escape($(this).text());
                    return ($(this).text());
                });
                var player_id = $(this).find('a').first().attr('href').split('/')[7];
                //attributes = ['\'' + player_id + '\''].concat(attributes);
                var temp_player = new Player({
                    id: player_id,
                    name: attributes[1],
                    jersey_no: attributes[0],
                    pos:        attributes[2],
                    ht:         attributes[3],
                    wt:         attributes[4],
                    class_eligibility:attributes[5],
                    hometown:   attributes[6]
                });
                console.log(temp_player.toString());
                temp_player.save(function (err, temp_player) {
                    if (err) return console.error(err);});
            }

        });
    }))
}
