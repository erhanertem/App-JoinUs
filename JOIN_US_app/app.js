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
const q = "SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now";

connection.query(q, function (error, results, fields) {
	if (error) throw error;
	console.log(results[0].time);
	console.log(results[0].date);
	console.log(results[0].now);
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
