// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    routeName: "tables",
    name: "Morgan",
    phoneNumber: "111-111-1111",
    email: "me@myself.com",
    customerID: 1
  },
  {
    routeName: "tables",
    name: "Rebecca",
    phoneNumber: "222-222-2222",
    email: "becky@rebecca.com",
    customerID: 2
  },
  {
    routeName: "tables",
    name: "Bokyoung",
    phoneNumber: "333-333-3333",
    email: "b@bokyoung.com",
    customerID: 3
  }
];

var waitlistTable = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist" , function(req, res){
  return res.json(waitlistTable);
})



// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.routeName = "/api/tables";

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});


app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
  
    var newwaitlist = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newwaitlist.routeName = "/api/waitlist";
  
    console.log(newwaitlist);
    if(tables.length >= 5){
        waitlist.push(newwaitlist);
        res.json(newwaitlist);
    }
    else{
      console.log("Table array");
    }
  
    
  
    

  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});