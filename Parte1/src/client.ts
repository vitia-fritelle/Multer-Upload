import fs from "fs";
import http from "http";

const index = fs.readFileSync("./views/index.html");

const server = http.createServer((_req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(index);
});

server.listen(8080);
