// var app = require('express')();

// var http = require('http').createServer(app);
// var io = require('socket.io')(http)

const connection = new WebSocket('ws://localhost:8086');

connection.onopen = () => {
  console.log('connected');
};

connection.onclose = () => {
  console.error('disconnected');
};

connection.onerror = error => {
  console.error('failed to connect', error);
};

connection.onmessage = event => {
  console.log('received', event.data);
  let li = document.createElement('li');
  li.innerText = event.data;
  document.querySelector('#chat').append(li);
};

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  let message = document.querySelector('#message').value;
  connection.send(message);
  document.querySelector('#message').value = '';
});

// app.get('/', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(__dirname+ '/index.html');
// })


// http.listen(9000, () => {
//   console.log('listening on *:3000');
// })
