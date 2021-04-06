const http = require("http");
const fs = require("fs");
const mimetype = require("mime");

const server = http.createServer((req, res) => {
  let file = __dirname + req.url;
  let stat;
  try {
    stat = fs.lstatSync(file);
    console.log(file);
    fs.readFile(file, (err, data) => {
      res
        .writeHead(200, {
          "Content-Type": "text/html",
        })
        .end(data);
    });
  } catch (error) {
    const error_msg = "NOT FOUND!";
    res
      .writeHead(404, {
        "Content-Length": Buffer.byteLength(error_msg),
        "Content-Type": mimetype.getType(file),
      })
      .end(error_msg);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
