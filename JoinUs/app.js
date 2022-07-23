const express = require("express"); // Add express library package
const app = express(); //Execute the express package

app.listen(8080, function () {
	console.log("App listening on port 8080!");
}); //Set express to listen at port 8080 defaulting to localhost:8080 for a browser

app.get("/", (req, res) => {
	res.send("HELLO FROM OUR WEB APP!");
}); // localhost:8080/

app.get("/joke", (req, res) => {
	const joke =
		"What do you call a dog that does magic trocks? A labracadabrador.";
	console.log("REQUESTED THE JOKE ROUTE!");
	res.send(joke);
}); // localhost:8080/joke

app.get("/random_num", (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.send("Your lucky number is " + num);
}); // localhost:8080/random_num
