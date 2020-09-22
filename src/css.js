const { spawn } = require('child_process');

module.exports = {
  action: (name) => {

    if(name == undefined){
      console.error('Missing name');
      return ;
    }

    spawn('Rscript', ['-e', 'golem::add_css_file("' + name + '")'], { stdio: 'inherit' }); 
    return ;
  },
}
