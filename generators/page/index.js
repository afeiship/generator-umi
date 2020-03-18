'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const figlet = require('figlet');

require('@feizheng/next-js-core2');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this._config = this.config.getAll();

    // Show Hello message:
    console.log(
      chalk.green(
        figlet.textSync('page', {
          horizontalLayout: 'default',
          verticalLayout: 'default'
        })
      )
    );
  }

  prompting() {
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your page name?'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    const pages = nx.get(this._config, 'dirs.pages');
    this.fs.copyTpl(
      this.templatePath('*.*'),
      this.destinationPath(`${pages}/${this.props.name}`),
      this.props
    );
  }
};
