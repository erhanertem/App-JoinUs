const express = require("express"); // Add express library package
const app = express(); //Execute the express package

app.listen(8080, function () {
	console.log("App listening on port 8080!");
}); //Set express to listen at port 8080 defaulting to localhost:8080 for a browser

app.get("/", (req, res) => {
	res.send("HELLO FROM OUR WEB APP!");
}); //Root page "/" - homepage
