const fs = require("fs");
const path = require("path");

//Create a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) throw err;
//   console.log("Directory created");
// });

//create a file with text
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "This is a test file", (err) => {
  if (err) throw err;
  console.log("data has been entered!");
});

//always data will be overridden
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World.! ", (err) => {
  if (err) throw err;
  console.log("Hello World.!");
  //append the data to the existing file
  fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "I love node JS.", (err) => {
    if (err) throw err;
    console.log("I love node JS.");
  });

  //read text
  fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log("data", data);
  });
});

//rename file name
