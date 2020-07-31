var http = require('http');

timeStamp = new Date().toString(); //getting local date and time from computer's user
month = new Date().getMonth();
month++;
if(month<10)
    month = '0' + month;

finalDateTime = timeStamp.substring(11,15) + '-'+ month +'-' + timeStamp.substring(8,10) + '-T' + timeStamp.substring(16,18) + ':' + timeStamp.substring(19,21) + 'Z';

dateTime = {currentDateTime: finalDateTime}; //setting up json with data and time formatted

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(dateTime));
}).listen(8080);
