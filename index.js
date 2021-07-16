const express = require('express');
const path = require('path');

const server = express('server');

const homepageRequestHandler = (req, res) => {
     console.log('home page served successfully');
};

const aboutRequestHandler = (req, res) => {
     console.log('about page served successfully');
};

const contactRequestHandler = (req, res) => {
     console.log('contacts page served successfully');
};

const servicesRequestHandler = (req, res) => {
     console.log('services page served successfully');
};

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));

//route
server.get('./', homepageRequestHandler);
server.get('./about', aboutRequestHandler);
server.get('./contact', contactRequestHandler);
server.get('./services', servicesRequestHandler);

server.listen(3001, () => console.log('server is ready'));
