
var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);



app.get('/', function(req, res) {
  res.sendFile( __dirname + '/cod.html');
});


io.on('connection', function(socket) {
  
  console.log('Usuario en linea');

  socket.on('nuevo mensaje', function(msj) {
    io.emit('nuevo mensaje', msj);
  });
  
  
  socket.on('disconnect', function() {
    console.log('Usuario fuera de linea');
  });
  
});


http.listen(9000, function() {
  console.log('listening on *:9000');
});