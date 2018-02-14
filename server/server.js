const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const {generateMessage} = require('./utils/message');
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

    socket.emit('newMessage', 
        generateMessage('Admin', 'Welcome to the chat app!'));

    socket.broadcast.emit('newMessage', 
        generateMessage('Admin', 'A new user has joined!'));


    socket.on('createMessage', (newMsg) => {        
        
        io.emit('newMessage',
            generateMessage(newMsg.from, newMsg.text)); 
        
        // socket.broadcast.emit('newMessage', {
        //     from: newMsg.from,
        //     text: newMsg.text,
        //     createdAt: new Date().getTime().toString()    
        // });        
    });
    
    socket.on('disconnect', (socket)=> {
        console.log('Disconnected from the user');                
    });
});

server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});