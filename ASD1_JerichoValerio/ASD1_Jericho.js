// Importing http module from node.js to our project
const http = require("http");
const PORT = 5000;

// Create a server
const server = http.createServer((request, response) => {
  response.setHeader("Content-type", "text/html");

  if (request.url === "/dog") {
    // Setting headers to text and html so the browser knows what
    // kind of response i will recieve
    // We are sending a response to the client/browser using response.write
    response.write(
      " <img src='https://www.akc.org/wp-content/uploads/2017/11/French-Bulldog-puppy-standing-in-the-grass-holding-a-ball-in-its-mouth.jpg' alt='alternatetext'> "
    );

    // Ending the response
    response.end();
  }

  if (request.url === "/cat") {
    response.write(
      " <img src='https://upload.wikimedia.org/wikipedia/commons/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg' alt='alternatetext'> "
    );
    response.end();
  }

  if (request.url === "/user") {
    // Setting headers to text and html so the browser knows what
    // kind of response i will recieve

    // We are sending a response to the client/browser using response.write
    response.write("<h1>Hello User! </h1>");

    // Ending the response
    response.end();
  }
});

// Listen a server
server.listen(PORT, () => {
  console.log("My Server is running on port", PORT);
});
