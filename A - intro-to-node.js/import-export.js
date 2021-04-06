const fs = require("fs"); // from node modules

const myModule = require("./myModule"); // from local directory

const car = {
  brand: "Ford",
  model: "Fiesta",
};

exports.car = car;

module.exports = car;
