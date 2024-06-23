const hello = require('./src/commands/hello');
const pokemon = require('./src/commands/pokemon');
const rickandmorty = require('./src/commands/rick-and-morty');
const weather = require('./src/commands/weather');
const zipCode = require('./src/commands/zip-code');

const commands = [
  hello.command,
  pokemon.command,
  rickandmorty.command,
  weather.command,
  zipCode.command
];

const executors = {
  hello: hello.execute,
  pokemon: pokemon.execute,
  'rick-and-morty': rickandmorty.execute,
  'weather': weather.execute,
  'zip-code': zipCode.execute
}

module.exports = {
  commands,
  executors
}