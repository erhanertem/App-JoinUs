const mysql = require("mysql"); // Add mysql package
const express = require("express"); // Add express package
const app = express(); //Execute the express package

app.listen(8080, function () {
	console.log("App listening on port 8080!");
}); //Set express to listen at port 8080 defaulting to localhost:8080 for a browser

const connection = mysql.createConnection({
	host: "localhost",
	user: "root", // your root username
	password: "password", // your root user's password
	database: "join_us", // the name of your db
	port: "3306", // mySQL db port
}); //Set connection with mysql database called join_us @ port 3306

app.get("/", (req, res) => {
	// Find count of users in db
	const q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function (error, results) {
		if (error) throw error;
		let count = results[0].count;
		res.send("We have " + count + " users in our db");
	}); // Respond with the statement incorporating count info retreived from db
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
