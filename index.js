#!/usr/bin/env node

const path = require('path');
const project = require('./src/project');
const favicon = require('./src/favicon');
const javascript = require('./src/javascript');
const css = require('./src/css');
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
  } else if(cmd == 'favicon') {
    favicon.action(args[1], args[2])
  } else if(cmd == 'js') {
    javascript.action(args[1], args[2])
  } else if(cmd == 'css') {
    css.action(args[1])
  } else {
    console.error(chalk.red('Command not found: create, start, favicon, or module'))
  }
  
  
};

run();
