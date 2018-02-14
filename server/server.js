const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
    console.log('New user connected!');
    
});

io.on('connection',(socket) => {
    console.log('New user connected!');
    
    socket.on('disconnect', (socket)=> {
        console.log('Disconnected from the user');                
    });
});


// app.get('/', (req, res) => {
//     res.render('index.html');
// });

server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});