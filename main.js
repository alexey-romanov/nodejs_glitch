import http from "node:http";
import express from 'express';
import morgan from 'morgan';

const app = express();

const server = http.createServer(app);

const host = "0.0.0.0";
const port = 8000;

app.use(morgan('common'))

app.get("/", (req, res) => {
    res.send('Hello! Test');
});
// app.use(express.static("client")); // Middleware

server.listen(port, host, () => {
    console.log(`Server started ${host}:${port}`);
});

