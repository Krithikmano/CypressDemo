/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin"/>
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')
const options = browserify.defaultOptions;

module.exports=(on,config)=> {
     options.browserifyOptions.plugin.unshift(['tsify'])
     on('file:preprocessor', cucumber())
      on("file:preprocessor", cucumber(options));
      allureWriter(on,config);
     return config;
   
}
