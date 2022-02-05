const express = require('express'); //express is a frameowkr for node.js that allows us to create a server/ creates backend
const app = express(); //creates an instance of express
const fs = require('fs'); //file system module
const cors = require('cors'); //cross-origin resource sharing(look it up on google and many errors can come with not incldun git)

app.use(cors());

//this is where the API is made

const names = [
	'james',
	'tyler',
	'ashwin',
	'chadwick'
];

app.get('/names', (req, res) => {
	let random = names[Math.floor(Math.random()*names.length)]; //find a random name from the names array
	res.send(JSON.stringify(random)); //send the random name as a JSON string to anyone who makes a get request to the api with the path  /names
	res.end();
});

app.listen(8000, () => { //run this app by typing in the terminal: node index.js; This will run/compile the code and run it on port 8000
	console.log('server running'); //this will creatre a server istance and then trigger the callback function which will print the message
});