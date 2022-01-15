var express = require('express');
var app = express();
var morgan = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var crypto = require('./routers/cryptoRouter')

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({limit: '10mb'}));

app.use('/crypto', crypto);


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});