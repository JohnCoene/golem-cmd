const { spawn } = require('child_process');

module.exports = {
  start: () => {
    spawn('Rscript', ['-e', 'devtools::load_all();run_app();'], { stdio: 'inherit' });
  }
}
