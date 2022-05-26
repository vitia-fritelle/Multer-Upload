import WebSocket from "ws";

const WebSocketServer = new WebSocket.Server({
    port: 3000,
});

WebSocketServer.on("connection", (socket) => {
    socket.on("message", (file) => {
        setTimeout(() => socket.send(file), 1500);
    });
});
