const { spawn } = require('child_process');

module.exports = {
  action: (type, name) => {

    if(type === undefined){
      console.error('Missing type: file or handler');
      return ;
    }

    if(name == undefined){
      console.error('Missing name');
      return ;
    }

    if(type == 'file'){
      spawn('Rscript', ['-e', 'golem::add_js_file("' + name + '")'], { stdio: 'inherit' }); 
      return ;
    }

    if(type == 'handler'){
      spawn('Rscript', ['-e', 'golem::add_js_handler("' + name + '")'], { stdio: 'inherit' }); 
      return ;
    }

  },
}
