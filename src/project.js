const { spawn } = require('child_process');

module.exports = {
  create: (path) => {

    if(path === undefined){
      console.error('Missing path');
      return ;
    }

    spawn('Rscript', ['-e', 'golem::create_golem("' + path + '")'], { stdio: 'inherit' });

  }
}
