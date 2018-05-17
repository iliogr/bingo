"use strict";

import express from 'express'
import * as api from './api'
import bodyParser from 'body-parser'
import http from 'http'
import socketio from 'socket.io'

const app = express();
const server = http.Server(app)
const io = socketio(server);

app.use(bodyParser.json());
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

let socketMiddleware = (req, res, next) => {
    req.io = io;
    next();
}


app.get('/draw', socketMiddleware, api.draw)
app.get('/tickets', api.createTickets)
app.post('/verify/:id', api.verify)

server.listen(8888, () => {
   console.log("App listening on "+8888)
});

io.on('connection', function (socket) {
    console.log("A User has connected")
});
