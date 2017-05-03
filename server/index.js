var express = require('express');
var app = express();

app.use(express.static('./client/dist'));

// app.get('/', function(req, res) {
//   res.send('Hello World');
// });

app.listen(1337, function() {
  console.log('React-ory listening on port 1337');
});