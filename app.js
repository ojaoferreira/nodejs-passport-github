require('dotenv').config();

const express = require('express');
const app = express();
const passport = require('./src/middleware/security');
const bodyParser = require('body-parser');
const session = require('express-session');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3333;

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./src/index')(app);

app.listen(PORT, HOST, () => console.log(`Express server is running on http://${HOST}:${PORT}`));