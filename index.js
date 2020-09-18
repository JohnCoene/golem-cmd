#!/usr/bin/env node

const path = require('path');
const project = require('./src/project');
const app = require('./src/app');

getPkgPath = (proj) => {
  return path.join(__dirname, proj)
}

const run = async () => {

  let args = process.argv.slice(2);
  let cmd = args[0];

  if(cmd == 'create'){
    project.create(args[1])
  } else if (cmd == 'module') {
    project.module(args[1])
  } else if (cmd == 'start') {
    app.start()
  } else {
    console.error(chalk.red('Command not found: create, start, or module'))
  }
  
  
};

run();
