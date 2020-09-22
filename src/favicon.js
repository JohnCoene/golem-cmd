const { spawn } = require('child_process');

module.exports = {
  action: (action, path) => {

    if(action === undefined){
      console.error('Missing action: rm or use');
      return ;
    }

    if(action === 'add'){

      if(path === undefined){
        console.error('Missing path to favicon');
        return ;
      }

      spawn('Rscript', ['-e', 'golem::use_favicon("' + path + '")'], { stdio: 'inherit' });
      return ;

    } else {
      spawn('Rscript', ['-e', 'golem::remove_favicon()'], { stdio: 'inherit' });
      return ;
    }

  },
}
