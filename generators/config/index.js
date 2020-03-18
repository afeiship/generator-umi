'use strict';
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const yosay = require('yosay');
const Generator = require('yeoman-generator');
const glob = require('glob');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this._config = this.config.getAll();
  }

  prompting() {
    console.log('config:', this._config);
    this.log(
      yosay(
        'Welcome to the striking ' +
          chalk.red('generator .yo-rc.json') +
          ' file!'
      )
    );

    var prompts = [
      {
        type: 'input',
        name: 'prefix',
        message: 'Your project prefix?',
        default: 'umi-'
      }
    ];

    return this.prompt(prompts).then(
      function(props) {
        this.props = props;
      }.bind(this)
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('.yo-rc.json'),
      this.destinationPath('.yo-rc.json'),
      this.props
    );
  }
};
