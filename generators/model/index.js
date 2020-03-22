'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('@feizheng/yeoman-generator-helper');
const figlet = require('figlet');

require('@feizheng/next-js-core2');
require('@feizheng/next-camelize');
require('@feizheng/next-classify');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this._config = this.config.getAll();

    // Show Hello message:
    console.log(
      chalk.green(
        figlet.textSync('model', {
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
        message: 'Your model name?'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    const models = nx.get(this._config, 'dirs.models');
    const name = this.props.name;
    const data = nx.mix(null, this._config, this.props);
    // rename:
    yoHelper.rename(this, 'template', name)
    // copy:
    this.fs.copyTpl(
      this.templatePath('*.*'),
      this.destinationPath(models),
      data
    );
  }
};
