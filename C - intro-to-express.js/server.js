const express = require('express');
const path = require('path');

//? import routes
const homeRouter = require('./routes/home');

const app = express();
const port = 3000;

//? setting views directory
app.set('views', './views');

//? express automatically will look for the ejs package in node_modules by itself
//? you don't need to import ejs explicitly
app.set('view engine', 'ejs');

//? handling static files automatically
app.use(express.static('public'));

//? using template engine : ejs
//^ you can either use "templates/index.ejs" or "templates/index"
app.get('/', (req, res) => {
  const message = 'Mamad is Here';
  const list = [1, 2, 3, 4, 5, 6];
  res.render('templates/index', { message, list });
});

//? use with prefix
app.use('/home', homeRouter);

//? example of global middleware
app.use((req, res, next) => {
  console.log('global middleware');

  //* goes for the rest of the app - getting out of the middleware to the next one
  next();
});

//? example of using middleware beside a route
app.get(
  '/products',
  (req, res, next) => {
    console.log('local middleware/products');
    next();
  },
  (req, res) => {
    res.sendFile(path.join(__dirname, '/views/products.html'));
  }
);

//? url params
app.get('/articles/:id/:name/', (req, res) => {
  res.send({
    id: req.params.id,
    params: req.params,
    queryString: req.query,
  });
});

//? handler of 404 not found
app.use((req, res) => {
  // console.log("404 handler middleware/last");
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});

//? listening on the given port
app.listen(port, () => console.log(`Server is running on port : ${port}`));
