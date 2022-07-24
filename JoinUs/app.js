const mysql = require("mysql"); // Add mysql package
// const bodyParser = require("body-parser"); //Add bodyparser API package
const express = require("express"); // Add express package
const app = express(); //Execute the express package
const port = 8080;
app.set("view engine", "ejs"); // set the view engine to ejs for express
// app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
// bodyParser is no longer needed as urlencoded middleware is provided by express natively
app.use(express.urlencoded({ extended: true })); // Use express native middleware
app.use(express.static(__dirname + "/public")); // Use express native middleware which serves static assets from a root directory. Basically, takes all the contents in the public directory and serve them so they are accessible by our views or from our javascript
app.use(express.static(__dirname + "/img")); // Similar above, introduce the img folder to express
app.listen(port, function () {
	console.log("App listening on port ${port}!");
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
		res.render("home", { count: count, title: "Home Page" });
	}); // Respond with the statement incorporating count info retreived from db
}); // localhost:8080/

app.post("/register", (req, res) => {
	// console.log(req.body);
	// console.log("POST REQUEST SENT TO /REGISTER EMAIL IS " + req.body.email);
	// NOTE: name="email" @ input html tag is referred req.body.email
	const person = { email: req.body.email };
	connection.query(
		"INSERT INTO users SET ?",
		person,
		function (error, results) {
			if (error) throw error;
			// console.log(results);
			// res.send("Thanks for joining our wait list!");
			res.redirect("/");
		},
	);
}); // Define a post route

// app.get("/", (req, res) => {
// 	// Find count of users in db
// 	const q = "SELECT COUNT(*) AS count FROM users";
// 	connection.query(q, function (error, results) {
// 		if (error) throw error;
// 		let count = results[0].count;
// 		res.send("We have " + count + " users in our db");
// 	}); // Respond with the statement incorporating count info retreived from db
// }); // localhost:8080/

// app.get("/joke", (req, res) => {
// 	const joke =
// 		"<strong>What do you call a dog that does magic trocks?</strong><em> A labracadabrador.</em>";
// 	console.log("REQUESTED THE JOKE ROUTE!");
// 	res.send(joke);
// }); // localhost:8080/joke

// app.get("/random_num", (req, res) => {
// 	const num = Math.floor(Math.random() * 10) + 1;
// 	res.send("Your lucky number is " + num);
// }); // localhost:8080/random_num
