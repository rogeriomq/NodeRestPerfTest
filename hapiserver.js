'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.Server({port: 8000});
// server.connection({ 
//     host: 'localhost', 
//     port: 8000 
// });

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, h) {
        // return reply('Hello World!').header('Connection', 'close');
        return 'Hello World!'
    }
});

// // Start the server
// server.start((err) => {

//     if (err) {
//         throw err;
//     }
//     console.log('Server running at:', server.info.uri);
// });
server.events.on('route', (route) => {
    console.log(`New route added: ${route.path}`)
})
server.events.on('start', (route) => {
    console.log('Server started...', route)
})

server.start()