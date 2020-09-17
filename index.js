#!/usr/bin/env node

const path = require('path');
const project = require('./src/project');

getPkgPath = (proj) => {
  return path.join(__dirname, proj)
}

const run = async () => {

  let args = process.argv.slice(2);
  let cmd = args[0];

  if(cmd == 'create'){
    project.create(args[1])

  } else {
    console.error(chalk.red('Command not found, pass: create and path'))
  }
  
  
};

run();
