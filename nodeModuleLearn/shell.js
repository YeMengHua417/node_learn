const shell = require('shelljs')

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }
  
  shell.cd('..')

  if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }
  if (shell.exec('git commit -m "yezi test"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

  if (shell.exec('git pull').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

  if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }