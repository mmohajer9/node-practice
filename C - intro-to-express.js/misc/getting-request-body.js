const qs = require('querystring');
const bodyParser = require('body-parser');

//? getting the request body -- manually (use package instead of this package)
app.use((req, res, next) => {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    req.body = qs.parse(body);
  });

  next();
});

//? getting the request body -- automatically (use bodyParser package)
//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//* parse application/json
app.use(bodyParser.json());