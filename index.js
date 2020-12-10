// prepare and launch socket.io server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var behavior = require('./behaviors');
var functions = require('./functions');
var output = {};
var SocketCount = {"Current": 0, "All-time": 0};

// initialization: on start
let local = {};
output.HTTP_Request = behavior.HTTP_Request("https:\/\/discord.com\/api\/webhooks\/786526234409697280\/gHRlkZB9NQE9PsZzlyt6R_BHBxAMHON0O2RNOs38B-7XH03jB5Z_vwsvJkHzvVKIg6Zp",{},{},"Post","Encoded Form","Pog");

io.on('connection', function(socket) {
  SocketCount.Current++; SocketCount["All-Time"]++;
  
  socket.on('disconnect', function(reason) {
    SocketCount.Current--;
  });
  
  socket.on('console input', function(input) {
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});