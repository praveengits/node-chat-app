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

    socket.emit('newMessage', {
        from: 'sindy',
        text: 'Hello',
        createdAt: new Date().getTime().toString()
    });

    socket.on('createMessage', (newMsg) => {
        console.log('createEmail', newMsg);    
        
        io.emit('newMessage', {
            from: newMsg.from,
            text: newMsg.text,
            createdAt: new Date().getTime().toString()    
        });    
    });
    
    socket.on('disconnect', (socket)=> {
        console.log('Disconnected from the user');                
    });
});

server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});