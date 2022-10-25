// // Importing File Systems Module
// const fs = require('fs')
// //Importing http module from node.js to our project
// const http = require('http')
// const PORT = 4000

// // create a server
// const server = http.createServer(function (req, res) {
//   if (req.url === '/') {
//     fs.writeFile('home.html', '<h1>This is home page</h1>', function (error) {
//       if (error) {
//         console.log(error, 'This was the error')
//       }

//       // Just making sure that we will read a text
//       // res.writeHead(401, { 'content-type': 'text/html'});

//       // Status Code are the type of codes that you provide when someone is trying
//       // to access something from your server
//       // If a user is trying to access a resource that doesn't exist ,  404
//       // If a user is trying to access a resource that you are not allowed/authorized, 401
//       // If a user is trying to access a resource, and you are allowing it successfully, 200

//       // res.write(data);

//       return res.end()
//     })
//   }

//   if (req.url === '/home') {
//     fs.readFile('home.html', function (error, data) {
//       res.writeHead(200, { 'content-type': 'text/html' })

//       res.write(data)
//       res.end()
//     })
//   }
// })

// server.listen(PORT, function () {
//   console.log(`Server running at port ${PORT}`)
// })


// session 5 (Node.js)\filesystems> node .\index.js

const http = require('http');
const PORT = 4000;

const server = http.createServer((request, response) => {
    if (request.url=== "/"){
      response.setHeader('Content-Type', "text/html");
      response.write("<h1>Hello, tangina mo bobo! </h1>")

      response.end();
    }
})

server.listen(PORT, () => {
  console.log(`Server running at port`, PORT);
})
