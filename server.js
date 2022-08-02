const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults({
    static: "./build",
});

const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(cors());
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);
server.listen(port, ()=>{
    console.log(`Server is runnung on ${port}`);
});