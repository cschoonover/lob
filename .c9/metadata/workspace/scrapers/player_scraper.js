{"filter":false,"title":"player_scraper.js","tooltip":"/scrapers/player_scraper.js","undoManager":{"mark":10,"position":10,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"insert","lines":["dhh@2015"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["dhh@2015"]},{"start":{"row":0,"column":0},"end":{"row":57,"column":0},"action":"insert","lines":["var request = require('request');","var cheerio = require('cheerio');","var mysql = require('mysql2');","","var connection = mysql.createConnection({","    user: 'uglycoffeecan',","    database: 'c9'","});","","var url = 'http://espn.go.com/mens-college-basketball/teams';","var ROSTER_PAGE_URL = 'http://espn.go.com/mens-college-basketball/team/roster/_/id/<TEAM_ID>/'","var TEAM_ID_PLACEHOLDER = '<TEAM_ID>';","var INSERT_STATEMENT = 'INSERT INTO scraped_players_tbl (ESPN_id, fullname, pos, ht, wt, class, hometown) values (?)';","","var err_ct = 0;","","request(url, (function(err, resp, body) {","    if (err) throw err;","    $ = cheerio.load(body);","    $('h5').each(function(team) {","        var teamurl = $(this).find('a').first().attr('href');","        var teamid = teamurl.split('/')[7]; //id is in the 7th place in the URL","        var teamname = $(this).text().trim();","        teamurl = ROSTER_PAGE_URL.replace(TEAM_ID_PLACEHOLDER, teamid)","        console.log(teamurl);","        console.log(teamname);","        player_request(url,teamurl);","    });","}))","","var player_request = function(params, urldata) {","    console.log(urldata);","    request(urldata, (function(err_t, resp_t, body_t) {","        if (err_t) throw err_t;","        $ = cheerio.load(body_t);","        $('tr').each(function(row_num) {","            //messed up way to ignore the first 2 rows (col headers)","            if (row_num > 1) {","                var attributes = $(this).find('td').map(function() {","                    return connection.escape($(this).text());","                });","                var player_id = $(this).find('a').first().attr('href').split('/')[7];","                attributes = ['\\'' + player_id + '\\''].concat(attributes);","                var sql = 'INSERT INTO scraped_players_tbl (ESPN_id, jersey_no, fullname, pos, ht, wt, class, hometown)  values (' + attributes + ')';","                console.log(sql);","                connection.query(sql, function(sql_err, results) {","                    if (sql_err !== null) {","                        err_ct++;","                        console.log('Total errors: ' + err_ct);","                    }","                });","","            }","","        });","    }))","}",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":30},"action":"remove","lines":["var mysql = require('mysql2');"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":33},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["var connection = mysql.createConnection({","    user: 'uglycoffeecan',","    database: 'c9'","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":["// "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["// "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["// "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["// "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["// "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"insert","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["// "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"insert","lines":["// "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"insert","lines":["// "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"remove","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"remove","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"remove","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"remove","lines":["// "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"remove","lines":["// "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":3},"action":"remove","lines":["// "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"remove","lines":["// "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"remove","lines":["// "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"remove","lines":["// "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"remove","lines":["// "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"remove","lines":["// "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"remove","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"remove","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"remove","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"remove","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"remove","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"remove","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"remove","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"remove","lines":["// "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"remove","lines":["// "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"remove","lines":["// "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":21,"column":10},"action":"remove","lines":["//"]}]}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":34,"column":27},"end":{"row":34,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1429819909000,"hash":"93fd6bb740c4798f7a00476c9ec3f808aec72542"}