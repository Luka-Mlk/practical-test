const fs = require("fs");

const CONFIG_SOURCE = `${__dirname}/../../config.json`;

let config = null;

if (config === null) {
  const file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
  config = JSON.parse(file);
}

const get = (section) => {
  if (!config[section]) {
    throw `Configuration section ${section} doest not exist!`;
    // return console.log(`Configuration section ${section} doest not exist!`);
  }
  return config[section];
};

module.exports = {
  get,
};
