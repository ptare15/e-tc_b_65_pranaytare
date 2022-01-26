const express = require("express");
var user = require('./pranay_db');
const port = 8080;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use('/user', user);

app.use(function(req, res, next) {
	res.status(404);
	res.send('404: File Not Found');
});

app.listen(process.env.PORT || port, () => {
	console.log("listening 8080...");
});