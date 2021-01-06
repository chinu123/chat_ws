const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8086 });

webSocketServer.on('connection', webSocket => {
  webSocket.on('message', message => {
    console.log('Received:', message);
    broadcast(message);
  });
});

function broadcast(data) {
  console.log(webSocketServer.clients);
  webSocketServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}
