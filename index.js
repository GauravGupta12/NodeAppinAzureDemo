var http = require('http');

const express = require('express'); // import * as express from 'express';
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

var cats = [{name:'Lily'}, {name: 'Lucy'}];

var corOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corOptions));
app.listen(3000,() =>{
    console.log('Server started :)');
});
app.route('/api/cats').get((req, res) =>{
    console.log(req.hostname);
    console.log(req);
    res.send(cats);
});
app.route('/api/cats/:name').get((req,res) =>{
    var requestedCatName = req.params['name'];
    // res.send({ name: requestedCatName });
    res.send(cats.find(cat => cat.name.toLocaleLowerCase() === requestedCatName.toLocaleLowerCase()));
});

app.use(bodyparser.json());
app.route('/api/cats').post((req,res) =>{
    res.send(201, req.body);
});

app.route('/api/cats/:name').put((req,res) =>{
    res.send(200, req.body);
});

app.route('/api/cats').delete((req,res) =>{
    res.sendStatus(204);
});



// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hi there, here's demo for deployinhg a nodejs application in azure!");

// });

// var port = process.env.PORT || 1337;
// server.listen(port);

console.log("Server running at http://localhost:%d", port);
