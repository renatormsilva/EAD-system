const { urlencoded } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const server = express();

server.use(urlencoded({extended: true}))

server.use(express.static('public'));
server.use(express.static('photos'));

server.set("view engine", "njk")

server.use(routes)

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
});


server.listen(5000, function(){
    console.log("Server is running");
});