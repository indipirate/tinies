const fs = require("fs");
const base64 = ``;
fs.writeFile(
  "myGen.pdf",
  base64,
  {
    encoding: "base64",
  },
  function (err) {
    if (err) console.log("error creating file");
    else console.log("file created!");
  }
);
