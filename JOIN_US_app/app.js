/////////////////////////////////////////////////
/////////////////////////////////////////////////
// faker npm package loader//////////////////////
const { faker } = require("@faker-js/faker");
// my sql loader/////////////////////////////////
const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root", // your root username
	password: "password", // your root user's password
	database: "join_us", // the name of your db
	port: "3306",
});
// CHECK APP CONNECTION
// const port = process.env.PORT || 5000;
// app.listen(port);
// console.log("App is listening on port" + port);
////////////////////////////////////////////////
////////////////////////////////////////////////
// // SELECTING DATA
// const q = "SELECT * FROM users";

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// });
// connection.end();
// // INSERTING DATA
// const q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@yahoo.com")';

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// });
// connection.end();
// INSERTING DATA GEN 2
const person = {
	email: "Jenny467@gmail.com",
};
// NOTE: Behind the scene mysql node actually interprets it as 'INSERT INTO users (email) VALUES ("Jenny467@gmail.com")`

connection.query("INSERT INTO users SET ?", person, function (err, result) {
	if (err) throw err;
	console.log(result);
});
connection.end();

// function generateAddress() {
// 	console.log(faker.address.streetAddress());
// 	console.log(faker.address.city());
// 	console.log(faker.address.state());
// }

// generateAddress();
// generateAddress();
// generateAddress();
