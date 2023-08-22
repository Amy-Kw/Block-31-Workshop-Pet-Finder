// import the pets array from data.js

const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 9090;

// GET - / - returns homepage
app.get("/", (req, res) => {
  // serve up the public folder as static index.html file
  res.sendfile(__dirname + "/public/index.html");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
  // send the pets array as a response
  res.send(pets);
});

// get pet by owner with query string
app.get("/api/v1/pets/owner", function (req, res) {
  // get the owner from the request
  //   console.log("owner: " + req.query.owner);
  const { owner } = req.query;
  // find the pet in the pets array
  //   const pet = pets.find(
  const pet = pets.filter((pet) => pet.owner === owner); //when I save the pet part auto correct to have (pet), i know its (pet....
  // send the pet as a response
  res.send(pet);
  //   res.send("owner: " + req.query.owner);
});

// get pet by name
app.get("/api/v1/pets/:name", function (req, res) {
  // get the name from the request
  //   const name = req.params,name;
  console.log("name: " + req.query.owner);

  // find the pet in the pets array
  //   const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());

  // send the pet as a response
  //   res.send(pet);
  res.send("name: " + req.query.owner);
});

// app.listen(PORT, () => {
//   console.log("Server is listening on port " + PORT);
// });

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server is listening on port ", PORT);
});

module.exports = app;
