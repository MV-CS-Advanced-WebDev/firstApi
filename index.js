const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());

// http://localhost:8000

const names = [
	'james',
	'tyler',
	'ashwin',
	'chadwick'
];

app.get('/names', (req, res) => {
	let random = names[Math.floor(Math.random()*names.length)];
	res.send(JSON.stringify(random));
	res.end();
});

app.listen(8000, () => {
	console.log('server running');
});