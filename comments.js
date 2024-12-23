// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the comments page
// 5. Create a route for a single comment
// 6. Create a route for the 404 page
// 7. Start the server

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  // 2. Create a route for the home page
  if (request.url === '/') {
    fs.readFile('./index.html', 'utf8', (err, data) => {
      response.write(data);
      response.end();
    });
  }

  // 3. Create a route for the about page
  else if (request.url === '/about') {
    fs.readFile('./about.html', 'utf8', (err, data) => {
      response.write(data);
      response.end();
    });
  }

  // 4. Create a route for the comments page
  else if (request.url === '/comments') {
    fs.readFile('./comments.html', 'utf8', (err, data) => {
      response.write(data);
      response.end();
    });
  }

  // 5. Create a route for a single comment
  else if (request.url === '/comments/1') {
    fs.readFile('./comment.html', 'utf8', (err, data) => {
      response.write(data);
      response.end();
    });
  }

  // 6. Create a route for the 404 page
  else {
    fs.readFile('./404.html', 'utf8', (err, data) => {
      response.write(data);
      response.end();
    });
  }
});

// 7. Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});