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
	port: "3306", // mySQL db port
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
// // INSERTING DATA GEN 2 - SINGLE INPUT
// const person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past(),
// };
// // NOTE: Behind the scene mysql node actually interprets it as 'INSERT INTO users (email) VALUES ("Jenny467@gmail.com")`
// const end_result = connection.query(
// 	"INSERT INTO users SET ?",
// 	// NOTE: for ? syntax, refer to mysql node manuel for further information
// 	person,
// 	function (err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 	},
// );
// connection.end();

// console.log(end_result);
// Solicit the information sendby the mysql node to mysql

// // INSERTING DATA GEN 2 - MULTIPLE INPUT
// // mysql node documentation asks for an array for multiple inputs
const data = [];
for (let i = 0; i < 500; i++) {
	data.push([faker.internet.email(), faker.date.past()]);
}

console.log(data);
const q = "INSERT INTO users (email, created_at) VALUES ?";

connection.query(q, [data], function (err, result) {
	if (err) throw err;
	console.log(result);
});
connection.end();
