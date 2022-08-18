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
// // NOTE: Behind the scene mysql node actually interprets it as 'INSERT INTO users (email) VALUES ("Jenny467@gmail.com")` In this example person is a JS object. Since the SQL querry phrase is "INSERT INTO users SET ?", it would require an object input so that it could acquire (email, created_at) and (faker.internet.email(),faker.date.past()) data couples internally.
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
// mysql node documentation asks for an array for multiple inputs
// const data = [];
// for (let i = 0; i < 500; i++) {
// 	data.push([faker.internet.email(), faker.date.past()]);
// }
// console.log(data);
// const q = "INSERT INTO users (email, created_at) VALUES ?";

// connection.query(q, [data], function (err, result) {
// 	if (err) throw err;
// 	console.log(result);
// });
// connection.end();
// NOTE: mysql npm manual tallks about deep destructuring nested arrays into grouped lists.  So when  SQL querry phrase is "INSERT INTO users (email, created_at) VALUES ?" where (email, created_at) is given already inside it only the data couples are required. So, [data] extracts the data as [...],[...],[...] and per documentation these are turned into ("x","x"), ("x","x"),....

// // Coding Challenge: LECTURE 299 QUIZ
// //1st Challange
// const q =
// 	'SELECT DATE_FORMAT(created_at, "%b %D %Y") AS earliest_date FROM users ORDER BY created_at LIMIT 1';
// connection.query(q, function (error, results) {
// 	if (error) throw error;
// 	console.log(results[0].earliest_date);
// });
// connection.end();

// // 2nd Challange
// const q = "SELECT email, created_at FROM users ORDER BY created_at LIMIT 1";
// connection.query(q, function (error, results) {
// 	if (error) throw error;
// 	console.log(results[0].email);
// });
// connection.end();

// //3rd Challange
// const q =
// 	"SELECT DATE_FORMAT(created_at, '%M') AS month, COUNT(*) AS count FROM users GROUP BY month ORDER BY count DESC";
// connection.query(q, function (error, results) {
// 	if (error) throw error;
// 	console.log(results[0].month);
// 	console.log(results[0].count);
// });
// connection.end();

// //4th Challange
// const q =
// 	"SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo.com'";
// connection.query(q, function (error, results) {
// 	if (error) throw error;
// 	console.log(results[0].yahoo_users);
// });
// connection.end();

// //5th Challange
// const q =
// 	"SELECT CASE WHEN email LIKE '%yahoo.com' THEN 'yahoo' WHEN email LIKE '%gmail.com' THEN 'gmail' WHEN email LIKE '%hotmail.com' THEN 'hotmail' ELSE 'other' END AS provider, COUNT(*) AS total_users FROM users GROUP BY provider ORDER BY total_users DESC";
// connection.query(q, function (error, results) {
// 	if (error) throw error;
// 	console.log(results);
// });
// connection.end();
