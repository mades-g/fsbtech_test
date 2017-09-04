var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'dist')));
console.log('Server running at port 3000');
app.listen(3000);