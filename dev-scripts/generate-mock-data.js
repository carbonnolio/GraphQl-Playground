const jsf = require('json-schema-faker');
const faker = require('faker');
const { dataSchema } = require('./mock-data-schema');
const fs = require('fs');
const chalk = require('chalk');

jsf.extend('faker', () => faker);

const json = JSON.stringify(jsf(dataSchema));

fs.writeFile('./mock-data/mock-data.js', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Mock data generated.'));
  }
});
