var fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", function(err) {
   if (err) {
      return console.error(err);
   }
});