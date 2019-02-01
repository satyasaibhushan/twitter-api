console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

T.post('statuses/update', { status: 'helloworld!' }, function(err, data, response) {
  if (err) {
    var obj = {code: err.code,msg: err.message}
    console.log(obj)}
  else console.log(data.id)
  
})

  
