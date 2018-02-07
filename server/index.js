const http = require('http')
const request = require('request');

const port = process.env.PORT || 3000;

const requestHandler = (req, response) => {
  console.log(req.url)
  request.get('http://ipecho.net/plain', (_, res) => {
    response.end('Your IP is ' +  res.body);
  });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
